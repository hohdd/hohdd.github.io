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