---
title: Image Support
resources: []
series: []
math: false
categories: []
tags: []
author: Pim Snel
description: ''
date: '2022-06-24'

---

Hugo ships with a Built-in Shortcode for preprocessing and showing images. 

Quiqr helps adding images as static content. Images can be added inside a page bundle or inside the global static directory. Here are examples showing both use cases. The difference is in the path```/images/...``` vs ```./images/...```

## image stored in static

```
{{</*figure src="/images/gopher-hero.svg" width=100 */>}}
```
{{<figure src="https://mipmip.github.io/quiqr-paper-themed-template/images/gopher-hero.svg" width=100 >}}

## image stored in page bundle
```
{{</*figure src="./images/quiqr-small-logo.png"  width=100 */>}}
```
{{<figure src="./images/quiqr-small-logo.png"  width=100 >}}

