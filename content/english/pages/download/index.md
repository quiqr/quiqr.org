---
title: download
draft: false
description: Download QUIQR for macOS, Windows or Linux.
content_blocks: []
content_blocks_below_main:
  - disabled: false
    content_type: block_123
    title: ''
    html: ''
    one:
      number: 🍏
      content: >-
        <a id="latest-mac-link" href="">reading...</a>


        <span style="font-size:80%">Open disk image and copy Quiqr.app to your
        Applications folder.</span>
      title: mac
    two:
      number: 🖥
      title: WIN
      content: >-
        <a id="latest-windows-link" href="">reading...</a>


        <span style="font-size:80%">After download, ignore security warning and
        execute the .exe-file to install Quiqr.</span>
    three:
      number: 🐧
      content: >-
        <a id="latest-linux-link" href="">reading...</a>


        <span style="font-size:80%">AppImage,  should run on any Linux
        distribution. Having troubles on Ubuntu? Install libfuse2.  [More Linux
        packages](https://github.com/quiqr/quiqr-desktop/releases/latest) are
        available. </span>
      title: Linux
  - disabled: false
    content_type: block_raw_html
    one:
      number: ''
      title: ''
      content: ''
      bullet_point: []
    two:
      number: ''
      title: ''
      content: ''
      bullet_point: []
    three:
      number: ''
      title: ''
      content: ''
      bullet_point: []
    html: |-
      <style>
      .section{
        padding-top: 50px;
        padding-bottom: 50px;
      }
      </style>
      <script>
        function setLatestVersion(url, id, linktext, href_postfix){

          var element = document.getElementById(id);
          var stamp = Date.now();
          if(element){
            fetch(url+"?stamp="+stamp)
              .then(res => res.text())
              .then(text => {
                const version = text.split('\n')[0].split(": ")[1];
                element.innerHTML = `${linktext} v${version}`;
                element.setAttribute('href', "https://quiqr-desktop-releases.s3.eu-west-1.amazonaws.com/quiqr_" + version + href_postfix);
              })
              .catch(err => console.error(err));
          }
        }
        window.addEventListener("DOMContentLoaded", (event) => {
          var url_win = "https://quiqr-desktop-releases.s3.eu-west-1.amazonaws.com/latest.yml";
          var url_linux = "https://quiqr-desktop-releases.s3.eu-west-1.amazonaws.com/latest-linux.yml";
          var url_mac = "https://quiqr-desktop-releases.s3.eu-west-1.amazonaws.com/latest-mac.yml";
          setLatestVersion(url_mac, 'latest-mac-link' ,  "Quiqr for macOS", "_mac_x64.dmg");
          setLatestVersion(url_linux, 'latest-linux-link' ,  "Quiqr for Linux", "_linux_x86_64.AppImage");
          setLatestVersion(url_win, 'latest-windows-link' ,  "Quiqr for Windows", "_win.exe");
        });
      </script>
  - disabled: false
    content_type: block_img_paragraph
    title: ''
    html: ''
    button:
      link: https://github.com/quiqr/quiqr-desktop/releases
      label: All vesions
      enable: false
    content: >-
      Download [pre-releases and older versions and installers for other
      platforms can be downloaded from
      GitHub](https://github.com/quiqr/quiqr-desktop/releases).
    style: ImageRight
    bg_image: cta-sm-right.png
    image: images.jpg
    subtitle: Other Quiqr Versions
mainContentInfo: ''
resources: []

---

### Download Quiqr

Quiqr is available for Mac, Windows and Linux. Here are the latest installers. 