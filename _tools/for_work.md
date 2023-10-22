---
layout: tool
robots: NOINDEX, NOFOLLOW
# info
tool_name: For Work
icon: "/assets/img/tools/for_work.png"
description: For Work
toc: true
konami: true
secondMenu: false
---

# Microsoft PowerToys: Utilities to customize Windows
- Home: https://learn.microsoft.com/en-us/windows/powertoys/
- Download (lên Github tải bản cài đặt): https://learn.microsoft.com/en-us/windows/powertoys/install

> TL; DR
* PowerToys Run: Alt+Space
* Screen Ruler: Win+Shift+M
* Text Extractor: Win+Shift+T
* Always On Top (monitor): Win+Ctrl+T
* Color Picker: Win+Shift+C
* Fancyzones: giữ Shift khi Drag windows
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
    - File .resx (design/text mode) để thêm các tài nguyên có sẵn để sử dụng (được đóng gói kèm vào app). VD: string, txt file, image, icon, audio, files...
- Develop Plugin: cơ bản là làm việc trên "Main.cs" với 2 hàm "Init" và "Query"