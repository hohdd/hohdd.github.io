---
layout: default
robots: NOINDEX, NOFOLLOW
# info
tool_name: Writing
icon: "/assets/img/tools/edit_256x256.png"
description: Writing
konami: true
---
<!--- TOAST UI Editor: https://github.com/nhn/tui.editor --->
<!-- LINK: https://github.com/nhn/tui.editor/blob/master/docs/en/getting-started.md -->
<!-- API docs: https://nhn.github.io/tui.editor/latest/ToastUIEditor -->
<link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
<script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
<style>
  .openToolbarBtn {
    background-image: url(data:image/png;base64,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);
    background-color: #fffdfd00;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .toastui-editor,
  .md-mode {
    min-height: 80vh !important;
  }
</style>
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
<script>
    window.toolbarItemsOps = [
      [{
        name: 'openItem',
        tooltip: 'Open FM',
        command: 'openFMCommand',
        text: '',
        className: 'openToolbarBtn'
      }, 'heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      ['scrollSync'],
    ];

    window.currentFileId = window.localStorage.getItem('Writing_currentFileId');
    window.currentFileId = window.currentFileId ? window.currentFileId : Date.now() + '';

    window.currentFileName = '(No Name)_' + window.currentFileId;

    window.savedlistFiles = window.localStorage.getItem('Writing_savedlistFiles');
    if (!window.savedlistFiles) {
      window.savedlistFiles = {};
      window.savedlistFiles[window.currentFileId] = {
        id: window.currentFileId,
        name: window.currentFileName
      };
      window.localStorage.setItem('Writing_savedlistFiles', JSON.stringify(window.savedlistFiles));
      window.localStorage.setItem('Writing_currentFileId', window.currentFileId);
    } else {
      window.savedlistFiles = JSON.parse(window.savedlistFiles);
      window.currentFileName = window.savedlistFiles[window.currentFileId].name;
    }

    function renderFileList() {
      console.log(`window.savedlistFiles = ${window.savedlistFiles}`);
      var listFilesContainerDiv = document.getElementById('listFilesContainer');
      listFilesContainerDiv.innerHTML = '';

      var ul = document.createElement('ul');
      ul.className = 'w3-ul';

      for (const [key, value] of Object.entries(window.savedlistFiles)) {
        console.log(`key = ${key}, value = ${value}`);
        var li = document.createElement('li');
        li.className = 'w3-display-container';
        li.innerHTML = `
        ${value.name} <span class="w3-display-right">
          <button onclick="fmOpen('${value.id}')" class="w3-button w3-transparent" ${value.id == window.currentFileId ? 'disabled' : ''}>Open</button>
          <button onclick="fmRename('${value.id}')" class="w3-button w3-transparent">Re-name</button>
          <button onclick="fmDelete('${value.id}')" class="w3-button w3-transparent" ${value.id == window.currentFileId ? 'disabled' : ''}>Delete</button>
        </span>
        `;
        ul.appendChild(li);
      }

      listFilesContainerDiv.appendChild(ul);
    }

    function fmRename(id) {
      var newFileName = prompt("Please enter the new File Name:", window.savedlistFiles[id].name);
      if (newFileName == null || newFileName == "") {
        alert('File Name không thể để trống...');
      } else {
        window.savedlistFiles[id].name = newFileName;
        window.localStorage.setItem('Writing_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
      }
    }
    function fmCreateNew() {
      var fileId = Date.now() + '';
      var fileName = prompt("Please enter the File Name:", '(No Name)_' + fileId);
      if (fileName == null || fileName == "") {
        alert('File Name không thể để trống...');
      } else {
        window.savedlistFiles[fileId] = {
          id: fileId,
          name: fileName
        };
        window.localStorage.setItem('Writing_savedlistFiles', JSON.stringify(window.savedlistFiles));

        window.currentFileId = fileId;
        window.currentFileName = fileName;
        window.localStorage.setItem('Writing_currentFileId', fileId);

        renderFileList();
        window.editor.setMarkdown(`Writing here for **${fileName}**`);

        closeFMCmd();
      }
    }
    function fmDelete(id) {
      if (confirm(`Bạn có chắc là muốn DELETE? (${window.savedlistFiles[id].name})`)) {
        delete window.savedlistFiles[id];
        window.localStorage.setItem('Writing_savedlistFiles', JSON.stringify(window.savedlistFiles));
        window.localStorage.removeItem('WritingMarkdown_' + id);
        renderFileList();
      }
    }
    function fmOpen(id) {
      window.currentFileId = window.savedlistFiles[id].id;
      window.currentFileName = window.savedlistFiles[id].name;
      window.localStorage.setItem('Writing_currentFileId', window.currentFileId);
      window.savedWritingMarkdown = window.localStorage.getItem('WritingMarkdown_' + window.currentFileId);
      window.editor.setMarkdown(window.savedWritingMarkdown);
      renderFileList();
      closeFMCmd();
    }

    function saveWork() {
      window.localStorage.setItem('WritingMarkdown_' + window.currentFileId, window.editor.getMarkdown());
      console.log('saved...');
    }
    function debounce(func, timeout = 2000) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }
    const processChange = debounce(() => saveWork());

    function openFMCmd() {
      document.getElementById('fileManagerModal').style.display = 'block';
    }
    function closeFMCmd() {
      document.getElementById('fileManagerModal').style.display = 'none';
    }

    renderFileList();
    window.savedWritingMarkdown = window.localStorage.getItem('WritingMarkdown_' + window.currentFileId);
    
    window.onload = function () {
      window.editor = new toastui.Editor({
        el: document.querySelector('#editor'),
        height: 'auto',
        previewStyle: 'vertical',
        initialValue: window.savedWritingMarkdown ? window.savedWritingMarkdown : '',
        usageStatistics: false,
        toolbarItems: toolbarItemsOps,
      });
      window.editor.addCommand(
        'markdown',
        'openFMCommand',
        openFMCmd
      );
      window.editor.on('change', processChange);
    };
</script>