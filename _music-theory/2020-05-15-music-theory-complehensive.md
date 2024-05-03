---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Music Theory Complehensive"
description: "Music Theory Complehensive"

### HUMAN
header: "Music Theory Complehensive"
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400
text2speech: false # có bật chức năng Text-To-Speech hay không?

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
### Math
mathjax: true
### Quiz Modal
embquiz: false

collection: Bổ trợ kiến thức # this for AMP related post
### category: dùng để group collection
category: Bổ trợ kiến thức

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## Music Theory Complehensive

### Part 1: The Symbols of Music

#### Pitch Class là gì?

Trong âm nhạc, **pitch class** (viết tắt là p.c. hoặc pc) là một tập hợp của tất cả các nốt nhạc có cùng khoảng cách là một số nguyên của các quãng tám; ví dụ, pitch class C bao gồm tất cả các nốt C ở tất cả các quãng tám. "Pitch class C đại diện cho tất cả các nốt C có thể xuất hiện ở bất kỳ vị trí quãng tám nào."

Điều quan trọng trong lý thuyết âm nhạc, pitch class là “tất cả các nốt liên quan đến nhau qua quãng tám, tương đương hoặc cả hai.” Sử dụng ký hiệu khoa học cho nốt nhạc, pitch class “C” là tập hợp {Cₙ: n là số nguyên} = {…, C₋₂, C₋₁, C₀, C₁, C₂, C₃, …}. Mặc dù không có giới hạn trên hoặc dưới cụ thể cho chuỗi này, chỉ có một số ít trong số các nốt này có thể nghe thấy được bởi con người. Pitch class quan trọng vì *khả năng cảm nhận nốt nhạc của con người là tuần hoàn*: các nốt thuộc cùng một pitch class được cảm nhận có chất lượng hoặc màu sắc tương tự, thuộc tính gọi là “tương đương quãng tám”. Nhà tâm lý học gọi chất lượng của một nốt nhạc là “chroma”. Một chroma là thuộc tính của các nốt nhạc (không phải là chiều cao của âm), giống như màu sắc là thuộc tính của màuPitch class là tập hợp của tất cả các nốt nhạc có cùng chroma, giống như “tập hợp của tất cả các vật trắng” là tập hợp của tất cả các vật trắng.1

Để tránh vấn đề về việc viết các nốt nhạc theo nhiều cách khác nhau, các nhà lý thuyết thường biểu diễn pitch class bằng các số bắt đầu từ số không, với mỗi số nguyên lớn hơn đại diện cho một pitch class cao hơn một nửa nốt nếu chúng được thể hiện như các nốt thực sự trong cùng một quãng tám. Khi đạt đến một quãng tám, các số lại bắt đầu từ số không. Hệ thống tuần hoàn này được gọi là toán học modulo và, trong trường hợp thông thường của chuỗi 12 nốt trong âm nhạc, số thứ tự của pitch class được coi là “modulo 12” (thường viết tắt là “mod 12” trong văn học lý thuyết âm nhạc). Điều này có nghĩa là mỗi nốt thứ mười hai là giống nhau. Chúng ta có thể ánh xạ tần số cơ bản của một nốt f (đo bằng hertz) thành một số thực p bằng phương trình: $p = 12 \times \log_{2}\left(\frac{f}{f_0}\right)$
- $f_0$ là tần số của nốt $C_4$ (middle C).
- $p$ là số thực tương ứng với **pitch class** của nốt nhạc

**Ví dụ**: Giả sử bạn muốn xem ví dụ về pitch class của nốt F. Để làm điều này, chúng ta sẽ xem tất cả các nốt F trong các quãng khác nhau:
1. **F ở quãng F4**: Nếu bạn có một nốt F ở quãng F4, nó thuộc cùng một pitch class với tất cả các nốt F ở các quãng khác.
2. **F ở quãng F5**: Nốt F ở quãng F5 cũng thuộc cùng một pitch class với F ở quãng F4 và F ở các quãng khác.
3. **F ở quãng F3**: Tất cả các nốt F ở các quãng khác nhau đều thuộc cùng một pitch class.
Như vậy, pitch class của nốt F bao gồm tất cả các nốt F ở mọi quãng. Chúng được cảm nhận có chất lượng tương tự và được gọi là “tương đương quãng” với nhau.

#### Chroma là gì?
- Chroma là thuộc tính của một nốt nhạc, không phải là chiều cao của nó. Nó liên quan đến cách con người cảm nhận màu sắc của nốt nhạc.
- Mỗi nốt nhạc có một chroma riêng, không phụ thuộc vào việc chúng có cùng tên hay không. Ví dụ, tất cả các nốt C (C4, C5, C6, v.v.) thuộc cùng một pitch class và có cùng chroma
- Ví dụ về Chroma:
    - Giả sử bạn nghe một nốt C. Khi bạn cảm nhận màu sắc của nó, đó chính là chroma. Dù bạn nghe nốt C ở quãng C4 hay C5, chroma của chúng là giống nhau.
    - Chroma giúp chúng ta hiểu cách các nốt nhạc tương đương với nhau và tạo ra sự cảm nhận về màu sắc âm nhạc.
- **Chroma** và **Pitch Class** có một số điểm tương đồng, nhưng chúng là hai khái niệm khác nhau trong lý thuyết âm nhạc. Chroma liên quan đến cảm nhận màu sắc của nốt nhạc, trong khi pitch class là tập hợp của các nốt nhạc cùng tên.


## Một số keyword
- Âm giai nửa cung (hay còn gọi là Thang âm sắc, âm giai đồng chuyển, âm giai bán cung)