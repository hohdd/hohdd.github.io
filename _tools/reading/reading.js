function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
}
function loadFile(evt) {
    var inputFile = evt.target.files[0];
    if (inputFile) {
        var blobUrl = URL.createObjectURL(inputFile);
        let audio = document.getElementById('audio');
        let speed = document.getElementById('speedSelect');
        audio.src = blobUrl;
        audio.playbackRate = speed.value;
        audio.play();
    }
}
function apply(speedInput) {
    let audio = document.getElementById('audio');
    let speed = document.getElementById('speedSelect');
    if (speedInput) {
        audio.playbackRate = speedInput;
    } else {
        audio.playbackRate = speed.value;
    }
}
function increse() {
    let count = document.getElementById('count');
    count.innerText = parseInt(count.innerText) + 1;
}

let audio = document.getElementById('audio');
let repeat = document.getElementById('repeatCheck');
audio.onended = function () {
    increse();
    if (repeat.checked) {
        audio.play();
    }
};
audio.onpause = function () {
};

const takeNoteContentStore = localStorage.getItem('PDF_takeNoteContent');
window.takeNoteContent = takeNoteContentStore ? takeNoteContentStore : '[NONE]';
document.getElementById("noteDiv").innerHTML = window.takeNoteContent;
function onClickNoteDiv() {
    let audio = document.getElementById('audio');
    let audioCurrentTime = Math.round(audio.currentTime * 100) / 100;

    window.takeNoteContent = prompt("Please take a note (time - page - word)", `time = ${secondsToHms(audioCurrentTime)}, page = `);
    window.takeNoteContent = window.takeNoteContent ? window.takeNoteContent : '[NONE]';
    document.getElementById("noteDiv").innerHTML = window.takeNoteContent;
    localStorage.setItem('PDF_takeNoteContent', window.takeNoteContent);
}

function addTime(amt) {
    let audio = document.getElementById('audio');
    audio.currentTime += amt;
}
function subTime(amt) {
    let audio = document.getElementById('audio');
    audio.currentTime -= amt;
}
function resetTime() {
    let audio = document.getElementById('audio');
    audio.currentTime = 0;
}
function pickTime() {
    let audio = document.getElementById('audio');
    let pickTimeValue = document.getElementById('pickTimeValue');
    pickTimeValue.innerText = Math.round(audio.currentTime * 100) / 100;
}
function gotoTime(btn) {
    let audio = document.getElementById('audio');
    audio.currentTime = parseInt(btn.innerText);
}

function openFMCmd() {
    document.getElementById('fileManagerModal').style.display = 'block';
}
function closeFMCmd() {
    document.getElementById('fileManagerModal').style.display = 'none';
}


const defaultIds = ['4000_es_1', '4000_es_2', '4000_es_3', '4000_es_4', '4000_es_5', '4000_es_6'];
const defaultFiles = {
    '4000_es_1': {
        id: '4000_es_1',
        name: '[EN] 4000 essential tập 1',
        path: '/tools/reading/files/4000_es_1.pdf'
    },
    '4000_es_2': {
        id: '4000_es_2',
        name: '[EN] 4000 essential tập 2',
        path: '/tools/reading/files/4000_es_2.pdf'
    },
    '4000_es_3': {
        id: '4000_es_3',
        name: '[EN] 4000 essential tập 3',
        path: '/tools/reading/files/4000_es_3.pdf'
    },
    '4000_es_4': {
        id: '4000_es_4',
        name: '[EN] 4000 essential tập 4',
        path: '/tools/reading/files/4000_es_4.pdf'
    },
    '4000_es_5': {
        id: '4000_es_5',
        name: '[EN] 4000 essential tập 5',
        path: '/tools/reading/files/4000_es_5.pdf'
    },
    '4000_es_6': {
        id: '4000_es_6',
        name: '[EN] 4000 essential tập 6',
        path: '/tools/reading/files/4000_es_6.pdf'
    },
    '560HanTuCoBan': {
        id: '560HanTuCoBan',
        name: '[JA] 560 Hán tự cơ bản (Kanji)',
        path: '/tools/reading/files/560HanTuCoBan.pdf'
    },
    '400_Ess_CNeasy': {
        id: '400_Ess_CNeasy',
        name: '[JA] Chineasy - Quickly learn 400 essential charactors!',
        path: '/tools/reading/files/400_Ess_CNeasy.pdf'
    },
}
window.currentFileId = window.localStorage.getItem('Reading_currentFileId');
window.currentFileId = window.currentFileId ? window.currentFileId : '4000_es_1';
window.savedlistFiles = window.localStorage.getItem('Reading_savedlistFiles');
if (!window.savedlistFiles) {
    window.savedlistFiles = { ...defaultFiles };
    window.localStorage.setItem('Reading_savedlistFiles', JSON.stringify(window.savedlistFiles));
    window.localStorage.setItem('Reading_currentFileId', window.currentFileId);
} else {
    window.savedlistFiles = JSON.parse(window.savedlistFiles);
}
function renderFileList() {
    var listFilesContainerDiv = document.getElementById('listFilesContainer');
    listFilesContainerDiv.innerHTML = '';

    var ul = document.createElement('ul');
    ul.className = 'w3-ul';

    for (const [key, value] of Object.entries(window.savedlistFiles)) {
        var li = document.createElement('li');
        li.className = 'w3-display-container';
        li.innerHTML = `
      ${value.name} <span class="w3-display-right">
        <button onclick="fmOpen('${value.id}')" class="w3-button w3-transparent" ${value.id == window.currentFileId ? 'disabled' : ''}>Open</button>
        <button onclick="fmRename('${value.id}')" class="w3-button w3-transparent" ${value.id == window.currentFileId ? 'disabled' : defaultIds.includes(value.id) ? 'disabled' : ''}>Re-name</button>
        <button onclick="fmDelete('${value.id}')" class="w3-button w3-transparent" ${value.id == window.currentFileId ? 'disabled' : defaultIds.includes(value.id) ? 'disabled' : ''}>Delete</button>
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
        window.localStorage.setItem('Reading_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
    }
}
function fmDelete(id) {
    if (confirm(`Bạn có chắc là muốn DELETE? (${window.savedlistFiles[id].name})`)) {
        delete window.savedlistFiles[id];
        window.localStorage.setItem('Reading_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
    }
}
function fmOpen(id) {
    window.currentFileId = window.savedlistFiles[id].id;
    window.localStorage.setItem('Reading_currentFileId', window.currentFileId);
    pdfObjectOpenFile(window.savedlistFiles[window.currentFileId].path);
    renderFileList();
    closeFMCmd();
}
function fmCreateNew() {
    var filePath = prompt("Please enter FULL-PATH:", 'C:\\Users\\User\\Desktop\\4000_es_2.pdf');
    if (filePath == null || filePath == "") {
        alert('Đường dẫn file không thể để trống...');
    } else {
        pdfObjectOpenFile(filePath);
    }
}
function settingToolHandler() {
    openFMCmd();
}
function pdfObjectOpenFile(filePath) {
    PDFObject.embed(filePath, '#pdfContainer');
}
window.onload = function () {
    renderFileList();
    pdfObjectOpenFile(window.savedlistFiles[window.currentFileId].path);
}