---
layout: tool
robots: NOINDEX, NOFOLLOW
# info
priority: 1
tool_name: Kanji Siêu Tốc
icon: "/assets/img/tools/kanji_2511.png"
description: Kanji Siêu Tốc
konami: true
quickNote: true
secondMenu: true
secondMenuIcon: toys
secondMenuHandler: toggleTypingAndOnKun()
thirdMenu: true
thirdMenuIcon: extension
thirdMenuHandler: toggleExceptKanji()
---
<link rel="stylesheet" href="/tools/kanji_sieutoc/kanji.css" />

<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">
    <input class="w3-check" type="checkbox" checked="checked" id="optionCheckboxHanViet">
    <label>Hán Việt</label>
    <input class="w3-check" type="checkbox" id="optionCheckboxMeaning">
    <label>Nghĩa</label>
    <span class="w3-margin-left w3-wide w3-text-brown" id="currentGroupTitle"></span>
</div>
<div class="container">
    <div class="left-sidebar kj-scrollable" id="leftSidebar">
        <!-- Danh sách menu sẽ được tạo bằng JavaScript -->
    </div>
    <div class="main-content scrollable" id="mainContent">
        <!-- Bảng dữ liệu sẽ được tạo bằng JavaScript -->
    </div>
</div>

<script src="/tools/kanji_sieutoc/kanji.js" type="text/javascript"></script>