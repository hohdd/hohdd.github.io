---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Project Boost - Challenges
description: Project Boost - Challenges

### HUMAN
header: Project Boost - Challenges
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: false # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Project_Boost # this for AMP related post
### category: dùng để group collection
category: Project_Boost

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-16 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

### Challenge 1

#### Setup
- Tạo Launchpad ở vị trí trung tâm với kích thước 2,1,2
- Tạo Terrian sao cho bề mặt trên nằm ở vị trí Y=0, với kích thước: 100,30,30
- Tạo material cho Terrian
- Điều chỉnh hướng của ánh sáng thích hợp và kéo nó ra chỗ khác (ko phụ thuộc vị trí)
- Điều chỉnh camera ở vị trí thích hợp (kéo,quay...)
- Everything in hierachy is "prefabbed"

#### Mục tiêu
- Hiểu được các Tools để thay đổi các giá trị X (dài), Y (rộng/cao), Z (dầy)
	- Hand (Q) -> điều khiển góc nhìn của Screen (dùng chuột trái để move screen, giữ Alt để quay screen)
	- Move (W) -> điều chỉnh vị trí (position) của GameObject. Thay đổi dài (X), rộng/cao (Y), dầy (Z)
	- Rotate (E) -> điều chỉnh góc quay (rotation) của GameObject. Quay theo các trục X, Y, Z, hoặc quay cả 3 cùng lúc.
	- Scale (R) -> điều chỉnh kích thước của GameObject (X:dài, Y:rộng/cao, Z:dầy)
- Hiểu được Position tính từ tâm giữa của GameObject, nghĩa là bề mặt [1,0,1] nằm cắt ngang chính giữa GameObject.
- Hiểu được Directional Light: cường độ và màu sắc phụ thuộc vào hướng ánh sáng giống như các thời điểm mặt trời trong ngày, nó không phụ thuộc vào vị trí của nguồn sáng này.
- Control được Screen:
	- Chọn (W) GameObject nhà nhấn F để frame nó vào giữa màn hình (kéo Screen đi chỗ khác trước khi nhấn F để đưa GameObject về trung tâm)
	- Sử dụng chế độ bay (fly) để nhìn tổng thể: giữ chuột phải + AWSD (điều hướng) + EQ (lên xuống) + Shifft để tăng tốc
	- Kết hợp: F > Q > Alt + mouse left

### Challenge 2

#### Setup
- Tạo một tên Rocket

#### Mục tiêu
- Hiểu được group các phần nhỏ GameObject bằng một Empty Object.
- Hiểu được Pivot (điểm quay ở 0.0.0) và Center (điểm quay ở giữa GameObject) khi ở chế độ Rotate (phím tắt Z)
- Hiểu được phím tắt để snap (Ctrl + Shift + di chuyển)
- Hiểu được phím tắt để bắt dính các góc cạnh (V = Vecter)
- Khi sửa Position: x=0 và z=0 sẽ đưa Rocket về trung tâm của Launchpad (vì Launchpad ở Position 0.0.0)

### Challenge 3

#### Setup
- Thêm Rigbody cho Rocket

#### Mục tiêu
- Hiểu Meshes (lưới thể tích và lưới đa giác), Mesh Renderer (render vật thể dựa vào Mesh). Định dạng file, va chạm, nội suy, bề mặt, ánh sáng phản chiếu...
- Hiểu Box Collider (là khung màu xanh thể hiện danh giới phần va chạm); Compound Collider (kết hợp va chạm, ma trận va chạm...)
- Hiểu Physic Material (được sử dụng để điều chỉnh ma sát và các hiệu ứng nảy của các đối tượng va chạm. Assets > Create > Physic Material). Ma sát (tĩnh và động). Bounciness (độ nảy)...
- Hiểu Rigidbody (nhận lực và mô-men xoắn để làm cho các vật thể chuyển động giống thực tế), đây là một trong rất nhiều loại Physics Component (hành vi vật lý thuyết phục, thực tế)
- Biết thêm Script Component, hàm Start() được call 1 lần khi start game, hàm Update() được call ở mọi frame (FPS)
- Hiểu "cross platform input" (virtual input layer): Nó cho phép người chơi thay đổi các phím. Nó cho phép bạn triển khai trên thiết bị di động một cách dễ dàng
- Có thể sử dụng câu lệnh debug: print("Update")
- Biết các xem thông số "Stats" khi ở Play mode (Audio, Graphics, Frame Per Second...)
- Biết sự khác nhau giữa GetKey và GetKeyDown, khi xử lý Input nên dùng Input.GetAxis và Input.GetButton vì nó cho phép người dùng cấu hình phím. Nếu dùng trực tiếp thì sử dụng "Input.GetKey(KeyCode.A)"

### Challenge 4

#### Setup
- Viết Script để thêm lực đẩy (Force) cho Rocket

#### Mục tiêu
- Sử dụng GetComponent để lấy component Rigidbody khi start game, sử dụng Vector3.up shorthan
- Điều chỉnh màu chế độ play mode: Edit > Reference > Color > General:Playmode tint
- Biết chỗ xem và cấu hình các phím tắt (Shift+Space): Edit > Reference > Keys
- Biết quy tắc Left-handed và Right-handed: ngón cái là X (Red), ngón trỏ là Y (Green), ngón giữa là Z (Blue).
	- Unity sử dụng Left-handed. Để xác định hướng quay của một trục (giá trị dương) thì chỉ việc đếm X>Y>Z>X>Y>Z...
	- "Top" là ngửa lòng bàn tày lên và trỏ về phía mình, "Bottom" là úp lòng bản tay xuống và trỏ ra phía trước
	- "Front" là lòng bàn tay hướng về phía mình, "Back" là mu bàn tay hướng về phía mình
	- "Right" là ngón cái hướng về phía mình, ngược lại "Left" là ngón cái hướng xa phía mình
	- X: trục ngang: trái là +, phải là -
	- Y: trục đứng: trên là +, dưới là -
	- Z: trục vuông góc màn hình: đi vào là +, đi ra (phía mình) là -
- Phân biệt Rotate (xoay) và Force (đẩy)
	- X: tâm xoay là X, đẩy theo hướng trục X
	- Y: tâm xoay là Y, đẩy theo hướng trục Y
	- Z: tâm xoay là Z, đẩy theo hướng trục Z
- Xử lý lỗi không autocomplete khi viết Script, nguyên nhân chưa có .Net Framework 4.6.1, lỗi cài đặt do đang pending restart.

### Challenge 5

#### Setup
- Sử dụng "Time.deltaTime"
- Thêm component "Audio Source" cho Rocket, khi thrust thì play, không thì stop
- Đóng băng Rocket chỉ fly (Position) trong mặt (1,1,0) và chỉ Rotate theo trục Z. Chỉ cho Rigidbody can thiệp Rotation khingười chơi Input

#### Mục tiêu
- Những thay đổi (thuộc tính) trong khi running "Play mode" nó sẽ biến mất khi stop running. Thay đổi code thì không bị mất (và có tác dụng luôn)
- Khi trực tiếp xử lý chuyển động của một GameObject cần phải suy nghĩ về "Độc lập tốc độ khung hình" (Frame Rate Independence) = cùng một tốc độ trong các điều kiện FPS khác nhau.
- "Audio Listener" luôn được thêm vào Camera chính theo mặc định. Mỗi cảnh chỉ có thể có một "Audio Listener". Cài đặt âm thanh của Project: Edit > Project Settings > Audio
- Khi "Audio Listener" ở gần một "Audio Source" (một component thêm vào GameObject) người chơi sẽ nghe thấy nó với hiệu ứng giống trải nghiệm thật (to, nhỏ, vọng âm, độ vang...)
- Để đóng băng Position & Rotation, tìm đến thuộc tính "Constraints" của "Rigidbody"
- Xử lý [SerializeField] một biến để chỉ có thể thay đổi trong Inspector (các Scripts khác cũng không thể thay đổi).
- Không khai báo biến trong hàm Update (hoặc hàm được call bởi Update) vì sẽ tạo vô số biến rác (làm ngốn ram)

### Challenge 6

#### Setup
- Sử dụng "Tags and Layers", sử dụng GameObject.Instantiate(...)
- Xử lý va chạm với "void OnCollisionEnter(Collision collision)"

#### Mục tiêu
- "Tags and Layers" (Edit > Project Settings).
- Một GameObject chỉ có thể có một Thẻ được gán cho nó. Sử dụng GameObject.FindWithTag("Respawn") để lấy GameObject cần reference.
- Layers được sử dụng phổ biến nhất bởi Camera và Lights để điều khiển hiển thị bằng cách chọn "Culling Mark" (của Camera và Lights)
- Khởi tạo một GameObject với Instantiate(respawnPrefab, respawn.transform.position, respawn.transform.rotation)
- Mỗi va chạm (xem thêm ma trận va chạm) sẽ call OnCollisionEnter(). Rocket có 4 chân sẽ va chạm 4 lần với Launchpad
- Sử dụng Switch-Case và "collision.gameObject.tag" để nhận biết đang va chạm với cái gì.

### Challenge 7

#### Setup
- Tìm hiểu các tài nguyên Unity DOTS (Unity Data-Oriented Technology Stack), Unity Game Architectures, Coding Standards...
- Chỉnh lại Camera
- Khám phá Prefab
- Có thể để AudioSource để play nhiều AudioClip
- Sử dụng ParticleSystem


#### Mục tiêu
- Tìm thấy cảm hứng & đam mê với các tài nguyên Unity DOTS (Unity Data-Oriented Technology Stack), Unity Game Architectures, Coding Standards...
- Tìm thấy Diagram của MonoBehavious, biết về EC (Entity-Component) để tránh lộn xộn Spaghetti...
- Menu: GameObject > Align With View (Ctrl+Shift+F)
- Các GameObject sử dụng prefab giống như mở một file TEXT, hoặc là đã bị sửa hoặc không, khi save thì file ko bị sửa được sync, thông tin save sau sẽ ghi đề save trước.
- Có thể để AudioSource để play nhiều AudioClip bằng audioSource.PlayOneShot(audioClip_name). Rút kinh nghiệm đừng "tự bóp" mình (stop mà vẫn đòi play)
- Sử dụng ParticleSystem reference đến một Prefab (particle) trong Scence, sử dụng Play và Stop để điều khiển. Particle có thể sử dụng để tạo nhiệu hiệu ứng Game.

### Challenge 8

#### Setup & Mục tiêu
- Moving Platform Pattern: sử dụng "[DisallowMultipleComponent]" dùng cho class để ngăn 1 GameObject ko sử dụng Script nhiều lần.
- Sử dụng "[Range(min,max)]" chỉ để debug xem ở Inspector giá trị thay đổi.
- Sử dụng "Time.time" là thời gian seconds (float) từ lúc start game. Nhân 1 số với 1 vector3, cộng 2 vector3.
- Khám phá https://learn.unity.com/ Unity Tips, Design, Art... 

### Challenge 9

#### Setup & Mục tiêu
- Thiết kế level là một nghệ thuật: hướng dẫn, thử thách, mục tiêu, trải nghiệm thú vị khiến người chơi quan tâm.
- Thêm level lighting, tự Generate Lighting mỗi level. Khai thác sự độc đáo của Lighting để tăng trải nghiệm người dùng.
- Khám phá Nested Prefab: Khi update parent thì prefab con sẽ không nhận được update, khi delete prefab ở Assets sẽ lỗi reference ở Hierarchy
- Nâng cấp version Unity của project: tạo 1 project với version mới, copy thư mục Assets cũ sang thư mục project mới, generate lại Lighting. Test lại game.
- Thay đổi điểm xoay của gameobject (change pivot point): sử dụng chế độ "Freeze Transform", rồi chọn Children và kéo lên xuống phù hợp với EmptyObject
- Thêm chức năng "hack" để test game (nhấn C để on/off collision, L để load next level)
- Sử dụng "SendMessage" để call method của một GO khác, Send tới tất cả các Script (MonoBehaviour) của GO, hoặc "BroadcastMessage" với mọi children.
- Khám phá "SceneManager", lưu ý giữa "scence in build settings" và "scence loaded".

### Challenge 10

#### Setup & Mục tiêu
- Texture: có 2 loại Bump Map là Height Map (texture sử dụng tỷ lệ từ trắng đến đen cho biết độ cao) và Normal Map (texture sử dụng RGB để cho biết hướng X,Y,Z).
- Tạo một Terrain và nghịch với texture (import từ store, paint texture, Edit Terrain Layers...) hiểu thuộc tính "Tilling Settings" (Size, Offset); Brush size và Opacity.