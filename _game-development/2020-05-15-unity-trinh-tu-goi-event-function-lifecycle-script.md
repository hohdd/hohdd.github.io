---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Trình tự gọi các Event Functions (Script lifecycle)
description: Trình tự gọi các Event Functions (Script lifecycle)

### HUMAN
header: Trình tự gọi các Event Functions (Script lifecycle)
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
collection: "Chủ đề" # this for AMP related post
### category: dùng để group collection
category: "Chủ đề"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Trình tự gọi các Event Functions (Script lifecycle)

Sơ đồ dưới đây tóm tắt cách Unity sắp xếp và lặp lại chức năng sự kiện trong suốt vòng đời của tập lệnh.

![TEXT](https://docs.unity3d.com/uploads/Main/monobehaviour_flowchart.svg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### 1. First Scene load

Các hàm sau đây được gọi khi một Scence bắt đầu (**một lần cho mỗi đối tượng** trong cảnh).
- **Awake**: Hàm này luôn được gọi trước bất kỳ hàm Start nào và cũng ngay sau một Prefab được khởi tạo. (Nếu GameObject là inactive trong khi khởi động, Awake sẽ không được gọi cho đến khi nó được kích hoạt)
- **OnEnable**: (chỉ được gọi nếu Object đang active): Hàm này được gọi ngay sau khi đối tượng được enabled. Điều này xảy ra khi một phiên bản MonoBehavior được tạo, chẳng hạn như khi một Level được tải hoặc GameObject với component script được khởi tạo.

**Lưu ý rằng**: Đối với các đối tượng được thêm vào Scene, các chức năng **Awake và OnEnable** của tất cả Script sẽ được gọi trước khi Start, Update, v.v. được gọi cho bất kỳ ai trong số chúng. Đương nhiên, điều này **không thể được thực thi khi bạn khởi tạo một đối tượng trong quá trình chơi trò chơi**.

### 2. Before the first frame update

- **Start**: Start được gọi trước khi cập nhật frame đầu tiên chỉ khi phiên bản tập lệnh được enabled.

Đối với các đối tượng là một phần của nội dung Scene, hàm **Start được gọi trên tất cả** các tập lệnh trước khi Update, v.v. được gọi cho bất kỳ tập lệnh nào trong số chúng. Đương nhiên, **điều này không thể được** thực thi **khi bạn khởi tạo một đối tượng trong quá trình chơi** trò chơi.

### 3. Physics update

Sẽ bắt đầu ngay sau khi Start được gọi hoàn tất, **FixedUpdate** được gọi trước khi bắt đầu một **Physics Cycle**, thực hiện các xử lý **OnTriggerXXX**, **OnCollisionXXX** ở đây.

Chu trình vật lý (Physics Cycle) có thể xảy ra nhiều hơn một lần trên mỗi khung hình nếu bước thời gian cố định (Fixed Time Step) nhỏ hơn thời gian cập nhật khung thực tế (vì *FixedUpdate được gọi* trên một bộ đếm thời gian đáng tin cậy, *độc lập với tốc độ khung hình*).

### 4. Input Events

Sau Physics update sẽ đến Input Events, xử lý các event **OnMouseXXX** ở đây.

### 5. During a Frame (Thứ tự Update)

Khi bạn theo dõi logic trò chơi và các tương tác, hoạt ảnh, máy quay phim, Vị trí, v.v., mô hình phổ biến là thực hiện hầu hết các tác vụ bên trong **function Update**, nhưng cũng có những function khác mà bạn có thể sử dụng.

**FixedUpdate**: FixedUpdate thường được gọi thường xuyên hơn Update. Nó *có thể được gọi nhiều lần trên mỗi khung hình*, nếu tốc độ khung hình thấp và nó có thể không được gọi giữa các khung hình nếu tốc độ khung hình cao. Tất cả các tính toán và cập nhật vật lý xảy ra ngay sau khi FixedUpdate. *Khi áp dụng tính toán chuyển động bên trong **FixedUpdate**, bạn không cần nhân giá trị của mình với **Time.deltaTime***. Điều này là do *FixedUpdate được gọi* trên một bộ đếm thời gian đáng tin cậy, *độc lập với tốc độ khung hình*.

**Update**: Update được gọi *một lần trên mỗi khung*. Đây là chức năng chính để cập nhật khung.

**LateUpdate**: LateUpdate được gọi *một lần trên mỗi khung*, sau khi Cập nhật xong. Bất kỳ tính toán nào được thực hiện trong *Update sẽ hoàn tất khi LateUpdate bắt đầu*. Một cách sử dụng phổ biến cho LateUpdate sẽ là các tính toán chuyển động và xoay của máy ảnh trong LateUpdate. *Điều này sẽ đảm bảo rằng nhân vật đã di chuyển hoàn toàn trước khi máy ảnh theo dõi vị trí của nó*.

Nói chung, bạn **không nên dựa vào thứ tự** mà **cùng một** function được gọi cho các **GameObjects khác nhau**.

### 6. In between frames

- **OnApplicationPause**: được gọi ở cuối khung nơi *phát hiện pause*, hiệu quả giữa các bản cập nhật khung hình bình thường. **Một khung hình bổ sung** sẽ được phát hành sau khi OnApplicationPause được gọi **để cho phép trò chơi hiển thị đồ họa cho biết trạng thái tạm dừng**.

### 7. Coroutines

Các funcions của coroutine (yield null/WaitForSeconds/WaitForFixedUpdate/WWW/StartCoroutine) được gọi sau khi hoàn tất **Update**. Một coroutine là một hàm có thể đình chỉ việc thực thi (yield) của nó cho đến khi **YieldInstruction** kết thúc. Các cách sử dụng khác nhau của Coroutines:
- **yield**: Coroutine sẽ tiếp tục sau khi tất cả các Update đã được gọi trên khung tiếp theo.
- **yield WaitForSeconds**: Tiếp tục sau một thời gian trễ được chỉ định, sau khi tất cả các Update đã được gọi cho frame.
- **yield WaitForFixedUpdate**: Tiếp tục sau khi tất cả FixedUpdate đã được gọi trên tất cả các tập lệnh. Nếu coroutine yielded trước FixedUpdate, thì nó sẽ tiếp tục sau FixedUpdate trong khung hiện tại.
- **yield WWW**: Tiếp tục sau khi quá trình tải xuống WWW hoàn tất.
- **yield StartCoroutine**: Xâu chuỗi coroutine và sẽ đợi coroutine **MyFunc** hoàn thành trước.

### 8. Các Event khác (Editor, Animation, Rendering, When the Object is destroyed, When quitting)

Xem thêm ở đây: [Order of execution for event functions](https://docs.unity3d.com/Manual/ExecutionOrder.html){:.hvr-forward.external rel="nofollow" target="_blank"}

