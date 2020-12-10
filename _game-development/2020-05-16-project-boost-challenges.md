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

#### Setup & Mục tiêu
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

#### Setup & Mục tiêu
- Hiểu được group các phần nhỏ GameObject bằng một Empty Object.
- Hiểu được Pivot (điểm quay ở 0.0.0) và Center (điểm quay ở giữa GameObject) khi ở chế độ Rotate (phím tắt Z)
- Hiểu được phím tắt để snap (Ctrl + Shift + di chuyển)
- Hiểu được phím tắt để bắt dính các góc cạnh (V = Vecter), chỉ có ở chế độ MOVE (W)
- Khi sửa Position: x=0 và z=0 sẽ đưa Rocket về trung tâm của Launchpad (vì Launchpad ở Position 0.0.0)

### Challenge 3

#### Setup & Mục tiêu
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

#### Setup & Mục tiêu
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

#### Setup & Mục tiêu
- Những thay đổi (thuộc tính) trong khi running "Play mode" nó sẽ biến mất khi stop running. Thay đổi code thì không bị mất (và có tác dụng luôn)
- Khi trực tiếp xử lý chuyển động của một GameObject cần phải suy nghĩ về "Độc lập tốc độ khung hình" (Frame Rate Independence) = cùng một tốc độ trong các điều kiện FPS khác nhau.
- "Audio Listener" luôn được thêm vào Camera chính theo mặc định. Mỗi cảnh chỉ có thể có một "Audio Listener". Cài đặt âm thanh của Project: Edit > Project Settings > Audio
- Khi "Audio Listener" ở gần một "Audio Source" (một component thêm vào GameObject) người chơi sẽ nghe thấy nó với hiệu ứng giống trải nghiệm thật (to, nhỏ, vọng âm, độ vang...)
- Để đóng băng Position & Rotation, tìm đến thuộc tính "Constraints" của "Rigidbody"
- Xử lý [SerializeField] trên một biến "private" để chỉ có thể thay đổi trong Inspector (các Scripts khác cũng không thể thay đổi).
- Không khai báo biến trong hàm Update (hoặc hàm được call bởi Update) vì sẽ tạo vô số biến rác (làm ngốn ram). Phân làm 3 group biến: "public, private và SerializeField"

### Challenge 6

#### Setup & Mục tiêu
- "Tags and Layers" (Edit > Project Settings).
- Một GameObject chỉ có thể có một Thẻ được gán cho nó. Sử dụng GameObject.FindWithTag("Respawn") để lấy GameObject cần reference.
- Layers được sử dụng phổ biến nhất bởi Camera và Lights để điều khiển hiển thị bằng cách chọn "Culling Mark" (của Camera và Lights)
- Khởi tạo một GameObject với Instantiate(respawnPrefab, respawn.transform.position, respawn.transform.rotation)
- Mỗi va chạm (xem thêm ma trận va chạm) sẽ call OnCollisionEnter(). Rocket có 4 chân sẽ va chạm 4 lần với Launchpad
- Sử dụng Switch-Case và "collision.gameObject.tag" để nhận biết đang va chạm với cái gì.

### Challenge 7

#### Setup & Mục tiêu
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
- File ".unitypackage" tải về từ AssetStore được lưu ở "AppData\Roaming\Unity\Asset Store"
- Texture: có 2 loại Bump Map là Height Map (texture sử dụng tỷ lệ từ trắng đến đen cho biết độ cao) và Normal Map (texture sử dụng RGB để cho biết hướng X,Y,Z).
- Tạo một Terrain và nghịch với texture (import từ store, paint texture, Edit Terrain Layers...) hiểu thuộc tính "Tilling Settings" (Size, Offset); Brush size và Opacity.
- Material quyết định bởi Shader (là những scripts chứa giải thuật tính tóa màu sắc của mỗi pixel được render)
- Sky là một loại nền mà Camera vẽ trước khi nó kết xuất khung hình. Nó mang lại cảm giác về chiều sâu. Sky có thể chứa bất cứ thứ gì (mây, núi, tòa nhà...). Unity cũng có thể sử dụng Sky để tạo ra ánh sáng xung quanh trong Scence.
- Skybox shaders (material) có các lựa chọn: 6 Sided, Cubemap, Panoramic.
- Ambient Mode (Window > Rendering > Lighting Settings): Nếu ánh sáng không đổi thì dùng "Baked" => click "Generate Lighting" (không generate tự động)
- Visual Effects Components (Add Component > Effects): có thể apply cho Camera, GO, light sources. Khám phá Halo, Lens Flare (Flare, Glare) và màu sắc "Directional light" từ "AllSkyFree"
- Theme màu là gì? kết hợp Sky, color of Directional light, Ambient color (HDR color), SunGlow (Len Flares) để có màu ấn tượng.

### Challenge 11

#### Setup & Mục tiêu
- Tạo một "Splash Scene", tại hàm Awake() sử dụng "DontDestroyOnLoad(gameObject)" để giữ nhạc không bị tắt (ở Play Mode có thể thấy Splash Scene không bị mất).
- Sử dụng Legacy package "Standard Assets (for Unity 2018.4)" để learning (First Person Character Controller, Third Person Character Controller, Car Controller, Aircraft Controller, Particle Example Scene, Rollerball Controller, Camera Rigs, Cross Platform Input, AI Examples)
- Attitude: Không thể biết và thành thạo tất cả, sử dụng công việc của người khác nếu có thể, ưu tiên xây dựng knowledge, biết nó có gì và đào sâu khi cần thiết.
- Nếu bị hiện tượng chậm PC thì bắt Unity sử dụng OpenGL (một API render đồ họa độc lập nền tảng) thay vì Directx11 bằng cách thêm "-force-opengl" ở target chạy "Unity.exe"
- Input.GetAxis (CrossPlatformInputManager): hiểu quả kết quả nằm giữa 0 và 1. độ tăng của nó phụ thuộc vào độ nhạy. Tốc độ giảm của nó phụ thuộc vào trọng lực. Khi di chuyển một GO luôn để ý tới độc lập khung hình (Time.deltaTime)
- Chỉ định một Tooltip cho một Field ở Inspector với [Tooltip("DESCRIPTION")][SerializeField]
- Sử dụng "clampedXPos = Mathf.Clamp(rawNewXPos, -xRange, xRange)" để giới hạn giá trị thay vì dùng IF. Trả về giá trị tùy vào rawNewXPos, bị chặn giữa min-max.
- Nhớ Pitch, Yaw, Roll: "How to set Local Rotation" sử dụng "transform.localRotation = Quaternion.Euler(pitch, yaw, roll);"

### Challenge 12

#### Setup & Mục tiêu
- When to tune your game: Add feature => Fix bugs => Tune Gameplay => Playtest => Add feature...
- Universal Render Pipeline (UDP) giúp tăng performance và support wide platform.
- CameraController: tính offset giữa Camera và Player ở Start(), sau đó tại Update() thì assign lại position của camera = player + offset (chuyển vế đổi dấu).
- Hàm Update() chạy trước khi rendering (có nhiều Update của nhiều GOs được call), phần lớn code viết ở đây. Hàm FixedUpdate() chỉ chạy trước khi tính toán "physical" (ko phải mọi frame).
- Vì có nhiều Update của nhiều GOs được call, LateUpdate() được call khi hàm Update() cuối cùng đc gọi, nó phù hợp để tiếp tục xử lý với giá trị cuối cùng.
- Unity cung cấp 4 loại project tương đương với 4 kiểu Renderer: Built-in Renderer (2D/3D), Post Processing Stack with the built-in renderer (3D with extras), High Definition RP (DX11), Universal Render Pipeline (URP).
- "Is Trigger" phải được chọn thì mới có "OnTriggerEnter"; phân biệt "transform.Rotate(new Vector3(x, y, z))" (thêm lực góc quay Euler) và "transform.rotation = Quaternion.identity" (gán độ quay)
- Thêm "Rigidbody" sẽ làm GO được thêm có tương tác "Physical" nếu không sẽ đứng im như "wall"; phân biệt "Text Mesh Pro" loại "3D Object" và "UI"
- Lỗi xung đột InputSystem khi import TMP (có thêm EventSystem): Project Settings -> Player -> Active Input Handling : Both

### Challenge 13

#### Setup & Mục tiêu
- Keyword tìm doc của Particle System: "particle system main module"
- Để thêm Script một lúc cho nhiều GO (Enemy) => giữ shift và chọn nhiều => thêm component script.
- Particle System Collision: tick chọn "Collision" (bao gồm cả "SendMessage") và sử dụng "OnParticleCollision(GameObject other)" trên GO (target), GO phải bỏ "trigger" để ưu tiên "Collision"
- Nếu cần phải theo dõi va chạm trên một GO chuyển động nhưng lại không muốn áp dụng Physical cho nó thì thêm Rigidbody và tích chọn "kinematic" (tuy nhiên ko tương tác với Particle System)
- Sử dụng "primitive collider" để đơn giản tốn ít bộ nhớ xử lý nhất, nếu phải "Compound colliders" thì nên dùng Rigidbody dạng "kinematic" thay thế??? (bị lừa??)
- Rigidbody vs BoxCollider: nêu "trigger" được chọn (một trong 2) thì sẽ ưu tiên "OnTriggerEnter" ngược lại sẽ là "OnCollisionEnter"
- NÊN sử dụng "mesh colliders" cho Scene và compound primitive colliders cho GO
- Compound colliders: là cách sử dụng các "Primitive collider" (Box Collider, Sphere Collider, Capsule Collider) cho GO để tạo hình gần đúng với Mesh Renderer.
- Mesh colliders: là một Component có thể add vào GO, có thể chọn được Mesh của Renderer làm Mesh Collider, tuy nhiên sẽ tốn bộ nhớ để xử lý.
- Static colliders: là những GO không có Rigidbody (tường, sàn...)
- Dynamic colliders: là những Collider trên một GO có Rigidbody (ở top level ~ Empty Object)
- Physic Material: để thể hiện tính vật lý của vật khi va chạm (độ nảy, ma sát trơn trượt...)
- Triggers: trường hợp chỉ muốn phát hiện tiếp xúc và không thể hiện VA CHẠM thì dùng "Trigger" (đi xuyên nhau vì không có va chạm)
- Collision callbacks for scripts: OnCollisionEnter > OnCollisionStay > OnCollisionExit tương tự cho OnTriggerEnter > OnTriggerStay > OnTriggerExit
- Rigidbody HIT Static colliders: Static colliders sẽ đứng im (never move), Rigidbody sẽ được mô phỏng va chạm vật lý
- Kinematic Rigidbody Collider: là một GO với Collider đính kèm "kinematic Rigidbody", chưa hiểu cách dùng lắm! VD: cánh cửa, on/off kinematic bằng script...

### Challenge 14

#### Setup & Mục tiêu
- "Rect Transform" là phiên bản 2D của "Tranform". Rect Transform đại diện cho một hình chữ nhật mà một phần tử UI có thể được đặt bên trong.
- Lưu ý những tính toán cập nhật của "RectTransform" được thực hiện ở cuối Frame để đảm bảo các thay đổi mới nhất. Nếu muốn cập nhật luôn thì call "Canvas.ForceUpdateCanvases()"
- Unity UI là một Build-in package trong Unity (2D Sprite, AI, Android JNI, Animation, Asset Bundle, Audio, JSONSerialize, Particle System, Physics, Screen Capture, UI, UIElements, Unity UI, Unity Web Request, Unity Web Request Asset Bundle, Video...)
- Canvas: là GO và các UI elements là children. Canvas sử dụng "EventSystem" để "Messaging System". UI thêm sau sẽ nằm trên UI trước (sửa order trong Hierarchy, hoặc dùng code với "SetSiblingIndex, SetAsFirstSibling...")
- Render Modes:
	1. Screen Space - Overlay: nếu size của screen thay đổi thì Canvas cũng tự động để phù hợp.
	2. Screen Space - Camera: giống Overlay nhưng phụ thuộc "Perspective" của Camera (có thể bị biến dạng bởi "Field of View")
	3. World Space: là "diegetic interface", Canvas là một phần của Scence do vậy được bố trí thủ công giống một GO trong "World".
- Không thể sử dụng các Tools (Hand, Move, Rotate...) lên Canvas nhưng UI elements trong nó thì có thể
- Anchors: là "layout concept" của "Rect Transforms", nó cho biết các Children sẽ transform như thế nào nếu Parents transform.
- Visual Components: Text, Image, Raw Image, Mask... Panel, InputField, Dropdown, Scrollbar, Slider, Toggle, Button
- TextMesh Pro: là sự thay thế cho các thành phần văn bản hiện có. Nó có thể hiển thị văn bản rõ ràng ở mọi kích thước và độ phân giải. Có TextMesh, hiệu ứng, Rich Text Tags... Được tối ưu hóa cho cả Mobile và PC.
- Lưu ý cấu hình Canvas ("Canvas Scaler") khi Screen bị scale ("Scale With Screen Size" có vẻ ok). Canvas Scaler, Canvas Group, 

#### Reference
- [UI Reference](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIReference.html){:.hvr-forward rel="nofollow" target="_blank"}
- [Built-in packages](https://docs.unity3d.com/Manual/pack-build.html){:.hvr-forward rel="nofollow" target="_blank"}
- [UnityEvents](https://docs.unity3d.com/Manual/UnityEvents.html){:.hvr-forward rel="nofollow" target="_blank"}
- [Hướng dẫn sử dụng C# Delegate và Event](https://o7planning.org/vi/10591/huong-dan-csharp-delegate-va-event){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 15

#### Setup & Mục tiêu
- Từ Script này gọi Script kia (2 Script đc add vào 2 GO..."Find reference in scence"...) bằng cách "FindObjectOfType<ScoreBoard>()"
- Thiết kế Level: "Where are we at?" 1.Core Gameplay (dodge & shoot)? 2.Reason to play (score)? 3.Đặc biệt phá cách? 4.Chart tiết tấu trò chơi? 5.What to look for? 6.Phần thưởng gì làm người chơi vui?
- Thiết kế Level: dành nhiều tình cảm và sự quan tâm. Bố cục ENV phải hỗ trợ "Beat Chart". Nhất quán (hình ảnh + cách chơi) để hướng dẫn người chơi xuyên suốt. Nghệ thuật kể câu chuyện thông qua môi trường
- Thiết kế Level: Giữ mọi thứ mới mẻ, tạo bất ngờ, niềm vui được tạo ra thông qua sự không chắc chắn, bắt người chơi vào và ra khỏi vùng an toàn của họ.
- Thiết kế Level: Người chơi biết phải làm gì, nhưng không phải làm như thế nào. Trao quyền cho người chơi. Không thể dự đoán. Yếu tố bất ngờ. Yếu tố căng thẳng
- Thiết kế Level: liên tục dạy cho người chơi điều gì đó mới mẻ. Họ có thể học và tiến bộ từng level.

#### Reference
- [Raph Koster là một nhà thiết kế trò chơi kỳ cựu đã được tín nhiệm về mặt chuyên môn](https://www.raphkoster.com/){:.hvr-forward rel="nofollow" target="_blank"}
- [Fun and Uncertainty](http://gamewhispering.com/fun-and-uncertainty/){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 16

#### Setup & Mục tiêu
- Hãy nhớ: khi trò chơi diễn ra, game engine luôn thực hiện tính toán để hiển thị khung hình (Frame). Việc "SetActive" sẽ ngay lập tức ảnh hưởng đến GO đó trên toàn bộ khung hình về sau (toàn bộ Bullets biến mất...)
- GOs, Components và cả những Modules của nó có thể được reference từ trong code và can thiệp các giá trị
- "Best-first search" là một thuật toán tìm kiếm tối ưu hóa tìm kiếm theo chiều rộng bằng cách mở rộng nút hứa hẹn nhất được chọn theo một quy tắc nào đó. Ví dụ về các thuật toán tìm kiếm theo lựa chọn tốt nhất là "thuật toán Dijkstra" và giải thuật tìm kiếm A*.
- "Thuật toán tìm kiếm trên đồ thị": Giải thuật tìm kiếm A*, Tìm kiếm theo lựa chọn tốt nhất, Tìm kiếm hai chiều, Tìm kiếm theo chiều rộng, Tìm kiếm theo chiều sâu, Tìm kiếm độ sâu giới hạn, Thuật toán Floyd-Warshall, Tìm kiếm theo chiều sâu lặp tăng dần, Tìm kiếm chi phí đều.
- Học gì thì học cũng phải biết được "Nguyên tắc cơ bản" (dựa trên cái gì mà người ta làm được như vậy?). Đừng lao vào một "thứ" rồi mắc kẹt với tất cả ưu nhược điểm của nó (học ở đây phải dùng được ở chỗ khác).
- "Thuật toán Breadth First Search" (BFS – Tìm kiếm theo chiều sâu): Xét duyệt tất cả các đỉnh để trả về kết quả. Nếu số đỉnh là hữu hạn, thuật toán chắc chắn tìm ra kết quả. Mang tính chất vét cạn, mù quáng, duyệt tất cả đỉnh, không nên áp dụng nếu duyệt số đỉnh quá lớn.
- Z-Fighting là hiện tượng trùng bề mặt của 2 GOs. Đổi tên project chỉ đơn giản là đổi tên folder rồi add lại folder từ UnityHub
- [ExecuteInEditMode] dùng để đánh dấu một MonoBehaviour chỉ có tác dụng trong "Editor Mode"
- Phân biệt TextMesh GO, TextMesh UI, TextMesh Component (cần được thêm riêng vào EmptyObject). TextMesh Pro sẽ bị Z-Fighting nếu thêm trên bề mặt
- Khi thêm Text: có cần input (tương tác, Raycast Target) người dùng không? Text có cần hiệu ứng gì đặc biệt không (material )?

#### Reference
- [The Color Scheme Designer](http://paletton.com/){:.hvr-forward rel="nofollow" target="_blank"}
- [Art Puzzle](https://artpuzzle.vn/){:.hvr-forward rel="nofollow" target="_blank"}
- [MagicaVoxel: A free lightweight GPU-based voxel art editor and interactive path tracing renderer](https://ephtracy.github.io/){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 17

#### Setup & Mục tiêu
- Có thể khóa (lock) inspector để kéo thả tạo reference (click vào icon khóa trên cùng bên phải)
- Coroutines: Việc thực thi một "Coroutines" có thể bị tạm dừng tại bất kỳ thời điểm nào bằng cách sử dụng câu lệnh "yield".
- START Coroutines: public Coroutine StartCoroutine(IEnumerator routine);
- STOP Coroutines: public void StopCoroutine(Coroutine routine / string methodName / IEnumerator routine);
- YIELD: yield return new WaitForSeconds/WaitForFixedUpdate/WaitForSecondsRealtime(5); yield return new WaitForFixedUpdate(5);
- "WaitUntil" Tạm dừng thực hiện "coroutine" cho đến khi "delegate evaluates" là true. yield return new WaitUntil(() => frame >= 10);
- Phải nghĩ đến "performance" khi xử lý các hàm ở "every frame", xử lý hàm, khởi tạo đối tượng, khởi tạo biến...
- Stop using GameObject.Find! code sẽ bị phụ thuộc vào "name, tag", team sẽ sợ hãi khi thay đổi gì trong scence. Cách tiếp cận tốt là dùng "reference" kéo thả.
- Trong nội bộ Prefrab có thể thêm Script + Assign reference children của Prefab vào Script
- Tách Scripts thành các Component nhỏ nhất có thể và giữ nhiệm vụ duy nhất (nguyên lý SOLID)
- Quay hướng Z về phía đối tượng "who.LookAt(What)"

#### Reference
- [Visual PathFinding.js](https://qiao.github.io/PathFinding.js/visual/){:.hvr-forward rel="nofollow" target="_blank"}
- [Introduction to the A* Algorithm](https://www.redblobgames.com/pathfinding/a-star/introduction.html){:.hvr-forward rel="nofollow" target="_blank"}
- [Play and Learning!](https://explorabl.es/){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 17

#### Setup & Mục tiêu
- Tính khoảng cách từ Enemy đến Tower bằng Vector3.Distance(enemyPosition, towerPosition). Kiểm tra nếu Enemy exist (IF) thì Shoot(module.emission = true) else Shoot(false)
- Ngoài kéo thả reference GameObject ở inspector, ta có thể chỉ định luôn Component, Class (MonoBehaviour/Script) cũng sẽ reference đến GameObject attached Script/MonoBehaviour đó.
- Detecting Mouse In 3D: MonoBehaviour.OnMouseOver() : Called every frame while the mouse is over the Collider. OnMouseEnter > OnMouseOver > OnMouseExit
- Có thể Copy Component từ Child và Paste Component vào Parents
- Viết code: giải thích/solution/overview > comments > functions/blocks code...
- Navigate back to the last cursor position in Visual Studio: Ctrl+"-"; Ctrl+Shift+"-"
- "Phân loại của Bloom":
	- Kiến thức (Kể tên ba giống táo phổ biến): thuật ngữ, sự kiện cụ thể, quy ước, xu hướng và trình tự, phân loại, các nguyên tắc và khái quát, lý thuyết và cấu trúc
	- Sự hiểu biết (Tóm tắt đặc điểm nhận dạng của táo Golden Delicious và táo Granny Smith): sự hiểu biết về các sự kiện và ý tưởng bằng cách sắp xếp, tóm tắt, dịch, khái quát hóa, đưa ra mô tả và nêu các ý chính.
	- Ứng dụng (Liệu táo có ngăn ngừa được bệnh còi xương, một bệnh do thiếu vitamin C không?): giải quyết vấn đề trong các tình huống mới bằng cách áp dụng kiến ​​thức, sự kiện, kỹ thuật và quy tắc có được.
	- Phân tích (So sánh và đối chiếu bốn cách phục vụ thức ăn làm từ táo và xem cách nào có lợi cho sức khỏe cao nhất): Phân tích các yếu tố, Phân tích các mối quan hệ, Phân tích tổ chức
	- Tổng hợp (Chuyển đổi công thức "không lành mạnh" cho bánh táo thành công thức "lành mạnh" bằng cách thay thế lựa chọn nguyên liệu của bạn. Tranh luận về lợi ích sức khỏe của việc sử dụng các thành phần bạn chọn so với các thành phần ban đầu)
	- Đánh giá (Loại táo nào tốt nhất để nướng bánh, và tại sao?): Phán quyết về bằng chứng nội bộ, Đánh giá về tiêu chí bên ngoài
- "Khoa học hành động", "bậc thang của sự suy luận" (ladder of inference), "Tính cách người lớn", Know-how, "Tư duy bậc cao" (Higher-order thinking), Kim tự tháp DIKW (Data-Information-Knowlege-Wisdom)...
- "Chu kỳ học tập":
	- Kurt Lewin: 1.Lập kế hoạch 2.Hoạt động 3.Tìm hiểu sự thật, về kết quả của hành động
	- Honey và Mumford: 1.Làm điều gì đó, có kinh nghiệm 2.Suy ngẫm về trải nghiệm 3.Đúc kết kinh nghiệm, phát triển lý thuyết 4.Lập kế hoạch cho các bước tiếp theo, để áp dụng hoặc kiểm tra lý thuyết
- "Phong cách học tập": Học trực quan (hình ảnh, hình dạng), Học thính giác (lắng nghe, nhịp điệu), Học tập thể chất (vận động cơ thể, cử chỉ), Học tập quan sát (quan sát hành vi của người khác)

#### Reference
- [Bloom's taxonomy (Wiki)](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy){:.hvr-forward rel="nofollow" target="_blank"}
- [Bloom's taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/){:.hvr-forward rel="nofollow" target="_blank"}
- [Chris Argyris](https://en.wikipedia.org/wiki/Chris_Argyris){:.hvr-forward rel="nofollow" target="_blank"}
- [Know-how](https://en.wikipedia.org/wiki/Know-how){:.hvr-forward rel="nofollow" target="_blank"}
- [Higher-order thinking](https://en.wikipedia.org/wiki/Higher-order_thinking){:.hvr-forward rel="nofollow" target="_blank"}
- [Kim tự tháp DIKW](https://en.wikipedia.org/wiki/DIKW_pyramid){:.hvr-forward rel="nofollow" target="_blank"}
- [Chu kỳ học tập](https://en.wikipedia.org/wiki/Learning_cycle){:.hvr-forward rel="nofollow" target="_blank"}
- [Phong cách học tập](https://en.wikipedia.org/wiki/Learning_styles){:.hvr-forward rel="nofollow" target="_blank"}
- [Observational learning](https://en.wikipedia.org/wiki/Observational_learning){:.hvr-forward rel="nofollow" target="_blank"}