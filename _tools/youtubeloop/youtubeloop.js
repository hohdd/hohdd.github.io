var params = {
    uuid: '1234567890',
    // id: 'DnIBWk_TdKw', // Người miền núi chất
    // start: 28.5,
    // end: 63,
    // seek: 0

    // id: '3gNuUcPg1fk', // BINZ - HIT ME UP (ft. NOMOVODKA)
    // start: 33,
    // end: 283,
    // seek: 0

    id: 'xq-aTe77bkA', // [ Alizée ] - La Isla Bonita | XHX2CJryJ4U (boy version)
    start: 15,
    end: 222,
    seek: 0
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
    prepareUrlParams();
    window.DHytplayerMain = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        /*videoId: params.id,*/
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'controls': 1,
            'loop': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
}

function onPlayerError(err) {
    DHtoast('Oops! Hãy kiểm tra lại URL...');
}
function onPlayerReady(event) {
    window.DHytplayerTarget = event.target;
    loadAndPlayById(params.id, params.start);
}

function onPlayerStateChange(event) {
    console.log('---onPlayerStateChange---');
    console.log(event);
    console.log('-------------------------');
    /**
     ** YT.PlayerState.PLAYING
     ** BUFFERING: 3, CUED: 5, ENDED: 0, PAUSED: 2, PLAYING: 1, UNSTARTED: -1 
     **/
    if (event.data && event.data == YT.PlayerState.PLAYING) {
        startTimer();
    } else {
        stopTimer();
    }
}
function playVideo() {
    window.DHytplayerMain.playVideo();
    startTimer();
}
function pauseVideo() {
    window.DHytplayerMain.pauseVideo();
    stopTimer();
}
function stopVideo() {
    window.DHytplayerMain.stopVideo();
    stopTimer();
}
function pickStart(i) {
    document.getElementById('inputStart').value = i ? i : window.DHytplayerMain.getCurrentTime();
    onChangeInputParams('start', document.getElementById('inputStart'));
}
function pickEnd(i) {
    document.getElementById('inputEnd').value = i ? i : window.DHytplayerMain.getCurrentTime();
    onChangeInputParams('end', document.getElementById('inputEnd'));
}
function pickCurrent(i) {
    document.getElementById('inputSeekTo').value = i ? i : window.DHytplayerMain.getCurrentTime();
    onChangeInputParams('seek', document.getElementById('inputSeekTo'));
}
function seekTo(i) {
    if (i) {
        window.DHytplayerMain.seekTo(i);
    } else {
        var input = document.getElementById("inputSeekTo");
        if (input.value) {
            if (YT.PlayerState.PLAYING === 0) {
                window.DHytplayerMain.playVideo();
            }
            window.DHytplayerMain.seekTo(input.value);
        } else {
            DHtoast('Chưa nhập giá trị...');
        }
    }
}
function seekToStart() {/*loop*/
    seekTo(document.getElementById('inputStart').value);
}
function clearToBegin() {
    document.getElementById('inputStart').value = 0;
    onChangeInputParams('start', document.getElementById('inputStart'));
}
function clearToEnd() {
    pickEnd(window.DHytplayerMain.getDuration());
    onChangeInputParams('end', document.getElementById('inputEnd'));
}

function startTimer() {
    try {
        window.DHTimer = setInterval(() => {
            if ((document.getElementById('inputEnd').value > 0) && (window.DHytplayerMain.getCurrentTime() > document.getElementById('inputEnd').value)) {
                seekTo(document.getElementById('inputStart').value ? document.getElementById('inputStart').value : 0);
            }
        }, 300);
    } catch (error) {
        console.log(error);
    }
}
function stopTimer() {
    try {
        clearInterval(window.DHTimer);
    } catch (error) {
        console.log(error);
    }
}
/**
 * loadAndPlayById(id)
 * _fa5M8vmOOk: Soft Rock Ballads 70s 80s 90s
 * DnIBWk_TdKw: Người miền núi chất
 **/
function loadAndPlayById(id, startNum = 0) {
    window.DHytplayerMain.loadVideoById(id, startNum);
    setTimeout(() => {
        /*clearToEnd();*/
        if (!document.getElementById('inputEnd').value) {
            params.end = document.getElementById('inputEnd').value = window.DHytplayerMain.getDuration();
        }
        if (document.getElementById('inputStart').value) {
            seekToStart();
        }
    }, 2000);
}
function getYoutubeShortId(url) {
    if (url.endsWith('/')) {
        url = url.replace(/.$/, '');
    }
    return url.split(/[/]+/).pop();
}
function getYoutubeId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : getYoutubeShortId(url);
}
function onChangeUrlInput() {
    DHtoast('Loading...');
    if (window.debounceTimmer) {
        clearTimeout(window.debounceTimmer);
    }
    window.debounceTimmer = setTimeout(() => {
        var url = document.getElementById('urlInput').value;
        if (url) {
            var id = getYoutubeId(url);
            loadAndPlayById(id);

            updateParams('id', id);
        }
    }, 1000);
}
function fullscreenPlayer() {
    try {
        var iframe = window.DHytplayerMain.g;
        var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
        if (requestFullScreen) {
            requestFullScreen.bind(iframe)();
        }
    } catch (error) {
        console.log(error);
    }
}
function prepareUrlParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    setInputValueIfNotNull(id, document.getElementById('urlInput'), 'id', urlParams);
    var start = urlParams.get('start');
    setInputValueIfNotNull(start, document.getElementById('inputStart'), 'start', urlParams);
    var end = urlParams.get('end');
    setInputValueIfNotNull(end, document.getElementById('inputEnd'), 'end', urlParams);
    var seek = urlParams.get('seek');
    setInputValueIfNotNull(seek, document.getElementById('inputSeekTo'), 'seek', urlParams);
}
function setInputValueIfNotNull(v, elm, paramKey, urlParams) {
    if ((! urlParams.size) && (params.id)) {
        v = params[paramKey];
    }
    if (v) {
        params[paramKey] = v;
        elm.value = paramKey !== 'id' ? v : '';
    }
}
function onChangeInputParams(keyParam, elmInput) {
    if (window.debounceTimmer) {
        clearTimeout(window.debounceTimmer);
    }
    window.debounceTimmer = setTimeout(() => {
        updateParams(keyParam, elmInput.value ? elmInput.value : 0);
    }, 2000);
}
function updateParams(keyParam, val) {
    if (val) {
        params[keyParam] = val;
        updateLocationSearch();
    }
}
function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}
function updateLocationSearch() {
    /*window.location.search = encodeQueryData(params);*/
    window.history.replaceState(null, null, `?${encodeQueryData(params)}`);
}

/** LIST FILES: begin */
const defaultFiles = {
    '1234567890': {
        uuid: '1234567890',
        id: 'DnIBWk_TdKw',
        name: 'Người miền núi chất',
        start: 28.5,
        end: 63,
        seek: 0
    },
    '1234567891': {
        uuid: '1234567891',
        id: '3gNuUcPg1fk',
        name: 'BINZ - HIT ME UP (ft. NOMOVODKA)',
        start: 33,
        end: 283,
        seek: 0
    },
    '1234567892': {
        uuid: '1234567892',
        id: 'xq-aTe77bkA',
        name: '[ Alizée ] - La Isla Bonita | XHX2CJryJ4U (boy version)',
        start: 15,
        end: 222,
        seek: 0
    }
}
window.currentFileId = window.localStorage.getItem('youtube_loop_currentFileId');
window.currentFileId = window.currentFileId ? window.currentFileId : params.uuid;
window.savedlistFiles = window.localStorage.getItem('youtube_loop_savedlistFiles');
if (!window.savedlistFiles) {
    window.savedlistFiles = { ...defaultFiles };
    window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
    window.localStorage.setItem('youtube_loop_currentFileId', window.currentFileId);
} else {
    window.savedlistFiles = JSON.parse(window.savedlistFiles);
}
function truncate(input) {
   if (input.length > 32) {
      return input.substring(0, 32) + '...';
   }
   return input;
};
function renderFileList() {
    var listFilesContainerDiv = document.getElementById('listFilesContainer');
    listFilesContainerDiv.innerHTML = '';

    var ul = document.createElement('ul');
    ul.className = 'w3-ul';

    for (const [key, value] of Object.entries(window.savedlistFiles)) {
        var li = document.createElement('li');
        li.className = 'w3-display-container';
        li.innerHTML = `<span class="tooltip" style="border-bottom: none;">${truncate(value.name)}<span class="tooltiptext">${value.name}</span></span>
      <span class="w3-display-right small-BG-lightTealColor">
        <button onclick="fmOpen('${value.uuid}')" class="w3-button w3-transparent" ${value.uuid == window.currentFileId ? 'disabled' : ''}>Open</button>
        <button onclick="fmRename('${value.uuid}')" class="w3-button w3-transparent">Re-name</button>
        <button onclick="fmDelete('${value.uuid}')" class="w3-button w3-transparent">Delete</button>
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
        window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
    }
}
function fmDelete(id) {
    if (confirm(`Bạn có chắc là muốn DELETE? (${window.savedlistFiles[id].name})`)) {
        delete window.savedlistFiles[id];
        window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
    }
}
function fmOpen(id) {
    window.currentFileId = id;
    window.localStorage.setItem('youtube_loop_currentFileId', window.currentFileId);
    // doing for own youtubeloop
    document.getElementById('urlInput').value = window.savedlistFiles[id].id;
    document.getElementById('inputStart').value = window.savedlistFiles[id].start;
    document.getElementById('inputEnd').value = window.savedlistFiles[id].end;
    document.getElementById('inputSeekTo').value = window.savedlistFiles[id].seek;
    renderFileList();

    //update params
    params.uuid = id;
    params.id = window.savedlistFiles[id].id;
    params.start = window.savedlistFiles[id].start;
    params.end = window.savedlistFiles[id].end;
    params.seek = window.savedlistFiles[id].seek;

    loadAndPlayById(params.id, params.start);
    
    updateParams('id', params.id);
}
function fmCreateNew() {
    // doing for own youtubeloop
    var fileId = Date.now() + '';
    var fileName = document.getElementById('saveDesc').value;
    var urlInput = document.getElementById('urlInput').value;
    var inputStart = document.getElementById('inputStart').value;
    var inputEnd = document.getElementById('inputEnd').value;
    var inputSeekTo = document.getElementById('inputSeekTo').value;

    if (fileName == null || fileName == "" 
        || urlInput == null || urlInput == ""
        || (!inputStart)
        || (!inputEnd)
    ) {
        alert('[Name, URL, Start, End] không thể để trống...');
    } else {
        window.savedlistFiles[fileId] = {
            uuid: fileId,
            id: urlInput,
            name: fileName,
            start: inputStart,
            end: inputEnd,
            seek: inputSeekTo
        };
        window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));

        window.currentFileId = fileId;
        window.localStorage.setItem('youtube_loop_currentFileId', fileId);

        renderFileList();
    }
}
renderFileList();
/** LIST FILES: begin */

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        onYouTubePlayerAPIReady();
    }
}