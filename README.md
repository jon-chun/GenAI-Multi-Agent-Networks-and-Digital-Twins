# course-template
Fork this template to set up a new class landing page, syllabus, etc.

# This is a custom course website theme based on Jekyll-Docs template

Developed by Hasitha Chikkala, Shachi K Shah under the guidance of Jesse Lecy for the DS4PS organization and available as a github pages theme that can be forked and used to build a new course website with ease.

## Features

* Course Info 
* Syllabus Timeline (Section-wise)
* Print Overall Syllabus
* Datasets Info
* Datasets Catalog
* Discussions built from Issues 
* Separate Course Content from website
* Git access to edit


## Setting up a Course Website

Fork this repository and update the `_config.yaml` file with your github info, baseurl and other details, also set up another repository for the content either by forking our sample repo or creating a similar one. 

`_config.yml` - This is the principal data file used to configure the website's skeleton and then markdown files are used to add content to each of the pages in the website.

For each of these pages mentioned, there is a markdown file and a html layout associated, wherein the html decides the generalized layout for each page while the markdown is used to input custom website content. This can be mapped easily as follows:

* Course Landing page    <-   index.md     +    index.html
* Syllabus Overview page <-  syllabus.md   +   syllabus.html
* Resources Page         <- resources.md   +  resources.html
* Datasets Page          <-  datasets.md   +   datasets.html   
* GetHelp Page           <- discussions.md +  discussions.html
* Posts page             <- year-month-day-title.md + post.html

All of these layouts are present in the layouts folder. 
Also, the config.yml has the information for the websites navigation, the baseurl to launch the website and content properly, the author details, the header and footer details, social media links, github repo names and the url for launching github pages. The following section explains each of these data fields in detail. 


### Config file - basic setup of the website

The data fields in this file can be divided into the certain sections: 
* Setup Info
```yaml
# Site subpath, e.g. /blog
baseurl:            "/course_website"

permalink:          /:title/

# Site base hostname & protocol, e.g. http://example.com
url :               "https://hasi96.github.io"

# Default author settings
author:
    name:       Hasitha
    github:     hasi96   # Github username for avatar

# Author settings, displayed on post and doc pages if front matter references author name e.g. author: peter
authors:
    peter:
        name:       Peter Brown
        github:     PressApps    # Github username for avatar

# Github repository details
github_info:
    username:       hasi96 # Github username for avatar
    branch:       master
    website-repo:      course_website
    course-repo:        Data-Science-Class

```
* Website basic Info
```yaml
# Site logo, image or text
brand:
    image:          # logo.svg  # e.g. logo.png, upload logo image file to /assets/img/ folder
    text:           Foundations of Data Science      # if the above "logo:" image variable  is not set, this text logo is displayed instead

# Site title and description
title:              DS4PS
description:        Website for the MS in Program Eval and Data Analytics Program, ASU


index:
    title: Data Science
    subtitle: This course aims at empowering students especially from a non-computerscience background to learn easy tools that can be used for data analysis
    image: imac.svg

```
* Website Navigation 
```yaml

header:
- title: Course Syllabus
  url: syllabus/

- title: Textbook
  url: https://bookdown.org/yihui/bookdown-demo/ 

- title: Datasets
  url: datasets/

- title: Resources
  url: resources/

- title: GetHelp
  url: discussions/

footer:
- title: Home
  url: /

- title: Datasets
  url: /datasets/

- title: Textbook
  url:  https://bookdown.org/yihui/bookdown-demo/

- title: Course Timeline
  url: /syllabus/


```
* Home Page Info
```yaml

info: 
 program_title: Data Science for Public Sector
 program_website: 
 course_title:
 course_number:
 course_level:
 course_website:
 course_start_end_dates:
 course_prerequisites:
 class_meets_when:
 class_meets_where:

instructor:
-  name: Jesse 
   title: Professor
   email:
   phone:
   website_url:
   office_hours_times:
   office_hours_location:
   office_hours_app_url:
   github_url: 
   twitter_url:
   scholar_url:
   linked_in_url:
-  name: Hasitha
   title:
   email:
   phone: 
   website_url:
   office_hours_times:
   office_hours_location:
   office_hours_app_url:
   github_url:
   twitter_url:
   scholar_url:
   linked_in_url:


textbooks:
- title: Intro to Data Science
  authors:
  edition:
  link: https://www.w3schools.com/tags/att_body_link.asp
  required (y/n):

```
* Social Media Links and other settings
```yaml

# Social icons displayed in footer
social:
    email:
    website:
    facebook:       https://www.facebook.com/
    flickr:
    dribbble:
    github:
    googleplus:
    instagram:      https://www.instagram.com/
    linkedin:
    pinterest:
    twitter:        https://twitter.com/
    vimeo:          https://vimeo.com/
    youtube:

# Twitter share button
twitter_username:

# Google maps API key, get your key here: https://developers.google.com/maps/documentation/javascript/get-api-key
google_maps_api_key:

# Number of posts displayed on blog page
paginate: 10

# Blog path
paginate_path:      "layouts/datasets/:num/"

# Path to post content assets directory i.e post images, pdfs etc
post_assets:        /assets/posts/

post_css: /assets/css/posts

# Build settings
markdown:           kramdown
highlighter:        rouge

gems:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-gist
  - jekyll-avatar
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules

sass:
  style:            compressed

collections:
  docs:
    output: true

markdown: kramdown
kramdown:
  parse_block_html: true

```

### Enabling comments (via Disqus)

Optionally, if you have a Disqus account, you can tell Jekyll to use it to show a comments section below each post. To enable it, add the following lines to your Jekyll site:

```yaml
disqus:
    shortname: my_disqus_shortname
```

You can find out more about Disqus' shortnames [here](https://help.disqus.com/customer/portal/articles/466208).

Comments are enabled by default and will only appear in production, i.e., `JEKYLL_ENV=production`. If you don't want to display comments for a particular post you can disable them by adding `comments: false` to that post's YAML Front Matter.

### Google Analytics

To enable Google Anaytics, add the following lines to your Jekyll site:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`


# Page-wise Customisation

## Home Page (index)

![](/assets/img/Capture.PNG)

![](/assets/img/Capture2.PNG)

As explained in the screenshots below, the config.yml and index.md are to be updated in order to build a course homepage

## Syllabus Overview Page

This is a view of the course syllabus divided into sections giving an overview of each section in terms of Lectures, Labs, Handout, Reading, Exam. This view is built on the syllabus.md file which builds both the icons and also populates the content displayed on clicking each section. 

```
***  <- this is added to mark the beginning of a new section

# Scope of the Sector  
Musce libero nunc, dignissim quis turpis quis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibus id. Cras fringilla convallis elit, at eleifend mi interam.   
```
After beginning a section, one can start writing all the course details for that section in simple markdown. In order to switch on the checkbox overview for every section, assets in the following format have to be added inside that section. 

```
["Tue 02,2018"]{@date}  

["slides"]{@lecture module_2_slides.html}
["Work by the weekend"]{@lab 02-mini-hw.html} 
[""]{@handout STA112FS_VisDayOneSlides_Fall2017.pdf}
["Read this before the class"]{@exam STA112FS_VisDayOneSlides_Fall2017.pdf}
["Practice"]{@exam STA112FS_VisDayOneSlides_Fall2017.pdf}

```
These asset formats also serve as links to these assets from the content repository from within respective folders - LECTURES, LABS, HANDOUT, READINGS, EXAMS. So, they can be used as part of the section's markdown formatted content as links.


## Post Page

This page shows in detailed information regarding the dataset, a more detailed information regarding the dataset such as source of dataset, owner of dataset, type of data, and other such information regarding the dataset. This pages are stored under `_posts` folder with the naming convention followed as : 
```
YEAR-MONTH-DAY-title.md
```
Where the date should be in yyyy-mm-dd-title format, it is preffred to enter current date as the post are sorted on the basis of date so by giving it current date it will show that post fist in the datset page. 

In the post.md file there are two types data to be entered:

* Metadata
* Content
    
![](/assets/img/Image.png)


## GetHelp Page

This is an auto-generated page with tables built from config's instructor data and a Github Issues view on the repo with a filter. However, content can be added as markdown formatted text in gethelp.md.

### Google Map

To display Google map on contact page, add the following in your page content, replacing latitude, longitude and zoom values:

```yaml
{% include map.html latitude="40.6700" longitude="-73.9400" zoom="16" %}
```

## Dataset

To create a new dataset card, you can create a new markdown file inside the `_posts` directory by following the recommended file naming format:

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. For example, the following are examples of valid post filenames:

```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md
```

Dataset requires front matter, everything in between the first and second --- are part of the YAML Front Matter, and everything after the second --- will be rendered with Markdown and show up as “Content”.
The following is a post file with different configurations you can add as example:

```yaml
---
layout: dataset
title: How To Travel On Low Budget
---
```

### Adding images
To add an image to a post or page use the following codes:
Local image from `/assets/posts/` directory:
```yaml
{% include image.html img="girl.jpg" alt="Alt for image" caption="Girl on a rock" %}
```
External wide image with lightbox:
```yaml
{% include image.html img="https://source.unsplash.com/TT-ROxWj9nA.jpg" lightbox="true" alt="Alt for image" caption="Image in lightbox" %}
```

### Adding table of contents
Add the following code at the top of the post:
```
#### Sections in this article
{:.no_toc}
* TOC
{:toc}
```
`{:.no_toc}` exludes `#### Sections in this article` title from indexing in table of contents

### Responsive Videos
Embed local videos:
```html
<video controls playsinline uk-video="automute: true">
    <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" type="video/mp4">
    <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.ogv" type="video/ogg">
</video>
```
Embed YouTube videos:
```html
<iframe src="http://www.youtube.com/embed/YE7VzlLtp-4?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="600" height="340" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
```

To create a draft post, create the post file under the `_drafts` directory, and you can find more information in [Working with Drafts](https://jekyllrb.com/docs/drafts/).

## Customization

To modify the primary color, open `/_sass/theme/variables.scss` and replace the color values e.g.:

```scss
// Main content
$color-main: #0F1214;
```

Further style customisation can be done in the following files:
```
/_sass/theme/mixins.scss
/_sass/theme/variables.scss
/assets/css/main.scss
```

## Credits and Sources

- Google analytics https://www.google.com/analytics/
- Google maps https://www.google.com/maps
- UIkit front end framework https://getuikit.com/
- Jekyll CML https://jekyllrb.com/
