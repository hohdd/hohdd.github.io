---
layout: post # collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tổng hợp về wordpress (2020)
description: Với việc dễ cài đặt, dễ sử dụng, dễ tùy biến nên đối tượng tiếp cận của wordpress rất rộng lớn, community rất hùng mạnh. Tính đến tháng 6 năm 2019, WordPress được sử dụng bởi 60,8% trong số tất cả các trang web có hệ thống quản lý nội dung được biết đến. Đây là 27,5% trong số 10 triệu trang web hàng đầu (theo [Wiki](https://en.wikipedia.org/wiki/WordPress){:hvr-float-shadow rel="nofollow" target="_blank"}). Đến thời điểm hiện tại (năm 2020), wordpress vẫn rất được ưu chuộng.

### HUMAN
header: Tổng hợp về wordpress
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
categories: wordpress
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: false
amp: true
# collection: english # this for AMP related post
### category: dùng để group collection
# category: Grammar

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 22:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
---

## Overview

Với việc dễ cài đặt, dễ sử dụng, dễ tùy biến nên đối tượng tiếp cận của wordpress rất rộng lớn, community rất hùng mạnh. Tính đến tháng 6 năm 2019, WordPress được sử dụng bởi 60,8% trong số tất cả các trang web có hệ thống quản lý nội dung được biết đến. Đây là 27,5% trong số 10 triệu trang web hàng đầu (theo [Wiki](https://en.wikipedia.org/wiki/WordPress){:hvr-float-shadow rel="nofollow" target="_blank"}). Đến thời điểm hiện tại (năm 2020), wordpress vẫn rất được ưu chuộng.

Khi sử dụng wordpress chúng ta cần phải xem xét cẩn thận security của server, source code, database... bởi có nhiều lỗ hổng có thể dễ dàng bị tấn công. Do vậy cần phải update lên version mới thường xuyên, tuyệt đối không sử dụng mật khẩu mặc định (hoặc dễ đoán), cái gì không dùng, không quan trọng thì xóa đi. Cài Theme và Plugin cũng phải cân nhắc liệu có thể tin tưởng được Theme và Plugin đó hay không?

## Features

Chức năng chính của wordpress là quản lý các page (có 2 page đặc biệt là front-page và blog), post (các bài viết), category và tag (để quản lý và phân loại các bài viết), media (các file upload).

Ngoài ra wordpress có thể tùy biến để thêm vô vàn các tính năng khác thông quan Plugin. Bên cạnh đó còn có Theme cũng có thể dễ dàng thay đổi và tùy biến (Menus, Widgets).

Xem thêm trên [trang tài liệu của wordpress](https://wordpress.org/support/category/basic-usage/){:.hvr-float-shadow rel="nofollow" target="_blank"}

## How-to

**Nguyên tắc**: không custom những thứ default/core của wordpress. Hãy viết riêng cho những gì bạn muốn bằng cách tận dụng những gì wordpress đưa cho bạn.

### Develop Themes
- Hướng dẫn [**step-by-step** ở đây](https://developer.wordpress.org/themes/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Cần tạo file gì và tìm file nào để sửa thì phải biết về [**Template Hierarchy**](https://developer.wordpress.org/themes/basics/template-hierarchy/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Có một file quan trọng và cực độc đó là **functions.php**. Chi tiết về [**Theme Functions** ở đây](https://developer.wordpress.org/themes/basics/theme-functions/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Register menus, widgets, mổ xẻ post, page ... thì hãy xem [**Theme Functionality** ở đây](https://developer.wordpress.org/themes/functionality/){:.hvr-float-shadow rel="nofollow" target="_blank"}.
- Nghiêm túc với Wordpress Theme thì hãy bắt đầu ở đây [**Theme Handbook**](https://developer.wordpress.org/themes/){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Develop Plugins
- Hướng dẫn [**Plugin Basics** ở đây](https://developer.wordpress.org/plugins/plugin-basics/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- **Hook** (**Actions** and **Filters**) là một sản phẩm "**kịch độc**" giúp Plugin của bạn tương tác với wordpress. Xem về [**Hook** ở đây](https://developer.wordpress.org/plugins/hooks/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Muốn hiểu thêm nhiều thứ khác về Plugin hãy bắt đầu ở [**Plugin Handbook**](https://developer.wordpress.org/plugins/){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Build Gutenberg Blocks
- **Gutenberg Blocks** đang thay đổi cách tạo nội dung trên WordPress, nó chính thức được áp dụng từ wordpress 5.0, manh nha trước đó là  [**Gutenberg Plugin**](https://wordpress.org/plugins/gutenberg/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Để viết một **Guteberg Block** bạn có thể sử dụng 2 dạng format của **javascript** là "**ES5**" (ECMAScript 5, mì ăn liền, viết ăn luôn) và "**ESNext**" (standard version khác, cần [**JavaScript Build** với **NPM**](https://developer.wordpress.org/block-editor/tutorials/javascript/js-build-setup/){:.hvr-float-shadow rel="nofollow" target="_blank"}). Bạn nào đã quen với **React** sẽ là một lợi thế khi **Develop Gutenberg Blocks**.
- Flow chính sẽ là:
    1. Register assets (javascript, stylesheet, dependencies)
    2. Define attributes (là object chứa properties của block trong quá trình edit, nó được lưu lại và lấy ra khi chỉnh sửa bài viết)
    3. Registering the Block (đăng ký với tên, icon, mô tả, category... **edit()**: render khi đang edit mode, **save()**: thể hiện block sẽ lưu những gì.)
- Bạn có thể bắt đầu ở đây [**Writing Your First Block Type**](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Hoặc nếu bạn start với **ESNext** [@wordpress/create-block](https://www.npmjs.com/package/@wordpress/create-block){:.hvr-float-shadow rel="nofollow" target="_blank"}
- **Block Registration, Edit and Save, Attributes** là những chủ đề quan trọng bạn cần quan tâm. Hãy xem nó ở [**Block API Reference**](https://developer.wordpress.org/block-editor/developers/block-api/){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Để giúp người dùng cấu hình Block của bạn (chỉnh sửa **Attributes**), hãy xem [**Component Reference**](https://developer.wordpress.org/block-editor/components/){:.hvr-float-shadow rel="nofollow" target="_blank"} và [**Package Reference**](https://developer.wordpress.org/block-editor/packages/){:.hvr-float-shadow rel="nofollow" target="_blank"}

## Other Reference
- [**Icon** resource](https://developer.wordpress.org/resource/dashicons){:.hvr-float-shadow rel="nofollow" target="_blank"}
- Khám phá **Functions, Methods, Hooks, Classes** của wordpress ở tài liệu [**Code Reference**](https://developer.wordpress.org/reference/){:.hvr-float-shadow rel="nofollow" target="_blank"}

{% comment %}{% raw %}
<!-- CHEAT SHEET -------------------------------------------------------------------
### Kramdown: https://kramdown.gettalong.org/quickref.html
### ---------
### Typography: # H1 ## H2 ### H3 **bold text** *italicized text* > blockquote ~~Strikethrough~~
### Nhúng mã `code` hoặc ```code```
### Sử dụng class và style (style đặt sau cùng): **Kramdown**{: .w3-section .w3-margin-right #myId style="color: red"}
### Chèn ảnh: ![TEXT](https://picsum.photos/1500/750){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
### Chèn Link: [link](url){:.hvr-forward|hvr-float-shadow rel="nofollow" target="_blank"}
### Hoặc chèn ảnh và link bằng tag:
##### {% img "url" "TEXT" %}
##### {% a in/out "url" "TEXT" %}
### Table
| Head-1 | Head-2
|:-|:-:|-:
| Row **1** | Column *2*
| Column 1  | Row *2*
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}
##############################################################
### Comments: {% comment %} .... {% endcomment %}
# Layout: "w3-container" căn lề trái phải (16px padding), "w3-section" căn trên dưới (16px margin), w3-margin-left, w3-margin-right
# Grid (placed inside w3-row/w3-content): w3-half/third/twothird/quarter/threequarter, w3-rest, w3-mobile, w3-image
# Responsive hide (@small 601px; @large 992px): w3-hide-small, w3-hide-medium, w3-hide-large
# Floating: w3-left, w3-right
# Sử dụng alert: info/success/warning/danger + "QUOTE": <span class="material-icons w3-xxxlarge">format_quote</span>
# SUCCESS: <div class="w3-card w3-leftbar w3-border-green w3-pale-green w3-panel w3-padding-16">MESSAGE</div>
# WARNING: <div class="w3-card w3-leftbar w3-border-yellow w3-pale-yellow w3-panel w3-padding-16">MESSAGE</div>
# INFO: <div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">MESSAGE</div>
# DANGER: <div class="w3-card w3-leftbar w3-border-red w3-pale-red w3-panel w3-padding-16">MESSAGE</div>
##### Hoặc dùng tag (only support HTML on line): {% msg success/warning/info/danger TEXT %}
# Hover.css (v2): hvr-forward, hvr-float-shadow, hvr-pulse-shrink
# https://mermaid-js.github.io/mermaid/#/flowchart
# <pre class="mermaid">graph LR/TB</pre>
# classDef yellow fill:#ffeb3b; classDef orange fill:#f96;  classDef green fill:#1ded1d;
# rect rgba(255, 0, 0, .1) ~ red / rect rgba(29, 171, 237, .1) ~ blue / rect rgba(0, 255, 0, .1) ~ green ... end
# https://mermaid-js.github.io/mermaid-live-editor
------------------------------------------------------------------------------------>
{% endraw %}{% endcomment %}