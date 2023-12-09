---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Cấu trúc và thứ tự Compile của một project Unity
description: Cấu trúc và thứ tự Compile của một project Unity

### HUMAN
header: Cấu trúc và thứ tự Compile của một project Unity
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
collection: "Chủ đề" # this for AMP related post
### category: dùng để group collection
category: "Chủ đề"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Cấu trúc của một project Unity

```
|- ROOT
|--Assets
|	|--Editor
|	|--Standard Assets
|	|--StreamingAssets
|	|--Resources
|	|--<NameOfGame>
|	|	|--Animations
|	|	|--Art
|	|	|	|--UI
|	|	|--Audio
|	|	|	|--UI
|	|	|--Prefabs
|	|	|	|--UI
|	|	|--Scenes
|	|	|--Scripts
|	|	|	|--UI
|	|	|	|--Utils
|	|	|--Presets
|--Library
|--Editor
|--Gizmos
|--Logs
|--Packages
|--ProjectSettings
|--UserSettings
```

Một project Unity là một tập hợp các tệp và thư mục chứa tất cả các thành phần cần thiết để tạo một trò chơi điện tử.
- Assets: Thư mục này chứa tất cả các tài sản của trò chơi, chẳng hạn như mô hình 3D, âm thanh, hình ảnh và kịch bản. Nội dung của cửa sổ Project trong Editor tương ứng trực tiếp với nội dung của thư mục Assets.
- Editor: thêm chức năng cho Unity trong quá trình phát triển nhưng không có sẵn trong các bản dựng khi Runtime. Các tập lệnh trong thư mục Editor chạy dưới dạng tập lệnh Editor, không phải tập lệnh thời gian chạy (Runtime). Có thể đặt nhiều thư mục Editor ở bất kỳ đâu. Vị trí chính xác của thư mục Editor ảnh hưởng đến thời gian biên dịch các tập lệnh của nó so với các tập lệnh khác. Lưu ý: Unity không cho phép các components có nguồn gốc từ MonoBehaviour được gán cho GameObjects nếu các tập lệnh nằm trong thư mục Editor.
- Gizmos: Gizmos cho phép bạn thêm đồ họa vào Scene để giúp trực quan hóa các chi tiết thiết kế mà không thể nhìn thấy được. Hàm Gizmos.DrawIcon đặt một biểu tượng trong Scene để hoạt động như một điểm đánh dấu cho một đối tượng hoặc vị trí đặc biệt. Bạn phải đặt file ảnh dùng để vẽ biểu tượng này vào thư mục có tên Gizmos để hàm DrawIcon xác định vị trí của nó. Chỉ có thể có một thư mục Gizmos và nó phải được đặt trong thư mục gốc của Dự án.
- Resources: Bạn có thể tải Nội dung theo yêu cầu (Assets on-demand) từ tập lệnh thay vì tạo phiên bản Nội dung trong Cảnh để sử dụng trong trò chơi. Bạn thực hiện việc này bằng cách đặt Assets vào thư mục có tên Resources. Tải các Assets này bằng cách sử dụng hàm Resources.Load. Có thể đặt nhiều thư mục Resources ở bất kỳ đâu.
- Standard Assets: Khi bạn import một Standard Asset package, Unity sẽ đặt tài sản đó vào thư mục có tên Standard Assets. Chỉ có thể có một thư mục Standard Assets và bạn phải để nó trong thư mục gốc của dự án.
- StreamingAssets
- Android Asset Packs
- Android Library Projects
- Hidden Assets: Trong quá trình import, Unity bỏ qua các tệp và thư mục sau trong thư mục Assets (hoặc thư mục con trong đó):
	+ Các thư mục ẩn.
	+ Các Files và folders BẮT ĐẦU với ‘.’.
	+ Các Files và folders KẾT THÚC với ‘~’.
	+ Các Files và folders có tên "cvs".
	+ Các Files với phần mở rộng là .tmp.

### Cách tổ chức một project Unity

Cách tốt nhất để tổ chức một project Unity là tạo các thư mục con để phân loại các tài sản. Ví dụ: bạn có thể tạo các thư mục con cho mô hình 3D, kết cấu, âm thanh và kịch bản.

Tổ chức tốt sẽ giúp bạn dễ dàng tìm thấy các tài sản mà bạn cần. Nó cũng sẽ giúp bạn quản lý project của mình một cách hiệu quả hơn.

### Một số mẹo tổ chức project Unity:

- Sử dụng các tên thư mục mô tả nội dung của chúng.
- Sử dụng các tên tài sản mô tả mục đích của chúng.
- Sử dụng các mô hình và kết cấu có kích thước phù hợp với nhu cầu của bạn.
- Sử dụng các kịch bản ngắn gọn và dễ hiểu.

## Thứ tự Compile

Unity biên dịch tập lệnh trong bốn giai đoạn riêng biệt, dựa trên vị trí của tệp tập lệnh trong cấu trúc thư mục dự án. Unity tạo một tệp dự án CSharp riêng (.csproj) và một tập hợp được xác định trước cho từng giai đoạn. (Nếu không có tập lệnh nào đủ điều kiện cho giai đoạn biên dịch, Unity sẽ không tạo tệp dự án hoặc tập hợp tương ứng.)

Thứ tự biên dịch rất quan trọng khi tập lệnh tham chiếu đến một lớp được biên dịch ở một giai đoạn khác (và do đó nằm trong một assembly khác). Quy tắc cơ bản là bất cứ thứ gì được biên dịch trong một giai đoạn sau giai đoạn hiện tại đều không thể được tham chiếu. Mọi thứ được biên soạn trong giai đoạn hiện tại hoặc giai đoạn trước đó đều có sẵn đầy đủ.

| Phase | Assembly name | Script files
|:-|:-:|-:|-:
| 1 | Assembly-CSharp-firstpass | Runtime scripts trong các thư mục có tên Standard Assets, Pro Standard Assets và Plugins
| 2  | Assembly-CSharp-Editor-firstpass | Editor scripts ở bất kỳ đâu trong các thư mục top-level có tên là Standard Assets, Pro Standard Assets và Plugins
| 3  | Assembly-CSharp | Tất cả các tập lệnh khác không nằm trong thư mục có tên Editor.
| 4  | Assembly-CSharp-Editor | Tất cả các tập lệnh còn lại (những tập lệnh nằm trong thư mục có tên Editor).
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-green}