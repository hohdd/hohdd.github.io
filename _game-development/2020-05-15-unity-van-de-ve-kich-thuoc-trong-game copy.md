---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu Animation trong Unity
description: Tìm hiểu Animation trong Unity

### HUMAN
header: Tìm hiểu Animation trong Unity
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
collection: "Investigate" # this for AMP related post
### category: dùng để group collection
category: "Investigate"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Animator component

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/MecanimAnimatorComponent.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Sơ đồ này cho thấy các nội dung khác nhau (Animation Clips, Animator Controller, Avatar) được kết hợp trong Animator component trên GameObject:<br>
![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/MecanimHowItFitsTogether.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

| Property | Function
|:-|:-
| Controller | Animator Controller, bộ điều khiển (Animator State) gắn liền với nhân vật.
| Avatar  | Avatar của nhân vật này. (Nếu nhân vật hình người, Avatar Mapping: body, arm, leg...)
| Apply Root Motion	| Chọn kiểm soát vị trí và xoay của nhân vật từ chính hoạt ảnh (animation) hay từ tập lệnh (script).
| Update Mode | Điều này cho phép bạn chọn thời điểm Animator cập nhật và nên sử dụng khoảng thời gian nào.
| Update Mode > Normal | Animator được cập nhật không đồng bộ với Update call và tốc độ của Animator phù hợp với khoảng thời gian hiện tại. Nếu khoảng thời gian bị chậm lại, hoạt ảnh sẽ chậm lại để phù hợp.
| Update Mode > Animate Physics | Animator được cập nhật không đồng bộ với FixUpdate call. Bạn nên sử dụng chế độ này nếu bạn đang tạo hoạt ảnh chuyển động của các vật thể có tương tác vật lý, chẳng hạn như các nhân vật có thể đẩy rigidbody xung quanh.
| Update Mode > Unscaled Time | Animator được cập nhật không đồng bộ với Update call, nhưng tốc độ của Animator bỏ qua khoảng thời gian hiện tại và hoạt hình ở tốc độ 100% bất kể. Điều này rất hữu ích để tạo hoạt ảnh cho hệ thống GUI ở tốc độ bình thường trong khi sử dụng khoảng thời gian đã sửa đổi cho các hiệu ứng đặc biệt hoặc để tạm dừng trò chơi.
| Culling Mode | Chế độ loại bỏ bạn có thể chọn cho hình ảnh động.
| Culling Mode > Always Animate | Luôn tạo hoạt ảnh, không loại bỏ ngay cả khi ở ngoài màn hình.
| Culling Mode > Cull Update Transforms | Nhắm mục tiêu lại, IK và ghi Biến đổi bị tắt khi không hiển thị trình kết xuất.
| Culling Mode > Cull Completely | Hoạt ảnh bị tắt hoàn toàn khi trình kết xuất không hiển thị.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

### Animator Controller (State Node)

Bộ điều khiển hoạt hình cho phép bạn sắp xếp và duy trì một bộ Đoạn hoạt hình và các Chuyển tiếp hoạt ảnh liên quan cho một nhân vật hoặc đồ vật. Trong hầu hết các trường hợp, việc có nhiều hình động và chuyển đổi giữa chúng khi một số điều kiện trò chơi xảy ra là điều bình thường. Ví dụ: bạn có thể chuyển từ Clip hoạt hình đi bộ để chuyển Clip hoạt hình bất cứ khi nào phím cách được nhấn. Tuy nhiên, ngay cả khi bạn chỉ có một Clip hoạt hình duy nhất, bạn vẫn cần đặt nó vào Bộ điều khiển hoạt hình để sử dụng nó trên GameObject.

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/MecanimAnimatorControllerWindow.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

{% msg success Bấm "F" để phóng to vùng chọn. Bấm "A" để fit all các Animation States so với cửa sổ View %}

Trong chế độ "Play Mode" có thể xem trạng thái play của các state.

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/classAnimatorController-Pans.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Animation States

Trạng thái hoạt hình là các khối xây dựng cơ bản của **Animation State Machine** (Máy trạng thái hoạt hình). Mỗi trạng thái chứa một chuỗi hoạt ảnh (hoặc cây hòa trộn - **blend tree**) phát khi nhân vật ở trạng thái đó.

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/anim-insp-state-properties.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

| Property | Description
|:-|:-
| Motion | Clip hoạt hình (**animation clip**) hoặc cây pha trộn (**blend tree**) được gán cho trạng thái này.
| Speed  | Tốc độ mặc định của chuyển động cho trạng thái này. Bật **Parameter** để sửa đổi tốc độ với giá trị tùy chỉnh từ tập lệnh.
| Motion Time | Thời gian được sử dụng để phát chuyển động ở trạng thái này. Bật **Parameter** để kiểm soát thời gian chuyển động bằng giá trị tùy chỉnh từ tập lệnh.
| Mirror | Thuộc tính này chỉ áp dụng cho các trạng thái có hoạt ảnh hình người . Cho phép phản chiếu hình ảnh động cho trạng thái này. Bật **Parameter** để bật hoặc tắt tính năng phản chiếu từ tập lệnh.
| Cycle Offset | Phần bù được thêm vào thời gian trạng thái của chuyển động. Phần bù này không ảnh hưởng đến Thời gian chuyển động. Bật **Parameter** để chỉ định Cycle Offset (Độ lệch chu kỳ) từ tập lệnh.
| {% tooltip Foot IK [đặc biệt quan trọng trong việc tạo ra chuyển động đi bộ hoặc chạy cho nhân vật sao cho bàn chân của họ phản ứng một cách thực tế với bề mặt họ đang di chuyển trên đó, như điều chỉnh góc chân để phù hợp với địa hình hoặc bậc thang. Điều này giúp tăng cường tính thuyết phục của hoạt hình và cải thiện trải nghiệm người chơi trong trò chơi điện tử.] %} | Thuộc tính này chỉ áp dụng cho các trạng thái có hoạt ảnh hình người. Cho phép tôn trọng Foot IK ("{% tooltip *Inverse Kinematics of the Foot* [liên quan đến việc tính toán các góc của các khớp để đạt được một vị trí cụ thể cho 'bàn chân' của nhân vật hoạt hình hoặc mô hình 3D. Trong hoạt hình, IK giúp tạo ra các chuyển động tự nhiên hơn cho các phần của cơ thể khi di chuyển một phần khác; ví dụ, khi bạn di chuyển tay của một nhân vật, bàn tay sẽ tự động định vị sao cho phù hợp với chuyển động của cánh tay.] %}")  cho trạng thái này.
| Write Defaults | AnimatorStates có ghi các giá trị mặc định cho các thuộc tính không được tạo hiệu ứng bởi chuyển động của nó hay không.
| Transitions | Danh sách các chuyển đổi bắt nguồn từ trạng thái này.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

##### Animation Clips

Đoạn phim hoạt hình (**Animation Clips**) là một trong những yếu tố cốt lõi của hệ thống hoạt hình của Unity. Unity hỗ trợ nhập hoạt ảnh từ các nguồn bên ngoài và cung cấp khả năng tạo clip hoạt hình từ đầu trong trình chỉnh sửa (**editor**) bằng cửa sổ Hoạt ảnh (**Animation window**).

Animation from External Sources:
- Hoạt hình hình người được chụp tại studio ghi lại chuyển động
- Hoạt ảnh được tạo từ đầu trong ứng dụng 3D bên ngoài (chẳng hạn như Autodesk® 3ds Max® hoặc Autodesk® Maya®)
    + Unity có thể nhập Autodesk® Maya® gốc (.mb hoặc .ma), Autodesk® 3ds Max® (.max) và Blender™ (.blend) cũng như các tệp FBX chung có thể được xuất từ ​​hầu hết các gói hoạt hình. Lưu ý rằng việc nhập từ tệp .blend yêu cầu cài đặt Blender™ cục bộ.
- Bộ hoạt ảnh từ thư viện của bên thứ 3 (ví dụ: từ kho tài sản của Unity)
- Nhiều clip được cắt và cắt từ một dòng thời gian được nhập.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/AnimationClipInspector.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Animation Created and Edited Within Unity:
- Vị trí, góc quay và tỷ lệ của GameObjects
- Các đặc tính thành phần như màu sắc vật liệu, cường độ ánh sáng, âm lượng
- Thuộc tính trong tập lệnh của riêng bạn bao gồm các biến float, số nguyên, enum, vector và Boolean
- Thời gian gọi các hàm trong tập lệnh của riêng bạn<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/AnimationEditorShowsSelected.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

##### Blend Trees

Một nhiệm vụ phổ biến trong hoạt hình trò chơi là kết hợp giữa hai hoặc nhiều chuyển động giống nhau. Có lẽ ví dụ được biết đến nhiều nhất là sự kết hợp giữa hoạt ảnh đi bộ và chạy theo tốc độ của nhân vật. Một ví dụ khác là nhân vật nghiêng sang trái hoặc phải khi quay trong khi chạy.

Điều quan trọng là phải phân biệt giữa **Transitions** và **Blend Trees**. Mặc dù cả hai đều được sử dụng để tạo hoạt ảnh mượt mà nhưng chúng được sử dụng cho các loại tình huống khác nhau.
- **Transitions** được sử dụng để chuyển đổi suôn sẻ từ Trạng thái hoạt hình này sang Trạng thái hoạt hình khác trong một khoảng thời gian nhất định. Các chuyển đổi được chỉ định như một phần của Máy trạng thái hoạt hình. Việc chuyển đổi từ một chuyển động sang một chuyển động hoàn toàn khác thường sẽ ổn nếu quá trình chuyển đổi diễn ra nhanh chóng.
- **Blend Trees** được sử dụng để cho phép nhiều hoạt ảnh được pha trộn mượt mà bằng cách kết hợp các phần của chúng ở các mức độ khác nhau. Mức độ mà mỗi chuyển động đóng góp vào hiệu ứng cuối cùng *được kiểm soát bằng cách sử dụng tham số hòa trộn*, đây chỉ là một trong các tham số hoạt ảnh số được liên kết với Bộ điều khiển hoạt hình. Để chuyển động hòa trộn có ý nghĩa, *các chuyển động được hòa trộn phải có tính chất và thời gian tương tự nhau*. Cây hòa trộn là một loại trạng thái đặc biệt trong Máy trạng thái hoạt hình.

## Playables API

API Playables cung cấp cách tạo công cụ, hiệu ứng hoặc cơ chế chơi trò chơi khác bằng cách tổ chức và đánh giá các nguồn dữ liệu theo cấu trúc dạng cây được gọi là PlayableGraph. PlayableGraph cho phép bạn trộn, trộn và sửa đổi nhiều nguồn dữ liệu và phát chúng thông qua một đầu ra duy nhất.

API Playables hỗ trợ hoạt ảnh, âm thanh và tập lệnh. API Playables cũng cung cấp khả năng tương tác với hệ thống hoạt ảnh và hệ thống âm thanh thông qua tập lệnh.

**Ưu điểm của việc sử dụng Playables API:**
- API Playables cho phép kết hợp hoạt ảnh động. Điều này có nghĩa là các vật thể trong cảnh có thể cung cấp hình ảnh động của riêng họ. Ví dụ: hoạt ảnh về vũ khí, rương và bẫy có thể được thêm động vào PlayableGraph và sử dụng trong một khoảng thời gian nhất định.
- API Playables cho phép bạn dễ dàng phát một hoạt ảnh duy nhất mà không cần tốn chi phí liên quan đến việc tạo và quản lý nội dung AnimatorController.
- API Playables cho phép người dùng tự động tạo các biểu đồ hòa trộn và kiểm soát trọng số hòa trộn trực tiếp theo từng khung hình.
- Có thể tạo PlayableGraph trong thời gian chạy, thêm nút (**node**) có thể chơi được nếu cần, dựa trên các điều kiện (**conditions**). Thay vì có một biểu đồ khổng lồ “một kích thước phù hợp cho tất cả” nơi các nút được bật và tắt, PlayableGraph có thể được điều chỉnh để phù hợp với yêu cầu của tình hình hiện tại.

[Xem thêm Playables Examples](https://docs.unity3d.com/2021.3/Documentation/Manual/Playables-Examples.html){:.external.hvr-forward rel="nofollow" target="_blank"}