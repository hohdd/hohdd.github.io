---
layout: default
robots: NOINDEX, NOFOLLOW
# info
priority: 1
tool_name: Youtube Loop
icon: "/assets/img/tools/youtube_loop_512x512.png"
description: Youtube Loop
konami: true
# secondMenu: true
# secondMenuIcon: folder_special
# secondMenuHandler: settingToolHandler()
# thirdMenu: true
# thirdMenuIcon: sync_alt
# thirdMenuHandler: toggleToolBar()
quickNote: true
---
<!-- https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player -->
<!-- https://developers.google.com/youtube/player_parameters#Parameters -->
<div class="w3-padding-24"></div>
<style>
/* scroll */
.scroll {
  max-height: 350px;
  overflow-y: scroll;
}
/* width */
.scroll::-webkit-scrollbar {
  width: 3px;
}
/* Track */
.scroll::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background: #888; 
}
/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>

<label>
  <input type="text" class="DHInput" placeholder="Enter Youtube URL | Short | VideoId here..." id="urlInput" onchange="onChangeUrlInput()">
</label>

<div class="w3-cell-row">
  <div class="w3-container w3-cell w3-mobile">
    <div id="ytplayer"></div>
    <div id="listFilesContainer" class="w3-padding w3-margin-top w3-margin-right w3-card scroll"></div>
  </div>
  <div class="w3-container w3-cell w3-mobile">
    <div class="w3-container">
      <p>
      <label class="w3-btn w3-border" onclick="pickStart()">Start (pick current)</label>
      <span class="tooltip">
        <span class="material-icons w3-button" onclick="clearToBegin()">delete_forever</span>
        <span class="tooltiptext">Đặt giá trị là First Frame</span>
      </span>
      <input class="w3-input" type="number" id="inputStart" value="0" onchange="onChangeInputParams('start', this)"></p>
      <p>
      <label class="w3-btn w3-border" onclick="pickEnd()">End (pick current)</label>
      <span class="tooltip">
        <span class="material-icons w3-button" onclick="clearToEnd()">delete_forever</span>
        <span class="tooltiptext">Đặt giá trị là Last Frame</span>
      </span>
      <input class="w3-input" type="number" id="inputEnd" onchange="onChangeInputParams('end', this)"></p>
      <p>
      <label onclick="seekTo()" class="w3-btn w3-border">Seek To (jump)</label>
      <label onclick="pickCurrent()" class="w3-btn w3-border">Pick current</label>
      <input class="w3-input" type="number" id="inputSeekTo" onchange="onChangeInputParams('seek', this)"></p>
      <p>
      <span class="material-icons w3-button" onclick="playVideo()">play_arrow</span>
      <span class="material-icons w3-button" onclick="pauseVideo()">pause</span>
      <span class="material-icons w3-button" onclick="stopVideo()">stop</span>
      <span class="material-icons w3-button" onclick="seekToStart()">refresh</span>
      <span class="material-icons w3-button" onclick="fullscreenPlayer()">fit_screen</span></p>
      <p>
      <input class="w3-input" placeholder="Description" id="saveDesc">
      <label class="w3-btn w3-border w3-margin-top" onclick="fmCreateNew()">Save</label>
      <label class="w3-btn w3-border w3-margin-top" onclick="getTitleVideo()">Get Desc</label>
      <label class="w3-btn w3-border w3-margin-top" onclick="clearDescInput()">X</label></p>
    </div>
  </div>
</div>
<script src="/tools/youtubeloop/youtubeloop.js"></script>