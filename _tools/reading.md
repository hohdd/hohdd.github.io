---
layout: default
robots: NOINDEX, NOFOLLOW
# info
tool_name: Reading
icon: "/assets/img/tools/reading_512x512.png"
description: Reading
konami: true
secondMenu: true
secondMenuIcon: folder_special
secondMenuHandler: settingToolHandler()
quickNote: true
---
<!-- https://pdfobject.com/pdf/sample-3pp.pdf -->
<!-- https://codepen.io/justinchmura/pen/PZzBOP/ -->
<link rel="stylesheet" href="/tools/reading/reading.css" />
<script src="/tools/reading/pdfobject.min.js"></script>

<div id="pdfContainer"></div>

<p style="z-index: 10000;position: absolute;bottom: 0;right: 0; scale: 0.6;">
    <audio id="audio" controls="" style="float: right;"></audio><br>
    <button id="noteDiv" onclick="onClickNoteDiv()">[PDF_takeNoteContent]</button>
    <button id="count" disabled>0</button>
    <button onclick="apply(0.5)">0.5</button>
    <button onclick="apply(0.8)">0.8</button>
    <button onclick="apply(1)">1</button>
    <button onclick="apply(1.5)">1.5</button>
    <button onclick="apply(2)">2</button>
    <button onclick="apply(3)">3</button>
</p>

<p style="z-index: 10000;position: absolute;bottom: 0; scale: 0.6;">
    <button onclick="document.getElementById('selectFileInput').click()">File</button>
    <input type="file" id="selectFileInput" onchange="loadFile(event)" style="display:none">
    <input class="w3-check w3-margin-top" type="checkbox" id="repeatCheck" checked>
    <select class="w3-select w3-border" id="speedSelect">
        <option value="" disabled>...</option>
        <option value="0.5">0.5</option>
        <option value="0.8">0.6</option>
        <option value="0.8">0.7</option>
        <option value="0.8">0.8</option>
        <option value="0.8">0.9</option>
        <option value="1.0" selected>1.0</option>
        <option value="1.5">1.1</option>
        <option value="1.5">1.2</option>
        <option value="1.5">1.3</option>
        <option value="1.5">1.4</option>
        <option value="1.5">1.5</option>
        <option value="1.8">1.8</option>
        <option value="2.0">2.0</option>
        <option value="2.5">2.5</option>
        <option value="3.0">3.0</option>
        <option value="3.5">3.5</option>
        <option value="4.0">4.0</option>
        <option value="4.5">4.5</option>
        <option value="5.0">5.0</option>
    </select>
    <button onclick="apply(false)">apply</button>
    <button onclick="resetTime()">RS</button>
    <button onclick="pickTime()">pick</button>
    <button id="pickTimeValue" onclick="gotoTime(this)">0</button>
    <br>
    <button disabled>SUB</button>
    <button onclick="subTime(5)">5</button>
    <button onclick="subTime(10)">10</button>
    <button onclick="subTime(20)">20</button>
    <button onclick="subTime(30)">30</button>
    <button onclick="subTime(60)">60</button>
    <br>
    <button disabled>ADD</button>
    <button onclick="addTime(5)">5</button>
    <button onclick="addTime(10)">10</button>
    <button onclick="addTime(20)">20</button>
    <button onclick="addTime(30)">30</button>
    <button onclick="addTime(60)">60</button>
</p>

<script src="/tools/reading/reading.js"></script>

<!-- Files modal -->
<div id="fileManagerModal" class="w3-modal w3-animate-opacity" style="z-index: 1000">
  <div class="w3-modal-content w3-card-4">
    <header class="w3-container w3-teal">
      <span onclick="document.getElementById('fileManagerModal').style.display='none'"
        class="w3-button w3-large w3-display-topright">&times;</span>
      <h2>File Manager</h2>
    </header>
    <div class="w3-container w3-padding">
      <button class="w3-btn w3-padding" onclick="fmCreateNew()" disabled>Open</button>
      <div id="listFilesContainer" class="w3-padding w3-card"></div>
    </div>
  </div>
</div>