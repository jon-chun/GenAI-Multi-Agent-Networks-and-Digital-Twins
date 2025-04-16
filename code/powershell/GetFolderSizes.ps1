function Get-DirectorySizeFormattedWithInnerProgress {
    param(
        [Parameter(Mandatory=$true, ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]
        [Alias('PSPath')]
        [string]$Path,
        [Parameter(Mandatory=$true)]
        [int]$OuterTotal,
        [Parameter(Mandatory=$true)]
        [int]$OuterCurrent
    )
    process {
        $allFiles = Get-ChildItem -Path $Path -Recurse -Force -ErrorAction SilentlyContinue
        $totalFiles = $allFiles.Count
        $totalSizeBytes = 0
        $processedFiles = 0

        $outerProgress = (($OuterCurrent - 1) / $OuterTotal) * 100
        Write-Progress -Id 1 -Activity "Analyzing Top Level" -Status "Processing: '$Path'" -PercentComplete $outerProgress -CurrentOperation "$OuterCurrent / $OuterTotal items"

        Write-Progress -Id 2 -Activity "Calculating Size" -Status "Processing files in '$Path'" -PercentComplete 0 -ParentId 1

        foreach ($file in $allFiles) {
            if ($file.PSIsContainer -eq $false) {
                $totalSizeBytes += $file.Length
            }
            $processedFiles++

            $innerProgress = ($processedFiles / $totalFiles) * 100
            Write-Progress -Id 2 -Activity "Calculating Size" -Status "Processing files in '$Path'" -PercentComplete $innerProgress -CurrentOperation "$processedFiles / $totalFiles items processed" -ParentId 1
        }

        Write-Progress -Id 2 -Activity "Calculating Size" -Completed -ParentId 1

        if ($totalSizeBytes -ge 1GB) {
            [PSCustomObject]@{
                Directory = $Path
                Size = "{0:N2} GB" -f ($totalSizeBytes / 1GB)
                SizeBytes = $totalSizeBytes
            }
        } elseif ($totalSizeBytes -ge 1MB) {
            [PSCustomObject]@{
                Directory = $Path
                Size = "{0:N2} MB" -f ($totalSizeBytes / 1MB)
                SizeBytes = $totalSizeBytes
            }
        } elseif ($totalSizeBytes -ge 1KB) {
            [PSCustomObject]@{
                Directory = $Path
                Size = "{0:N2} KB" -f ($totalSizeBytes / 1KB)
                SizeBytes = $totalSizeBytes
            }
        } else {
            [PSCustomObject]@{
                Directory = $Path
                Size = "$totalSizeBytes bytes"
                SizeBytes = $totalSizeBytes
            }
        }
    }
}

Write-Host "Getting list of top-level items..."
$topLevelItems = Get-ChildItem -ErrorAction SilentlyContinue

$totalTopLevelItems = $topLevelItems.Count
$currentTopLevelItem = 0

$directorySizes = @()

foreach ($item in $topLevelItems) {
    $currentTopLevelItem++
    $progressPercent = (($currentTopLevelItem - 1) / $totalTopLevelItems * 100)
    Write-Progress -Id 1 -Activity "Analyzing Top Level" -Status "Processing: '$($item.Name)'" -PercentComplete $progressPercent -CurrentOperation "$currentTopLevelItem / $totalTopLevelItems items"

    if ($item.PSIsContainer) {
        $result = Get-DirectorySizeFormattedWithInnerProgress -Path $item.FullName -OuterTotal $totalTopLevelItems -OuterCurrent $currentTopLevelItem
        $directorySizes += $result
    } else {
        Write-Host "File: $($item.FullName), Size: $($item.Length) bytes"
    }
}

Write-Progress -Id 1 -Activity "Analyzing Top Level" -Completed

if ($directorySizes) {
    Write-Host "`n--- Directory Sizes ---"
    $directorySizes | Sort-Object -Property Directory | Format-Table -AutoSize
}