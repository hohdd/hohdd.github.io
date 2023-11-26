---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity Tips - Note
description: Unity Tips - Note

### HUMAN
header: Unity Tips - Note
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
collection: Get_Started # this for AMP related post
### category: dùng để group collection
category: Get_Started

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

| Title | SubTitle
|:-|:-:|-:
| Unity Search (Ctrl+K): có thể save những search thường xuyên... | có thể xem nhanh với inspector, kéo thả vào Hierarchy...
| "Lock the Inspector" để chỉnh sửa properties mà không bị nhảy sang Inspector khác | “Toggle Debug Mode” để hiển thị cả biến private mặc dù không chỉnh sửa được chúng
| Focused Inspectors (Alt+P): luôn hiển thị Inspector ở một cửa sổ mới | hoặc mở bằng Right-click và chọn Properties...
| Numeric field expressions: L(a,b), R(a,b), +=, -=, *=, /= ... | sqrt(a), floor(a), ceil(a), round(a), cos(a), sin(a), tan(a), pi
| Không nên điều chỉnh Scale của Transform Component. Tùy chọn tốt nhất là tạo Models real-life sale. | Kích thước của Mesh trong Unity (và do đó là thang đo của Transform) rất quan trọng, đặc biệt là trong quá trình mô phỏng vật lý.
| Transforms: Parenting Transforms về <0,0,0> trước khi thêm Child | Điều này có nghĩa là tọa độ cục bộ của Child sẽ giống với tọa độ chung, giúp bạn dễ dàng đảm bảo rằng bạn đặt Child ở đúng vị trí.
| Việc thay đổi Scale ảnh hưởng đến Position của child Transforms | Ví dụ: Scale cha mẹ thành (0,0,0) sẽ định vị tất cả Child ở (0,0,0) so với cha mẹ.
| Testing properties: trong “Play Mode” có thể thay đổi value của properties để xem nó tác động thế nào đến trò chơi | khi thoát “properties” value sẽ được reset.
| Deactivate GameObjects: đánh dấu GameObject là “inactive” (trong Inspector) | trong Script sử dụng method SetActive
| Nếu bạn Deactivate một GameObject gốc thì bạn cũng Deactivate tất cả các GameObject con của nó | việc Deactivate sẽ ghi đè cài đặt “activeSelf” trên tất cả các GameObject con.
| “Tag” là một từ tham chiếu mà bạn có thể gán cho một hoặc nhiều GameObject | sử dụng "Tag" để tìm reference trong code (FindWithTag)
| Preset Manager: sử dụng để đặt trước giá trị mặc định của component, import Assets | Unity còn áp dụng Giá trị đặt trước mặc định khi bạn sử dụng lệnh Reset trong Inspector.
| Project Structure: Tổ chức tốt sẽ giúp bạn dễ dàng tìm thấy các tài sản mà bạn cần. | Sử dụng các tên thư mục mô tả nội dung/mục đích/scope-phạm vi của chúng
| Input System: sử dụng interface của Unity, còn lại để Unity tự xử lý. | Input.GetAxis("Horizontal"); ...transform.Translate(Vector3 * moveSpeed * Time.deltaTime);
| Mobile device input: Multi-touch screen... trạng thái và số lượng ngón tay touch... | Chuyên sâu hơn Touch còn có "Lực nhấn", "điểm tiếp xúc đầu tiên", là Pen (bút cảm ứng)...
| Physics: tùy tương tác muốn mô phỏng để sử dụng component phù hợp CharacterController, Rigidbody, Collision | Character Controller, Rigidbody, Kinematic, Convex, Constant Force, Interpolate/Extrapolate, Collision, Joints, Articulations, Cloth...
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue}