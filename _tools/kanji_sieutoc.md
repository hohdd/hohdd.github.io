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

<!-- Quiz Flashcard -->
<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">Quiz Flashcard</div>
<div class="w3-container">
    <div class="w3-panel w3-pale-yellow w3-border">
        <h1 id="quizKanjiTxtId">言</h1>
        <small id="quizTypingHiraganaTxtId">い (is)</small>
        <small id="quizGroupIndicatorTxtId">言 (NGÔN - nói)</small>
        <h3 id="quizHanVietAndMeaningTxtId">NGÔN - nói</h3>
        <h5 id="quizHintRememberTxtId">lần ĐẦU 2 người mở MIỆNG NÓI chuyện</h5>
    </div>
    <span class="material-icons w3-button w3-border w3-border-blue" onclick="quizPreItem()" title="Previous">skip_previous</span>
    <span class="material-icons w3-button w3-border w3-border-blue" onclick="quizPlayOrPause()" title="Play or Pause" id="quizPlayOrPauseBtnIcon">play_arrow</span>
    <span class="material-icons w3-button w3-border w3-border-blue" onclick="quizNextItem()" title="Next">skip_next</span>
    <span><input class="w3-button w3-border w3-border-blue" type="number" step="500" min="500" max="3000" value="1000" id="quizIntervalDelay"></span>
    <span><input class="w3-button w3-border w3-border-blue" type="number" step="1" min="1" max="2511" id="quizCurrentNoIndicator"></span>
    <span class="material-icons w3-button w3-border w3-border-blue" onclick="goToNoClicked()" title="Next">input</span>
</div>

<!-- Push Notification (require 'quizDataSet') -->
<div class="w3-container">
    <h3>Notifications</h3>
    <div class="w3-panel w3-sand w3-border" style="display: none" id="notificationElms">
        <h1 id="notiKanjiTxtId">信</h1>
        <small id="notiTypingHiraganaTxtId">しん (shin)</small>
        <small id="notiGroupIndicatorTxtId">言 (NGÔN - nói)</small>
        <h3 id="notiHanVietAndMeaningTxtId">TÍN - tin tưởng</h3>
        <h5 id="notiHintRememberTxtId">NGƯỜI ĐỨNG NÓI sẽ được TIN TƯỞNG</h5>
    </div>
    <span class="material-icons w3-button w3-border w3-border-blue" onclick="notiPlayOrPause()" title="Play or Pause" id="notiPlayOrPauseBtnIcon">play_arrow</span>
    <span><input class="w3-button w3-border w3-border-blue" type="number" step="500" min="10000" max="7200000" value="1800000" id="notiIntervalDelay"></span>
    <span class="w3-button w3-border w3-border-blue" id="notiCountIndicator" onclick="pushNow()">...</span>
    <span class="w3-button w3-border w3-border-blue" id="notiKanjiIndicator" onclick="toggleNotificationElms()">...</span>
</div>

<script src="/tools/kanji_sieutoc/kanji.js" type="text/javascript"></script>