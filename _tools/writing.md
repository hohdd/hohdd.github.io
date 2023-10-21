---
layout: default
robots: NOINDEX, NOFOLLOW
# info
tool_name: Writing
icon: "/assets/img/tools/edit_256x256_2.png"
description: Writing
konami: true
---
<!--- TOAST UI Editor: https://github.com/nhn/tui.editor --->
<!-- LINK: https://github.com/nhn/tui.editor/blob/master/docs/en/getting-started.md -->
<!-- API docs: https://nhn.github.io/tui.editor/latest/ToastUIEditor -->
<link rel="stylesheet" href="/tools/writing/writing.css" />
<link rel="stylesheet" href="/tools/writing/toastui-editor.min.css" />
<script src="/tools/writing/toastui-editor-all.min.js"></script>

<div class="w3-padding-24"></div>
<div id="editor"></div>
<!-- FM modal -->
<div id="fileManagerModal" class="w3-modal w3-animate-opacity" style="z-index: 1000">
  <div class="w3-modal-content w3-card-4">
    <header class="w3-container w3-teal">
      <span onclick="document.getElementById('fileManagerModal').style.display='none'"
        class="w3-button w3-large w3-display-topright">&times;</span>
      <h2>File Manager</h2>
    </header>
    <div class="w3-container w3-padding">
      <p class="w3-btn w3-padding" onclick="fmCreateNew()">Create new</p>
      <div id="listFilesContainer" class="w3-padding w3-card"></div>
    </div>
  </div>
</div>

<script src="/tools/writing/writing.js"></script>