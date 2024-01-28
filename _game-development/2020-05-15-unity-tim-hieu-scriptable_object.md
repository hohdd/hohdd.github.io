---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu ScriptableObject
description: Tìm hiểu ScriptableObject

### HUMAN
header: Tìm hiểu ScriptableObject
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
collection: Investigate # this for AMP related post
### category: dùng để group collection
category: Investigate

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## API > ScriptableObject

### Three pillars of game engineering (Modular, Editable, Debuggable)
- **Modular**: Mọi thứ phải theo mô-đun nhiều nhất có thể (để có thể lắp ráp), hệ thống không phụ thuộc trực tiếp vào nhau, không có tham chiếu cứng (hệ thống sẽ kém linh hoạt).
    - Tránh tạo ra các hệ thống phụ thuộc trực tiếp vào nhau. Ví dụ: hệ thống kho đồ phải có khả năng giao tiếp với các hệ thống khác trong trò chơi của bạn.
    - Thiết lập Prefabs để chúng tự hoạt động. Càng nhiều càng tốt, mọi prefab mà bạn kéo vào một cảnh phải có chức năng bên trong nó. Điều này giúp ích rất nhiều cho việc kiểm soát nguồn với các nhóm lớn hơn, trong đó các cảnh là danh sách các prefab và prefab của bạn chứa chức năng riêng lẻ. Bằng cách đó, hầu hết các đăng ký của bạn đều ở cấp độ prefab, điều này dẫn đến ít xung đột hơn trong hiện trường.
    - Tập trung từng thành phần vào việc giải quyết một vấn đề duy nhất. Điều này giúp việc ghép nhiều thành phần lại với nhau dễ dàng hơn để xây dựng một cái gì đó mới.
- **Editable**: Mọi thứ đều có thể chỉnh sửa được, dev sửa được, artist chỉnh sửa được, game designer chỉnh sửa được.
    - Làm cho trò chơi của bạn dựa trên dữ liệu nhiều nhất có thể. Khi bạn thiết kế hệ thống trò chơi của mình giống như những cỗ máy xử lý dữ liệu dưới dạng hướng dẫn, bạn có thể thực hiện các thay đổi đối với trò chơi một cách hiệu quả, ngay cả khi trò chơi đang chạy.
    - Nếu các nhà thiết kế có thể ghép mọi thứ lại với nhau trong trò chơi mà không cần phải yêu cầu một tính năng rõ ràng – phần lớn nhờ vào việc triển khai các thành phần nhỏ mà mỗi thành phần chỉ làm một việc – thì họ có thể kết hợp các thành phần đó theo nhiều cách khác nhau để tìm ra lối chơi/cơ chế mới!!!
    - Điều quan trọng là nhóm của bạn có thể thực hiện các thay đổi đối với trò chơi trong thời gian chạy. Bạn càng có thể thay đổi trò chơi của mình trong thời gian chạy thì bạn càng có thể tìm thấy sự cân bằng và giá trị, đồng thời, nếu bạn có thể lưu lại trạng thái thời gian chạy của mình giống như Đối tượng có thể tạo tập lệnh thì bạn đang ở một nơi tuyệt vời.
- **Debuggable**: Mọi thứ đều có thể debug.
    - Cái này thực sự là một trụ cột phụ cho hai cái đầu tiên. Trò chơi của bạn càng có nhiều mô-đun thì việc thử nghiệm bất kỳ phần nào của nó càng dễ dàng hơn. Trò chơi của bạn càng dễ chỉnh sửa – càng có nhiều tính năng có chế độ xem Thanh tra riêng – thì càng dễ gỡ lỗi. Đảm bảo rằng bạn có thể xem trạng thái gỡ lỗi trong Thanh tra và không bao giờ coi một tính năng đã hoàn thiện cho đến khi bạn có kế hoạch nào đó về cách gỡ lỗi nó.

Hãy làm giống như Component, chỉ làm một việc duy nhất, có thể tương tác với các Component khác, có thể sửa đổi dữ liệu... Chỉ việc kéo và lắp ráp các Component lại với nhau rồi thay đổi giá trị properties mà không cần code là sẽ có Game.

Cao hơn nữa là các Prefabs, kéo vào Sence và bắt đầu sử dụng.

### Tips
- [**CreateAssetMenu**(menuName = "DongHD/Events/Game Event")] để thêm menu context asset để tạo asset ScriptableObject
- [**AddComponentMenu**("DongHD/Camera/Camera Controller")] thêm vào đầu class, sử dụng để thêm vào menu Add Component
- [**RequireComponent**(typeof(Camera))] thêm vào đầu class, sử dụng nếu Component bị phụ thuộc vòa một Component khác (cần có để nó hoạt động)

### What are ScriptableObjects?
- ScriptableObject là một lớp Unity có thể tuần tự hóa, cho phép bạn lưu trữ số lượng lớn dữ liệu được chia sẻ độc lập với các phiên bản tập lệnh.
- Việc sử dụng ScriptableObjects giúp quản lý các thay đổi và gỡ lỗi dễ dàng hơn.
- Bạn có thể xây dựng mức độ giao tiếp linh hoạt giữa các hệ thống khác nhau trong trò chơi của mình để dễ quản lý hơn trong việc thay đổi và điều chỉnh chúng trong suốt quá trình sản xuất cũng như tái sử dụng các thành phần.
- ScriptableObject bị thay đổi giá trị (lưu trên disk) ở Runtime, để giữ nó không đổi mỗi lần load lại Scene thì cần implement "ISerializationCallbackReceiver" và thực hiện clone dữ liệu ở OnAfterDeserialize() vào một biến khác để sử dụng giá trị của biến đó ở Runtime.

### Simple Use Cases (các trường hợp sử dụng đơn giản)

#### Game Config files
- Có thể sử dụng để làm các file Config Game, User Config... vì có thể lưu giá trị vào Disk

#### Inventory
- Ok, ví dụ có một List<Items> trong ScriptableObject, thêm các item vào List đó...
- ScripableObject Master List
- ScripableObject per item
- ScripableObject nhiều inventory trong các Scence khác nhau (VD: NPC, Player's Inventory, Equip Screen...)

#### Enemy stats
- Tạo một ScriptableObject để reference giá trị, clone file để kiểm tra các thử nghiệm để cân bằng game...

#### AudioCollection
- Ok, ví dụ có một danh sách Audio, play random audio trong list đó...

#### Make Own Events
- GameEvent
    - Tạo các Event riêng trong Assets (VD: ToggleIngameMenuEvt, PlayerDyingEvt...)
    - Tại nơi muốn Raise event này sẽ kéo reference vào biến rồi gọi hàm Raise() trên biến đó
- GameEventListener
    - Tại GameObject muốn xử lý một tác vụ khi có một sự kiện nào đó xảy ra sẽ được add Component này.
    - Tại Script trong cùng GameObject sẽ triển khai gameResponse (UnityEvent) của Component này.
    - Về các giá trị truyền nhận sẽ được tách riêng với các RuntimeValue (ScripableObject)

#### Runtime Sets
- Ok, có thể implement giống như một Pool.
- Có thể random pick một Enemy...

#### Enums
- Enums hữu ích cho những thức không thay đổi bao giờ (VD: Đông-Tây-Nam-Bắc, Red-Yellow-Green...)
- Hãy suy nghĩ đến ScripableObject trước khi quyết định sử dụng Enums

#### Architect for other Systems
- Scriptable Objects không nhất thiết chỉ là dữ liệu. Lấy bất kỳ hệ thống nào bạn triển khai trong MonoBehaviour và xem liệu bạn có thể chuyển việc triển khai sang ScriptableObject thay thế hay không. Thay vì có InventoryManager trên DontDestroyOnLoad MonoBehaviour, hãy thử đặt nó trên ScriptableObject.
- Vì nó không bị ràng buộc với Scene nên nó không có *Transform* và không nhận được cuộc gọi *Update()* nhưng nó sẽ **duy trì trạng thái giữa các lần tải Scene** mà không cần bất kỳ khởi tạo đặc biệt nào.


