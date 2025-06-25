# Ollama Custom Storage Configuration Guide

## Overview

This document describes the customization made to configure Ollama to store model files on a larger external drive at `/data/wdblue8tb/ollama` instead of the default locations. This setup ensures models remain accessible after system updates and reboots, while maintaining compatibility with applications that use Ollama.

## System Information

- **OS**: Ubuntu 22.05
- **Ollama Version**: 0.6.5+
- **Storage Drive**: 7.3TB drive mounted at `/data/wdblue8tb`
- **Model Storage Path**: `/data/wdblue8tb/ollama`
- **Implementation Method**: Environment variable (`OLLAMA_MODELS`)

## File Locations

| Purpose | Path | Description |
|---------|------|-------------|
| Main model storage | `/data/wdblue8tb/ollama/models` | Primary location for model files |
| Model blobs | `/data/wdblue8tb/ollama/models/blobs` | Binary large objects that make up the models |
| Model manifests | `/data/wdblue8tb/ollama/models/manifests` | Metadata files describing the models |
| Systemd override | `/etc/systemd/system/ollama.service.d/override.conf` | Forces Ollama service to use custom model path |
| Environment variable | `~/.bashrc` | Sets OLLAMA_MODELS for command line usage |
| Startup script | `~/ollama-startup.sh` | Ensures proper setup after system reboots |

## Configuration Details

### 1. Environment Variables

The `OLLAMA_MODELS` environment variable is set in multiple locations:

1. **User shell environment** (in `~/.bashrc`):
   ```bash
   export OLLAMA_MODELS=/data/wdblue8tb/ollama
   ```

2. **Systemd service** (in `/etc/systemd/system/ollama.service.d/override.conf`):
   ```ini
   [Service]
   Environment="OLLAMA_MODELS=/data/wdblue8tb/ollama"
   ```

3. **Startup script** (in `~/ollama-startup.sh`):
   ```bash
   export OLLAMA_MODELS=/data/wdblue8tb/ollama
   ```

### 2. Directory Structure

```
/data/wdblue8tb/ollama/
├── models/
│   ├── blobs/        # Contains model weights and parameters
│   └── manifests/    # Contains model metadata
```

### 3. Default Directories

The standard directories are kept clean but empty to avoid conflicts:

```
/usr/share/ollama/.ollama/models/    # Empty directory
/root/.ollama/models/                # Empty directory
~/.ollama/models/                    # Empty directory
```

## Implementation Steps

### Initial Setup

1. Create the base directory structure:
   ```bash
   mkdir -p /data/wdblue8tb/ollama/models/blobs
   mkdir -p /data/wdblue8tb/ollama/models/manifests
   sudo chown -R $(whoami):$(whoami) /data/wdblue8tb/ollama
   ```

2. Configure the environment variable in `.bashrc`:
   ```bash
   echo 'export OLLAMA_MODELS=/data/wdblue8tb/ollama' >> ~/.bashrc
   source ~/.bashrc
   ```

3. Create Systemd service override:
   ```bash
   sudo mkdir -p /etc/systemd/system/ollama.service.d/
   echo '[Service]
   Environment="OLLAMA_MODELS=/data/wdblue8tb/ollama"' | sudo tee /etc/systemd/system/ollama.service.d/override.conf
   sudo systemctl daemon-reload
   ```

4. Clean up default directories and create fresh ones:
   ```bash
   # Stop Ollama service first
   sudo systemctl stop ollama
   
   # Check if any directories are mount points and unmount if needed
   mount | grep -E "ollama|models"
   sudo umount /usr/share/ollama/.ollama/models 2>/dev/null
   sudo umount /root/.ollama/models 2>/dev/null
   sudo umount ~/.ollama/models 2>/dev/null
   
   # Remove and recreate directories
   sudo rm -rf /usr/share/ollama/.ollama/models
   sudo mkdir -p /usr/share/ollama/.ollama/models
   
   sudo rm -rf /root/.ollama/models
   sudo mkdir -p /root/.ollama/models
   
   rm -rf ~/.ollama/models
   mkdir -p ~/.ollama/models
   ```

5. Create startup script to ensure configuration survives reboots:
   ```bash
   cat << 'EOF' > ~/ollama-startup.sh
   #!/bin/bash
   
   # Ensure Ollama models directory exists and has proper permissions
   mkdir -p /data/wdblue8tb/ollama/models/blobs
   mkdir -p /data/wdblue8tb/ollama/models/manifests
   chown -R $(whoami):$(whoami) /data/wdblue8tb/ollama
   
   # Export the environment variable
   export OLLAMA_MODELS=/data/wdblue8tb/ollama
   
   # Run Ollama command or other tasks if needed
   echo "Ollama configured to use models at $OLLAMA_MODELS"
   EOF
   
   chmod +x ~/ollama-startup.sh
   
   # Add to crontab to run at reboot
   (crontab -l 2>/dev/null; echo "@reboot ~/ollama-startup.sh") | crontab -
   ```

6. Restart Ollama service:
   ```bash
   sudo systemctl start ollama
   ```

7. Verify the setup works:
   ```bash
   ollama list
   ```

### Cleaning Up Old Files

After confirming models work from the new location:

```bash
sudo rm -rf /usr/share/ollama/.ollama/models/* 2>/dev/null
rm -rf ~/.ollama/models/* 2>/dev/null
sudo rm -rf /root/.ollama/models/* 2>/dev/null
sudo rm -rf /var/lib/ollama/.ollama/models/* 2>/dev/null
```

## Model Management

### Pulling New Models

Pull models normally. They will be stored in the custom location:

```bash
ollama pull llama3:8b
```

### Creating Aliases for Models

To create an alias for a model:

1. Create a Modelfile:
   ```bash
   echo "FROM llama3.1:8b-instruct-q4_K_M" > ~/llama3_modelfile
   ```

2. Create the alias:
   ```bash
   ollama create llama3.1:8b -f ~/llama3_modelfile
   ```

### Verifying Model Locations

```bash
# Check model list
ollama list

# Verify models are in the correct location
ls -la /data/wdblue8tb/ollama/models/manifests
du -sh /data/wdblue8tb/ollama/models
```

## Debugging FAQ

### Q: Ollama says "Error: mkdir /home/user/.ollama: file exists"

**Solution:**
```bash
# Check if the environment variable is set correctly
echo $OLLAMA_MODELS

# Ensure the directories exist with proper permissions
mkdir -p /data/wdblue8tb/ollama/models/blobs
mkdir -p /data/wdblue8tb/ollama/models/manifests
sudo chown -R $(whoami):$(whoami) /data/wdblue8tb/ollama

# Clean up default directories
sudo rm -rf /usr/share/ollama/.ollama/models
sudo mkdir -p /usr/share/ollama/.ollama/models
sudo rm -rf /root/.ollama/models
sudo mkdir -p /root/.ollama/models
rm -rf ~/.ollama/models
mkdir -p ~/.ollama/models

# Restart Ollama
sudo systemctl restart ollama
```

### Q: Models are visible in 'ollama list' but won't run

**Solution:**
1. Check environment variables:
   ```bash
   echo $OLLAMA_MODELS
   ```

2. Make sure the systemd service uses the correct path:
   ```bash
   cat /etc/systemd/system/ollama.service.d/override.conf
   ```

3. Check permissions:
   ```bash
   ls -la /data/wdblue8tb/ollama/
   sudo chown -R $(whoami):$(whoami) /data/wdblue8tb/ollama
   ```

4. Restart Ollama:
   ```bash
   sudo systemctl restart ollama
   ```

### Q: After updating Ollama, models are missing

**Solution:**
1. Verify your custom location still contains the models:
   ```bash
   ls -la /data/wdblue8tb/ollama/models/manifests
   ```

2. Verify the environment variable is still being applied:
   ```bash
   cat /etc/systemd/system/ollama.service.d/override.conf
   echo $OLLAMA_MODELS
   ```

3. Run your startup script:
   ```bash
   ~/ollama-startup.sh
   ```

4. Restart Ollama:
   ```bash
   sudo systemctl restart ollama
   ```

### Q: After rebooting, Ollama can't find models

**Solution:**
1. Run the startup script manually:
   ```bash
   ~/ollama-startup.sh
   ```

2. Check if the drive is properly mounted:
   ```bash
   df -h | grep wdblue8tb
   ```

3. If not mounted, mount it:
   ```bash
   sudo mount /dev/sda1 /data/wdblue8tb
   ```

4. Check if the environment variable is set:
   ```bash
   echo $OLLAMA_MODELS
   ```

5. Restart Ollama:
   ```bash
   sudo systemctl restart ollama
   ```

### Q: Docker/WebUI/n8n can't access the models

**Solution:**
1. Ensure the Docker containers set the same environment variable:
   ```bash
   # For Docker
   docker run -e OLLAMA_MODELS=/data/wdblue8tb/ollama -v /data/wdblue8tb/ollama:/data/wdblue8tb/ollama ollama/ollama
   ```

2. Update Docker Compose files if used:
   ```yaml
   services:
     ollama:
       image: ollama/ollama
       environment:
         - OLLAMA_MODELS=/data/wdblue8tb/ollama
       volumes:
         - /data/wdblue8tb/ollama:/data/wdblue8tb/ollama
   ```

### Q: "Device or resource busy" when trying to remove directories

**Solution:**
1. Check what's using the directories:
   ```bash
   sudo lsof | grep ollama
   ```

2. Stop Ollama service first:
   ```bash
   sudo systemctl stop ollama
   ```

3. Check if any directories are mount points:
   ```bash
   mount | grep -E "ollama|models"
   ```

4. Unmount if necessary:
   ```bash
   sudo umount /usr/share/ollama/.ollama/models 2>/dev/null
   sudo umount /root/.ollama/models 2>/dev/null
   sudo umount ~/.ollama/models 2>/dev/null
   ```

## Monitoring and Maintenance

### Check Disk Usage

```bash
df -h /data/wdblue8tb
du -sh /data/wdblue8tb/ollama/models
```

### List All Models

```bash
ollama list
```

### Remove Unused Models

```bash
ollama rm model_name
```

---

This configuration provides a robust setup for using Ollama with a custom storage location, ensuring your models remain accessible and properly managed across system changes and reboots.