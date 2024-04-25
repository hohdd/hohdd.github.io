---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not
exclude: true # exclude on search
### SEO
title: Python Understanding
description: Python Understanding

### HUMAN
header: Python Understanding
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true
amp: true
### category: dùng để group collection
category: Python

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
---

## Python Understanding

- Indentation:
	- Python sẽ báo lỗi nếu bạn bỏ qua phần thụt đầu dòng.
	- Số lượng khoảng trắng tùy thuộc vào bạn, phổ biến nhất là bốn, nhưng ít nhất phải có một.
- Variables:
	- Python không có lệnh khai báo biến, các biến được tạo khi bạn gán giá trị cho nó.
	- Các biến không cần phải khai báo với bất kỳ Types cụ thể nào và thậm chí có thể thay đổi loại sau khi chúng được đặt.
	- Nếu bạn muốn chỉ định kiểu dữ liệu của một biến, điều này có thể được thực hiện bằng cách Casting (x = str(3), y = int(3), z = float(3))
	- Bạn có thể lấy kiểu dữ liệu của một biến bằng hàm type(). VD: print(type(x)) sẽ in ra <class 'int'>
	- Các biến chuỗi có thể được khai báo bằng cách sử dụng dấu ngoặc đơn hoặc dấu ngoặc kép đều được.
	- Tên biến có phân biệt chữ hoa chữ thường.
	- Global Variables:
		- Các biến được tạo bên ngoài hàm được gọi là biến toàn cục.
		- Nếu bạn tạo một biến có cùng tên bên trong hàm, biến này sẽ là biến cục bộ và chỉ có thể được sử dụng bên trong hàm. Biến toàn cục có cùng tên sẽ giữ nguyên, toàn cục và có giá trị ban đầu.
	- The "global" Keyword:
		- Để tạo biến toàn cục bên trong hàm, bạn có thể sử dụng từ khóa "global".
		- Để thay đổi giá trị của biến toàn cục bên trong hàm, hãy tham chiếu biến đó bằng cách sử dụng từ khóa "global".
- Data Types:
	- Built-in Data Types:
		- Text Type: str
		- Numeric Types: int, float, complex
		- Sequence Types: list, tuple, range
		- Mapping Type: dict
		- Set Types: set, frozenset
		- Boolean Type: bool
		- Binary Types: bytes, bytearray, memoryview
		- None Type: NoneType