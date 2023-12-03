---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "[User interface (UI)] giao diện người dùng (UI) cho Unity"
description: "[User interface (UI)] giao diện người dùng (UI) cho Unity"

### HUMAN
header: "[User interface (UI)] giao diện người dùng (UI) cho Unity"
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
collection: Unity # this for AMP related post
### category: dùng để group collection
category: Unity

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## User interface (UI)

Unity cung cấp 3 hệ thống UI:
- UI Toolkit: là hệ thống UI mới nhất trong Unity. Nó được thiết kế để tối ưu hóa hiệu suất trên các nền tảng và dựa trên các công nghệ web tiêu chuẩn.
- The Unity UI package (uGUI): là hệ thống giao diện người dùng dựa trên GameObject sử dụng Components và Game View để sắp xếp, định vị và tạo style cho giao diện người dùng.
- IMGUI: là một hệ thống GUI điều khiển hoàn toàn bằng code.

uGUI là giải pháp được đề xuất cho những vấn đề sau:
- Giao diện người dùng được định vị và chiếu sáng trong thế giới 3D
- VFX với shaders tùy chỉnh và materials
- Dễ dàng referencing từ MonoBehaviours

UI Toolkit là giải pháp được đề xuất cho những vấn đề sau:
- Tạo ra công việc với số lượng giao diện người dùng đáng kể
- Yêu cầu quy trình soạn thảo quen thuộc dành cho artists và designers
- Tìm kiếm khả năng UI rendering không có kết cấu (textureless)

IMGUI là giải pháp được đề xuất cho (Editor) những vấn đề sau:
- Quyền truy cập không hạn chế vào khả năng mở rộng của trình soạn thảo (Unity Editor)
- Một số control chuyên dụng như TreeView
- API nhẹ để nhanh chóng hiển thị giao diện người dùng trên màn hình

## UI Toolkit

*Lưu ý*: Unity khuyên bạn nên sử dụng UI Toolkit cho các dự án phát triển UI mới của mình. Tuy nhiên, Unity UI (uGUI) và IMGUI phù hợp với một số trường hợp sử dụng nhất định và được yêu cầu để hỗ trợ các dự án không còn được dùng nữa (deprecated projects).

**UXML documents**: Ngôn ngữ đánh dấu lấy cảm hứng từ HTML và XML xác định cấu trúc của giao diện người dùng và các mẫu giao diện người dùng có thể tái sử dụng. Mặc dù bạn có thể xây dựng giao diện trực tiếp trong tệp C# nhưng Unity khuyên bạn nên sử dụng tài liệu UXML nếu có thể.

**Unity Style Sheets (USS)**: Các biểu định kiểu áp dụng các kiểu và hành vi trực quan cho giao diện người dùng. Chúng tương tự như Cascading Style Sheets (CSS) được sử dụng trên web và hỗ trợ một tập hợp con các thuộc tính CSS tiêu chuẩn. Mặc dù bạn có thể áp dụng kiểu trực tiếp trong tệp C# nhưng Unity khuyên bạn nên sử dụng tệp USS nếu có thể.

Sử dụng các công cụ sau để tạo và gỡ lỗi giao diện của bạn cũng như tìm hiểu cách sử dụng UI Toolkit:
- **UI Debugger**: Một công cụ chẩn đoán tương tự như chế độ xem gỡ lỗi của trình duyệt web. Sử dụng nó để khám phá hệ thống phân cấp các phần tử và nhận thông tin về cấu trúc UXML cơ bản của nó và các kiểu USS. Bạn có thể tìm thấy nó trong Trình chỉnh sửa trong "**Window > UI Toolkit > Debugger**".
- **UI Builder**: cho phép bạn tạo và chỉnh sửa trực quan các nội dung của Bộ công cụ giao diện người dùng như tệp UXML và USS.
- **UI Samples**: Thư viện mẫu mã. **Window > UI Toolkit > Samples.**.

Bạn có thể thêm các UI Controls theo những cách sau:
- Sử dụng UI Builder để thêm các UI Controls một cách trực quan
- Sử dụng tệp văn bản giống XML (UXML) để thêm các UI Controls
- Sử dụng tập lệnh C# để thêm các UI Controls

```C#
public class MyCustomEditor : EditorWindow // custom Editor
{
    [SerializeField]
    private VisualTreeAsset m_UXMLTree; // là private nhưng thêm [SerializeField] để kéo thả file UXML vào làm reference

    private int m_ClickCount = 0; // lưu và tăng dần mỗi lần button được click

    private const string m_ButtonPrefix = "button"; // sử dụng để tìm Toggle theo Name, quy tắc đặt tên Button và Toggle cần giống nhau theo cách này

    [MenuItem("Window/UI Toolkit/MyCustomEditor")] // vị trí để có thể open 'MyCustomEditor' trong 'Editor'
    public static void ShowExample() // khi click vào menu thì sẽ call hàm này
    {
        MyCustomEditor wnd = GetWindow<MyCustomEditor>(); // trả về một 'EditorWindow' với kiểu là 'MyCustomEditor' là Window này
        wnd.titleContent = new GUIContent("CustomEditor của tôi"); // set title cho nó
    }

    public void CreateGUI() // hàm này được call khi init Window
    {
        // Each editor window contains a root VisualElement object
        VisualElement root = rootVisualElement; // tương đương với 'document' của HTML

        // Các đối tượng VisualElements có thể chứa các VisualElement khác theo hệ thống phân cấp cây.
        VisualElement label = new Label("These controls were created using C# code."); // mỗi Control hoặc 1 nhóm Controls được add vào 1 VisualElement, VisualElement đó được add vào root (document) để hiển thị
        root.Add(label); // Control muốn hiển thị thì phải add vào root (document)

        Button button = new Button();
        button.name = "button3";
        button.text = "This is button3.";
        root.Add(button); // Control muốn hiển thị thì phải add vào root (document)

        Toggle toggle = new Toggle();
        toggle.name = "toggle3"; // quy tắc đặt tên cần giống button để lấy number ở bên dưới
        toggle.label = "Number?";
        root.Add(toggle); // Control muốn hiển thị thì phải add vào root (document)

        // Import UXML sử dụng 'AssetDatabase' (Editor only, Runtime sử dụng "Addressables" hoặc Drag reference trong Inspector thông qua một Script:MonoBehaviour)
        // nếu UXML và USS đặt trong thư mục "Resources" thì có thể sử dụng "Resources.Load". VD: VisualTreeAsset uxml = Resources.Load<VisualTreeAsset>("main_window");
        var visualTree = AssetDatabase.LoadAssetAtPath<VisualTreeAsset>("Assets/Editor/MyCustomEditor.uxml"); // UXML là thể hiện của 'VisualTreeAsset'
        VisualElement labelFromUXML = visualTree.Instantiate(); // tạo 'VisualElement' từ 'VisualTreeAsset' là một nhóm Controls để 'Visual'
        root.Add(labelFromUXML); // add vào root (document)

        root.Add(m_UXMLTree.Instantiate()); // cách viết rút gọn: từ Reference UXML -> tạo 'VisualElement' (Instantiate) -> add vào root

        //Call the event handler
        SetupButtonHandler(); // gọi thủ tục (hàm) để thêm Handler cho các buttons
    }

    // thêm Handler cho các buttons
    private void SetupButtonHandler()
    {
        VisualElement root = rootVisualElement; // 'rootVisualElement' giống 'gameObject', luôn trỏ đến gốc root (document)

        var buttons = root.Query<Button>(); // 'Query' hoặc 'Q', tìm theo tên hoặc tất cả nếu ko nhập tên.
        buttons.ForEach(RegisterHandler); // duyệt tất cả buttons và Handler cho mỗi button
    }
    private void RegisterHandler(Button button)
    {
        button.RegisterCallback<ClickEvent>(PrintClickMessage); // đăng ký Callback khi button được bấm, Callback nhận đối số 'ClickEvent' chứa các thông tin liên quan đến event đó
    }
    private void PrintClickMessage(ClickEvent evt) // Callback được gọi khi button được bấm
    {
        VisualElement root = rootVisualElement; // lấy root reference

        ++m_ClickCount; // tăng bộ đếm

        Button button = evt.currentTarget as Button; // IEventHandler currentTarget
        string buttonNumber = button.name.Substring(m_ButtonPrefix.Length); // Substring để lấy con số tương ứng vì Button và Toggle đặt tên giống nhau
        string toggleName = "toggle" + buttonNumber; // tạo tên Toggle tương ứng với Button
        Toggle toggle = root.Q<Toggle>(toggleName); // truy vấn Toggle theo tên, vì trả về chỉ có 1 Object nên Name của Element phải là DUY NHẤT (không thì sẽ trả về phần tử đầu tiên ???)

        Debug.Log("Button was clicked!" + (toggle.value ? " Count: " + m_ClickCount : "")); // in ra console Log
    }
}
```

## Sử dụng UXML Document như một template (re-use ở nhiều nơi)

Trong UI Builder, kéo file .UXML (Library > Project tab) vào Hierarchy. "Template Instance" xuất hiện trong Hierarchy như một element bình thường và có kiểu là "**TemplateContainer**". các properties của 'internal hierarchy' này chỉ đọc và chỉ để tham khảo.

Trong UXML sử dụng template sẽ có khai báo giống thế này:
- ```<ui:Template name="ListEntry" src="project://database/Assets/UI/ListEntry.uxml?fileID=9197481963319205126&amp;guid=f511ca1ef59a15b4aa606c94f8049527&amp;type=3#ListEntry" />```
- ```<ui:Instance template="ListEntry" name="ListEntry" />```

## Tạo một Sub-Document như là một Template

Trong UI Builder, click chuột phải vào c (một phần UXML hiện tại trong Hierarchy) và chọn "Create Template" > sau khi tạo Template thì Sub-Document trở thành "**TemplateContainer**".

```XML
<ui:UXML xmlns:ui="UnityEngine.UIElements" xmlns:uie="UnityEditor.UIElements" editor-extension-mode="False">
    <ui:Template name="ListEntry" src="project://database/Assets/UI/ListEntry.uxml?fileID=9197481963319205126&amp;guid=f511ca1ef59a15b4aa606c94f8049527&amp;type=3#ListEntry" />
    <ui:Template name="background" src="project://database/Assets/UI/Templates/background.uxml?fileID=9197481963319205126&amp;guid=4081ee76a069a0c41a0b2ae2be816d44&amp;type=3#background" />
    <Style src="project://database/Assets/UI/MainView.uss?fileID=7433441132597879392&amp;guid=4d46447ce418de347874c3011cf5d723&amp;type=3#MainView" />
    <ui:Instance template="background" name="background" />
    <ui:Instance template="ListEntry" name="ListEntry" />
</ui:UXML>
```

## Edit, Unpack một "template instance"

- **Open in UI Builder**: Unload Tài liệu UXML hiện tại và Load Template Instance trong UI Builder:
- **Open Instance in Isolation**: Giữ Tài liệu UXML hiện tại được tải ở chế độ nền trong khi tải Template Instance. Hệ thống phân cấp và Canvas chỉ hiển thị nội dung của Template Instance và khung StyleSheets bao gồm biểu định kiểu của Tài liệu UXML gốc ở trạng thái chỉ đọc. Điều này là do các biểu định kiểu vẫn đang được áp dụng cho Template Instance:
- **Open Instance in Context**: Giữ Tài liệu UXML hiện tại được tải trong khi đặt tất cả các thành phần của nó ở chế độ chỉ đọc và xuất hiện mờ trong Hệ thống phân cấp và Canvas. Bạn có thể chỉnh sửa nội dung của Phiên bản mẫu trong ngữ cảnh của Tài liệu UXML gốc. Sử dụng tùy chọn này để cập nhật nội dung Phiên bản mẫu mà không làm mất ngữ cảnh của UXML hiện tại.
- **Unpack Instance**: nhấp chuột phải vào Phiên bản mẫu và chọn Giải nén phiên bản.
- **Unpack Instance Completely**: Điều này thay đổi tất cả các Phiên bản mẫu thành Tài liệu UXML thông thường.

## Thêm Selector vào StyleSheets

```CSS
#elementNameOrId (bắt đầu với #)
.styleClassName (bắt đầu với .)
.parentClassName > .directChildClassName
.parentClassName .childClassName (ở bất cứ depth nào)
.styleClassName:hover (pseudo-classes)
.styleClassName:focus (pseudo-classes: active, inactive, selected, disabled...)
```

## Sử dụng class StyleSheets hoặc Extract inlined Style to New Class trong mỗi Element của Hierarchy

Click vào Element trong Hierarchy > trong Inspector tới phần "Style Class List". Thao tác này sẽ thêm className vào trong Element (giống HTML CSS: class="w3-btn w3-padding"). Hoặc kéo ClassName từ StyleSheets xuống Element trong Hierarchy.

## Sử dụng biến trong USS với "USS variables"

Trong UI Builder không thể tạo USS variables, sử dụng text editor để thêm:
- Để tạo một biến USS, hãy đặt trước tên của nó một dấu gạch ngang kép (--). VD: ```--color-1: red;```
- Để sử dụng giá trị biến USS trong quy tắc USS khác, hãy sử dụng hàm var() để gọi nó. VD: ```var(--color-1);```
- Khi bạn cập nhật một biến, nó sẽ cập nhật tất cả các thuộc tính USS sử dụng biến đó. (tất nhiên)
- Chỉ định giá trị mặc định (Fallback) cho các biến USS nếu không tìm thấy giá trị của biến. VD: ```var(--color-1, #FF0000);```
- USS không hỗ trợ các phép toán trên biến VÀ không hỗ trợ hàm var() bên trong các hàm khác. VD: ```background-color: rgb(var(--red), 0, 0);```
- Trong UI Builder có thể xem được property nào đang sử dụng giá trị biến thì label sẽ được bọc trong 1 box<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/UIBuilder/USSVariablesSet.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

```CSS
:root {
  --color-1: blue;
  --color-2: yellow;
}

.paragraph-regular {
  color: var(--color-1);
  background: var(--color-2);
  padding: 2px;
}

.paragraph-reverse {
  color: var(--color-2);
  background: var(--color-1);
  padding: 2px;
}
```

## Instantiate UXML from C# scripts and Find visual elements

**Instantiate**:
- Trước tiên bạn phải tải tệp vào **VisualTreeAsset**, sau đó sử dụng **Instantiate()** để khởi tạo.
- Sau khi UXML được khởi tạo, bạn có thể truy xuất các phần tử cụ thể từ cây trực quan với UQuery (Query / Q)

**UQuery** được lấy cảm hứng từ JQuery và Linq và được thiết kế để hạn chế việc phân bổ bộ nhớ động. Điều này cho phép hiệu suất tối ưu trên nền tảng di động.
- Để sử dụng UQuery để tìm các phần tử, trước tiên bạn phải tải và khởi tạo UXML, sau đó sử dụng **Query** hoặc **Q** để xây dựng các quy tắc selection trên phần tử trực quan gốc.
- Bạn có thể truy vấn các phần tử theo tên, lớp USS hoặc loại phần tử của chúng (Button, Label, VisualElement...). Bạn cũng có thể truy vấn bằng một vị từ hoặc thực hiện các truy vấn phân cấp phức tạp.

**Query elements**:
- Query(name: "element-name"): có thể bỏ qua 'name' vì nó là first argument. VD: ```List<VisualElement> result = root.Query("OK").ToList();```
- Một số hàm UQueryBuilder có thể sử dụng: .ToList() .First() .AtIndex(1) .Last()
- Query(className: "class-name"): Ví dụ tìm tất cả các element có class “yellow” và gán chúng vào một List: ```List<VisualElement> result = root.Query(className: "yellow").ToList();```
- ```Query<Type>: VD: VisualElement result = root.Query<Button>().AtIndex(2);```
- Query with a predicate: VD: ```List<VisualElement> result = root.Query(className: "yellow").Where(elem => elem.tooltip == "").ToList();```
- Complex hierarchical queries:
```C#
VisualElement result = root.Query<Button>(className: "yellow", name: "OK").First();
VisualElement result = root.Query<VisualElement>("container2").Children<Button>("Cancel").First();
root.Query().Where(elem => elem.tooltip == "").ForEach(elem => elem.tooltip="This is a tooltip!");
```
- Hãy cân nhắc những điều sau khi bạn sử dụng UQuery:
    + UQuery duyệt qua hệ thống phân cấp để tìm các phần tử theo tên, lớp hoặc loại. Kết quả bộ đệm từ UQuery khi khởi tạo.
    + Nếu bạn cần truy xuất nhiều phần tử, hãy sử dụng cấu trúc QueryState (được trả về bởi phương thức element.Query()) và liệt kê nó để tránh tạo danh sách. Bạn cũng có thể tạo một truy vấn một lần và thực hiện nó trên các phần tử khác nhau.
    + UI Toolkit **không destroy** các visual elements không còn cần thiết, nó sử dụng trình thu gom rác C# để thu thập chúng. Hãy lưu ý để **không vô tình giữ lại các tham chiếu** đến các visual elements trong một lớp tồn tại lâu hơn UIDocuments hoặc Window nơi chứa các phần tử đó.
    + Ghi lại (Capture) các biến VisualElement bên trong các closures.
    + Khi bạn tạo hoặc phát hành nhiều phần tử, hãy bật tính năng thu thập rác tăng dần (incremental garbage collection) trong **Project Settings** để tránh mức tăng đột biến của trình thu gom rác.

## Create a custom control

Tạo Class extend "**VisualElement**" (ko extend built-in UI controls vì nó có thể thay đổi trong tương lai).

Bạn có thể khởi tạo một điều khiển tùy chỉnh trong constructor của nó. Tuy nhiên, nếu ứng dụng của bạn cần, bạn có thể trì hoãn việc khởi chạy cho đến khi điều khiển tùy chỉnh được thêm vào giao diện người dùng. Để thực hiện việc này, hãy đăng ký lệnh gọi lại cho **AttachToPanelEvent**. Để phát hiện điều khiển tùy chỉnh của bạn đã bị xóa khỏi giao diện người dùng, hãy sử dụng lệnh gọi lại **DetachFromPanelEvent**.
```C#
var myCustomElement = rootVisualElement.Q(className: "my-custom-element");
myCustomElement.RegisterCallback<AttachToPanelEvent>(e =>
    { /* do something here when element is added to UI */ });
myCustomElement.RegisterCallback<DetachFromPanelEvent>(e =>
    { /* do something here when element is removed from UI */ });
```

Tham khảo thêm [Create a custom control](https://docs.unity3d.com/2021.3/Documentation/Manual/UIE-create-custom-controls.html){:.hvr-forward rel="nofollow" target="_blank"}

## Đóng gói các tài liệu UXML bằng logic

Tách giao diện người dùng khỏi mã trò chơi hoặc ứng dụng của bạn:
- Sử dụng UXML để xác định cấu trúc
- Sử dụng USS để xác định giao diện
- Sử dụng C# để xác định logic của điều khiển.

TODO: https://docs.unity3d.com/2021.3/Documentation/Manual/UIE-encapsulate-uxml-with-logic.html