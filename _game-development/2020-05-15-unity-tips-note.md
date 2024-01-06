---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity - Tips, Note
description: Unity - Tips, Note

### HUMAN
header: Unity - Tips, Note
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
collection: Tips # this for AMP related post
### category: dùng để group collection
category: Tips

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
| Inspector-Transform expressions: L(a,b), R(a,b), +=, -=, *=, /= ... | sqrt(a), floor(a), ceil(a), round(a), cos(a), sin(a), tan(a), pi
| Không nên điều chỉnh Scale của Transform Component. Tùy chọn tốt nhất là tạo Models real-life sale. | Kích thước của Mesh trong Unity (và do đó là thang đo của Transform) rất quan trọng, đặc biệt là trong quá trình mô phỏng vật lý.
| Transforms: Parenting Transforms về <0,0,0> trước khi thêm Child | Điều này có nghĩa là tọa độ cục bộ của Child sẽ giống với tọa độ chung, giúp bạn dễ dàng đảm bảo rằng bạn đặt Child ở đúng vị trí.
| Việc thay đổi Scale ảnh hưởng đến Position của child Transforms | Ví dụ: Scale cha mẹ thành (0,0,0) sẽ định vị tất cả Child ở (0,0,0) so với cha mẹ.
| Testing properties: trong “Play Mode” có thể thay đổi value của properties để xem nó tác động thế nào đến trò chơi | khi thoát “properties” value sẽ được reset.
| Deactivate GameObjects: đánh dấu GameObject là “inactive” (trong Inspector) | trong Script sử dụng method SetActive
| Nếu bạn Deactivate một GameObject gốc thì bạn cũng Deactivate tất cả các GameObject con của nó | việc Deactivate sẽ ghi đè cài đặt “activeSelf” trên tất cả các GameObject con.
| “Tag” là một từ tham chiếu mà bạn có thể gán cho một hoặc nhiều GameObject | sử dụng "Tag" để tìm reference trong code (FindWithTag)
| Preset Manager: sử dụng để đặt trước giá trị mặc định của component, import Assets | Unity còn áp dụng Giá trị đặt trước mặc định khi bạn sử dụng lệnh Reset trong Inspector.
| Project Structure: Tổ chức tốt sẽ giúp bạn dễ dàng tìm thấy các tài sản mà bạn cần. | Sử dụng các tên thư mục mô tả nội dung/mục đích/scope-phạm vi của chúng
| Input System: sử dụng interface của Unity, còn lại để Unity tự xử lý. | Input.GetAxis("Horizontal/Vertical"); ...GetAxisRaw, GetKeyDown, GetKeyUp;
| Mobile device input: Multi-touch screen... trạng thái và số lượng ngón tay touch... | Chuyên sâu hơn Touch còn có "Lực nhấn", "điểm tiếp xúc đầu tiên", là Pen (bút cảm ứng)...
| Physics: tùy tương tác muốn mô phỏng để sử dụng component phù hợp CharacterController, Rigidbody, Collision | Character Controller, Rigidbody, Kinematic, Convex, Constant Force, Interpolate/Extrapolate, Collision, Joints, Articulations, Cloth...
| Camera: Ctrl+Shift+F -> chuyển góc nhìn của Scence hiện tại vào Camera | từ Scene View -> chọn Camera -> Ctrl+Shift+F để nhanh chóng căn chỉnh Camera với những gì đang nhìn thấy trong Scene
| Reference: Biến **gameObject** sẽ luôn trỏ đến GameObject đang được đính kèm Script hiện tại. | otherGameObj.GetComponent<Rigidbody>(); GameObject.Find(), FindWithTag, FindGameObjectsWithTag
| **Translate**: Phương thức này di chuyển GameObject theo một vector. | gameObject.Translate(1, 0, 0); // X-Y-Z của 'Translate' tùy theo quy tắc bàn tay trái
| **Rotate**: Phương thức này xoay GameObject theo một góc. | gameObject.transform.Rotate(new Vector3(0, 0, 1)); // X-Y-Z của 'Vector3' tùy theo quy tắc bàn tay trái
| Quy tắc bàn tay trái: [TRỤC X]: là hướng ngang (dang 2 tay) | [TRỤC X]: hướng ngang (dang 2 tay), [+] đi về bên phải, [-] đi về bên trái
| Quy tắc bàn tay trái: [TRỤC Y]: là phương thẳng đứng (không nhầm lẫn với Z) | [TRỤC Y]: là phương thẳng đứng, [+] lên trên, [-] xuống dưới
| Quy tắc bàn tay trái: [TRỤC Z]: là hướng người nhìn thẳng phía trước | [TRỤC Z]: hướng người nhìn thẳng phía trước, [+] đi ra về phía trước, [-] đi về phía sau lưng
| Làm việc với UI Builder: trong inspector, giá trị nào được sửa sẽ có đánh dấu LEFT màu trắng | trong UXML sử dụng thuộc tính class="<Class_Name>" giống HTML CSS, các style khác sẽ là inline-style của Element
| "public class CharacterData : ScriptableObject" ko cần đính kèm vào GameObject | "ScriptableObject" có thể sử dụng mà không cần tạo các đối tượng gắn vào GameObject.
| [CreateAssetMenu] // This adds an entry to the **Create** menu | để thêm một sub-menu vào "Assets/Create" menu để tạo nhanh một instance class (file.asset)
| Debug: VS attach to Unity, AssetDatabase cần full path, Resources ko kèm phần mở rộng của file name  | AssetDatabase.LoadAssetAtPath cần điền full "Assets/...jpg", Resources.Load tính từ Assets/Resources, ko tính Resources, không bao gồm phần mở rộng file (.jpg)
| Load UXML sẽ được object kiểu "VisualTreeAsset" => cần .Instantiate() để được "VisualElement" | Load UXML sẽ được object kiểu "VisualTreeAsset" => cần .Instantiate() để được "VisualElement"
| "rootVisualElement" là một "VisualElement", giống "gameObject" luôn có sẵn | "rootVisualElement" là một "VisualElement", giống "gameObject" luôn có sẵn và reference đển TOP-Element (giống "document" của HTML)
| "Custom Control" gồm UXML + Script C# extend "VisualElement" (CloneTree(this)) | Script C# cần "EXPOSE to UXML and UI Builder" và cần có "DEFAULT constructor". Script C# đại diện UXML để sử dụng trong coding (gán giá trị cần thiết ở Contructor hoặc Init khi thích hợp).
| UXML đại diện luôn là "VisualTreeAsset" | Kể cả có reference bằng kéo thả vào GameObject ([SerializeField])
| UIDocument GameObject có 3 điểm: Panel Setting, Source Asset, Sort Order | Có thể có nhiều UIDocument GameObject trong Screen và cùng trỏ đến 1 Panel Setting
| Show/Hide một VisualElement bằng 'style.display' và 'style.visibility' | this.style.display = DisplayStyle.Flex/None; this.style.visibility = Visibility.Visible/Hidden;
| sử dụng uxmlModal.CloneTree(this) thì không cần Instantiate() đã có luôn VisualElement cho "this" | CloneTree của VisualTreeAsset sẽ Instantiate luôn cho "this" trong .CloneTree(this)
| các UIDocument chung panelSettings có "rootVisualElement" riêng | "rootVisualElement" từ UIDocument không phải là "panelSettings"
| Gửi/Nhận Event lúc "AddListener" phải có "sender" và "receiver" ở cùng 1 nơi | ```sender.myEvent.AddListener(receiver.OnEventReceived); // [System.Serializable] public class MyIntEvent : UnityEvent<int> {}```
| GameObject.FindWithTag trả về GameObject. | GetComponentInChildren chỉ tìm được những Object/Component có extend ModalController : MonoBehaviour
| Khi tìm kiếm Reference, đối tượng đó phải có trong Scence | Script MonoBehaviour nằm trong Assets mà không đính kèm vào GameObject thì không thể tìm thấy
| SendMessage bị lỗi nếu không có "receiver", children không nhận được Message | "This GameObject" không tính Childrend! tất cả MonoBehaviour của GameObject sẽ được call
| SendMessage kích hoạt gọi tất cả method của "This GameObject" kể cả method "private" | "SendMessage" call cả method "Private", method name không có thì sẽ có log lỗi
| nếu muốn Children cũng được call thì sử dụng "BroadcastMessage" | "BroadcastMessage" call methodName trên This+Children
| phân biệt instance MonoBehaviour (script) và "gameObject" | SendMessage, BroadcastMessage có ở cả 2, nhưng Invoke, StartCoroutine thì chỉ có trên MonoBehaviour
| làm gì cũng cần có kế hoạch và plan, làm ra phải phát triển và bảo trì | ko đem con bỏ chợ, có nhiều lý thuyết và tool liên quan, chỉ cần thắc mắc-trò chuyện-tìm hiểu
| DongHD > Selection History > BACK-FORWARD | Tạo một file custom Editor hay sử dụng, khi phình to thì tạo "Unity Editor Extension"
| Detect nền tảng runtime với "Application.platform" | if (Application.platform == RuntimePlatform.WindowsPlayer/Android/Android) ...
| trong Visual Studio có thể thấy Asset Reference từ C# | khi click vào thì sẽ có ping trên Unity Editor
| khi quay (Rotate) thì DẤU (+-) sẽ theo luật XOẮN ỐC | sử dụng shorten Vector3.up/down/left/right/forward/back/zero/one
| Game mode mà để Simulator sẽ không nhận bàn phím | Simulator của Game View chỉ để xem trên các device khác nhìn sẽ như thế nào
| Rotate hoặc Translate của Transform là MANUAL; Rigidbody là TỰ ĐỘNG với Physics | Phân biệt MANUAL vs AUTO; Fixed vs Relative to coordinate system
| Trong RigidBody có thể Freeze Position ở Contraints | Nếu Camera bị giật khi follow RigidBody thì đổi Interpolate khác
| Refactor thì sử dụng Project Window để kéo thả, Cut-Paste trực tiếp từ Windows Explorer | file.sln Unity sẽ tự tạo dựa trên Folder Name thêm vào Unity Hub (và nó cũng có trong .gitignore)
| Để tìm Prefab trên Hierarchy nằm ở đâu trong Assets | Chọn Prefab trên Hierarchy và nhấn "Select" trong Inspector
| Refactor đổi tên thư mục bị Access Deny do script Editor | Tắt Unity và Visual Studio, đổi manual, nhớ xóa file OldName.meta
| AudioMixer phải "expose" thì mới dùng Script được, có thể "Rename" và "Unexpose" | Properties được expose sẽ có indicator MŨI TÊN ->
| Timelines, Animation Track có thể "recording" hoặc "Edit in Animation window" | Animation Rule: sẽ thay đổi tuyến tính giá trị giữa 2 POINT gần nhau. Mọi Properties có thể sửa trên Inspector đều có thể Add để Animation.
| Particale Sys: Varying properties over time (mặc định là Constant) | Muốn thay đổi thì click vào icon mũi tên (Curve, Random Between...)
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue}