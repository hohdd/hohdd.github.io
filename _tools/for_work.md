---
layout: tool
robots: NOINDEX, NOFOLLOW
# info
priority: 4
tool_name: For Work
icon: "/assets/img/tools/for_work.png"
description: For Work
toc: false
konami: true
secondMenu: false
---

# Sitemap M.P.T

| Starts With | Descriptions | Remarks
|-----|-----|-----|
| daily | 3-5 mục cần xem hàng ngày | title + subTitle
| gpt  | Template để chat với Chat-GPT | title + subTitle
| mina  | chia thể, từ vựng, ngữ pháp, Reibun, giao tiếp | mean + vietnamese + vi_mean
| bm | truy cập nhanh các files, note phục vụ dự án đang làm việc | proj + cat + name
| run | Command And Run một số tools. VD: Json Editor... | name + desc
| sc | Shortcuts: Japanese IME, Unity, VSCode, Visual Studio, PowerToys, Macbook... | appOrCat + title + subTitle
| trans | Translate... | Sử dụng: ^trans vi/en/ja.... vi => EN + JA; en => VI + JA; ja => EN + VI
| chat | Msg Patterns: các mẫu câu chat japanese | patVi
| ro | Tool dịch JA sang romaji... | Sử dụng: ^ro ....
| **kj** | 2511 Kanji | tìm theo: Page, No, CatGroup, Kanji, HanViet, Vietnamese, HintRemember
| mem | MemRiseListFiles: từ vựng 50 bài mina, English Gramar 01-03... | title + subTitle + tag (mrminaXX, encautruccau, Unity)
| bt | 214 Bộ thủ | title + subTitle + tag (bothuXX)
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

# Thêm một memrise

- 1) Tạo thư mục (trong VS202X) chứa file json data trong "/Data/MemRise" (DongHD.csproj sẽ tự động add ItemGroup)
- 2) Copy file json vào thư mục vừa tạo (Explorer)
- 3) Tạo mới một Model trong "Models.cs" (tất cả đang để trong 1 file, properties dựa theo file JSON)
- 4) Trong "/Prompts" tạo thêm một Prompt mới (nên clone từ một Prompt có sẵn và sửa)
- 5) ```List<Result> Search(string searchStr)``` là hàm chính cần làm việc (xuất phát từ **"Main.cs" > thêm Init > thêm Query > thêm getAll**, hãy thêm theo thứ tự...)
- 6) Sau khi xong thì tắt M.P.T > Build Solution (các file sẽ được tự động copy vào M.P.T) > Bật M.P.T để kiểm tra...
- 7) Hãy lưu ý đến JSON format (validate JSON) khi Parse Int->String sẽ lỗi nếu KIỂU DỮ LIỆU tróng Model và JSON không khớp
- 8) Thêm bổ sung vào "HelperChanPrompt" và Ghi chép lại trong này (Sitemap M.P.T) như là thủ tục release


{% comment %}

# Microsoft PowerToys: Utilities to customize Windows
- Home: https://learn.microsoft.com/en-us/windows/powertoys/
- Download (lên Github tải bản cài đặt): https://learn.microsoft.com/en-us/windows/powertoys/install

> TL; DR
* PowerToys Run: Alt+Space
* Screen Ruler: Win+Shift+M
* Text Extractor: Win+Shift+T
* Always On Top (monitor): Win+Ctrl+T
* Color Picker: Win+Shift+C
* Fancyzones (WIN+Shift+`): giữ Shift khi Drag windows
* File LockSearch (tìm process đang sử dụng): click chuột phải lên file.
* Mouse Utilities: double Left-Ctrl, Highlighter: Win+Shit+H
* Paste as Plain Text: Win+Ctrl+Alt+V (thêm Win+Alt)
* Peek (quick view): Ctrl+Space (khi chọn file)

> Có nhiều Utility nhưng một số dưới đây là hữu ích và hay sử dụng
1. **PowerToys Run** (xịn):
    * Search for applications, folders or files, running processes.
    * Tìm trong các window đang mở (<Window_title)
    * Thực hiện nhanh Sell command (>command).
    * Value Generator (# uuidv4, # base64 abc, # base64d SGVsbG8gV29ybGQ=)
    * Tính toán đơn giản (= a + b, min, max, floor, sin, cos, tan...).
    * Xem nhanh "date", "time".
    * Search for service (! <service_name>).
    * Search for Window Settings ($regional language)
    * ...Plugins folder: *%LOCALAPPDATA%/Microsoft/PowerToys/PowerToys Run/Plugins*
2. **FancyZones** (hàng xịn): mặc định window có 4 zone, tool này cho phép **tạo thêm zone, giữ shift khi drag** để sử dụng.
3. **Text Extractor utility**: có thể Copy Text trên screen (hiện tại chưa support vi-VN) => có English và Japanese là ngon rồi. sử dụng **⊞ Win+Shift+T**
4. **File Locksmith utility**: tìm xem chương trình nào đang sử dụng file và kill process đó để giải phóng file. **click chuột phải lên file** > "What's using this file" > chọn và End Task
5. **Mouse utilities** (hàng xịn): cho phép "**Find my mouse**" và "**Focus**" vào vị trí con trỏ, **bấm Left-CTRL double** để on/off chế độ focus, ⊞ Win+Shift+H để on/off thể hiện left-click và right-click (yellow-blue). có thể điều chỉnh được độ rộng focus và opacity của background.
6. **Video GIF Capture** (roadmap...): đang xây dựng, tạm thời sử dụng "ScreenToGIF" > có thể record GIF hoặc MP4 (cần download thêm "ffmpeg")
    * Open web (//URL), Search web (??keyword)
7. **Mouse Without Borders** (hàng xin): chia sẻ chuột/bàn phím/clipboad, transfer file (nếu copy file <100Mb). tất nhiên các máy cần phải chung network.
8. Always on Top: shortcut (⊞ Win+Ctrl+T) > tác dụng lên window đang được activate, nhận diện bằng viền border màu blue. thích hợp **khi monitor log**...
9. PowerToys Awake: **default activate** > keep PC awake forever or 1-2 hours... thích hợp khi không muốn phải enter password nhiều lần vì bị khóa màn hình
10. Color Picker: có thể hữu dụng khi muốn **lấy mã màu**. shortcut (⊞ Win+Shift+C)
11. File Explorer add-ons: xem trước một số file định dạng text, Alt+P (trong Explorer) để on/off
12. Peek utility: xem file text nhanh ko cần mở app nặng > chọn file > Ctrl+Space
13. Screen ruler utility: hiện thước kẻ để kiểm tra đo đạc trên screen.

# Diff Folders
- Home: https://github.com/l13/vscode-diff
- Download (sử dụng với VSC): https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-diff

> Compare two folders in Visual Studio Code. Sync folders, show diffs...
1. Mở Panel (để chọn folders rồi compare...): double [Ctrl+L][Ctrl+L] hoặc Ctrl+Shift+P:[>New Diff Panel"]
2. More details > https://github.com/l13/vscode-diff#available-commands

# Tools dịch
Cần thiết khi muốn dịch text trong file Excel, IDE, Chrome...

- Excel (MS Office): sử dụng tool dịch bằng VB hoặc tool built-in (Review > Translate)
- IDE: google xem có add-in/extension nào không...

# My Tools

## PT Run Plugin (DongHDTools)
Hướng dẫn: http://doc.wox.one/en/plugin/csharp_plugin.html
- Chú ý loại project sẽ tạo và output khi build (WPF cũng có thể output Class library), xem cấu hình trong file solution (.sln) và project (.csproj)
- Đã test work với các settings:
    - Project: Sdk="Microsoft.NET.Sdk.WindowsDesktop"
    - TargetFramework: net6.0-windows
    - UseWindowsForms: true (để copy với Clipboard...)
    - ItemGroup: Reference > files .DLL
    - ItemGroup: CopyToOutputDirectory > để copy file ảnh và json vào thư mục build
    - Target: PostBuildEvent > copy /Y NGUỒN ĐÍCH. có thể sử dụng biến $(ProjectDir) và $(SolutionDir)
- Cần phải có 1 UnitTestProject để kiểm tra và thử nghiệm thường xuyên (thêm project vào solution rồi Add Project Reference), chú ý target là .Net Standard hay .Net Framework
- Một số xử lý khi gặp lỗi:
    - Xóa "bin" + "obj", clearn và build lại project/solution
    - Off P.T.Run trước khi build tránh lỗi copy
    - Cần chạy thử vì khi build thì ok nhưng khi Run thì gặp lỗi (không thể load được Assembly thư viện DLL)
    - File .resx (design/text mode) để thêm các tài nguyên có sẵn (embeded) để sử dụng (được đóng gói kèm vào app). VD: string, txt file, image, icon, audio, files...
    - Sử dụng file settings (app.dll.config) cho phép người dùng có thể thay đổi cấu hình (scope user). Trong code có thể sử dụng "Properties.Settings.Default.Save()" để lưu file cấu hình.
- Develop Plugin: cơ bản là làm việc trên "Main.cs" với 2 hàm "Init" và "Query"

## Develop Office Add-ins (HTML, CSS, JavaScript across platforms, not COM and VSTO)
- Hướng dẫn: https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins
- Script Lab: https://learn.microsoft.com/en-us/office/dev/add-ins/overview/explore-with-script-lab
- Deploy and publish: https://learn.microsoft.com/en-us/office/dev/add-ins/publish/publish
- Quick Started:
    + Đơn giản: tạo 1 file manifest.xml > Open Office on the web > Manage My Add-in (có thể upload, tài khoản cty không có quyền này)...
    + Chế độ Develop:
        1. Cài "Yeoman generator" (npm install -g yo generator-office)
        2. Có Yeoman rồi thì tạo add-in project (yo office)
        3. Có base rồi thì tiến hành chỉnh sửa:
            - có hot-reload
            - sử dụng VSC cài đặt thêm "Microsoft Edge Tools" để debug (Run & Debug của VSC, launch.json) 
            - mở "Browser DevTools" + "Edge DevTols Browser" để screencast và sử dụng "Console"...
        4. Tutorial step-by-step ở đây: https://learn.microsoft.com/en-us/office/dev/add-ins/tutorials/excel-tutorial
        5. Hãy nhìn nhận Office Javascript API cung cấp OOP của Office thật (Excel, Word, PowerPoint, Outlook, OneNote, Project, Access) để tự động hóa/lập trình bằng code.

### Cấu trúc thông tin Office tổng quan (đơn giản) như sau:
- info: { host: Excel | Word..., platform: PC | Mac | OfficeOnline | iOS | Android... }
- context: Workbook, Application, Runtime
    - Workbook:
        + properties: Excel.DocumentProperties (the workbook properties, such as: author, company, title...)
        + string: name (the workbook name)
        + names: Excel.NamedItemCollection (a collection of workbook-scoped named items)
        + worksheets: Excel.WorksheetCollection (a collection of worksheets associated with the workbook)
        + tables: Excel.TableCollection (a collection of tables associated with the workbook)
        + comments: Excel.CommentCollection (a collection of comments associated with the workbook)
        + functions: Excel.Functions (a collection of worksheet functions that can be used for computation)
        + styles: Excel.StyleCollection (a collection of styles associated with the workbook)
        + boolean: readOnly? isDirty? autoSave?...
        + ...v.v.
        + Excel.Worksheet:
            - charts: Excel.ChartCollection (a collection of charts that are part of the worksheet)
            - comments: Excel.CommentCollection (a collection of all the Comments objects on the worksheet)
            - pageLayout: Excel.PageLayout (`PageLayout` object of the worksheet: blackAndWhite, headerMargin, footerMargin, orientation, zoom...)
            - ...v.v. shapes, tables... id, name, position, standardWidth, tabColor, visibility...
        + Excel.Table:
            - columns: Excel.TableColumnCollection (a collection of all the columns in the table)
            - rows: Excel.TableRowCollection (a collection of all the rows in the table)
            - sort: Excel.TableSort (the sorting for the table)
            - style: string (the table style. Possible values are: "TableStyleLight1" through "TableStyleLight21", "TableStyleMedium1" through "TableStyleMedium28", "TableStyleDark1" through "TableStyleDark11". A custom user-defined style can also be specified.)
            - ...v.v.

- Một Collection sẽ có các phương thức sau: getCount(), add(<key>)/getItem(<key>)...
- Một Object sẽ có các function thực hiện các tác vụ như:
    + getRange(): Excel.Range (a set of one or more contiguous cells such as a cell, a row, a column, or a block of cells.)
    + ...

### Office Add-ins JavaScript API reference
- Class > Properties > Methods > Details + Examples
- Tất cả có ở đây: https://learn.microsoft.com/en-us/javascript/api/overview?view=common-js-preview

{% endcomment %}