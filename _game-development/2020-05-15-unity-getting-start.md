---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity Getting Start
description: Unity Getting Start

### HUMAN
header: Unity Getting Start
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Unity # this for AMP related post
### category: dùng để group collection
category: Unity

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

# Getting Start
1. Tải Unity Hub > Đăng nhập bằng email > nhận mã qua email
2. Từ Unity Hub > tải về Editor LTS

Tùy chọn sử dụng với VSC:
- Đảm bảo “Window > Package Manager” của Unity đã cài “Visual Studio Code Editor”
- Đảm bảo VSCode được chọn trong dropdown của “Edit > Preferences > External Tools” (click luôn “Regenerate project files” để tạo file “.vscode/settings.json”)
- Đảm bảo có .NET core SDK và .NET SDK packages đã được cài đặt.
- Cài đặt một số extensions cho VSCode:
	- C# Extension vào “Extension Setting” của C# extension tìm “Omnisharp: Use Global Mono” và chọn ở dropdown là “Always” rồi Restart Omnisharp
	- Unity Code Snippets [Kleber Silva] để có suggestion khi code
	- Debugger for Unity [Unity Technologies] để debug khi cần thiết 
