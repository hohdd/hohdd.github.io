/** BEGIN Utils */
function truncate(input) {
    if (input.length > 47) {
       return input.substring(0, 47) + '...';
    }
    return input;
};
function generateFileID() {
    return Date.now() + '';
}
/** END Utils */

function onYouTubePlayerAPIReady() {
    prepareUrlParams(); // update params properties or URL if needed and update inputs if need
    window.DHytplayerMain = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        videoId: params.id, // params already init
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'controls': 1,
            'loop': 1
        },
        events: {
            'onReady': onPlayerReady, // play by params properties and generate playbackrate
            'onStateChange': onPlayerStateChange, // start or stop Timer
            'onError': onPlayerError // DHtoast error msg
        }
    });
}
var params = {
    uuid: '1234567890',
    id: 'DnIBWk_TdKw', // Người miền núi chất
    start: 28.5,
    end: 63,
    seek: 0

    // id: '3gNuUcPg1fk', // BINZ - HIT ME UP (ft. NOMOVODKA)
    // start: 33,
    // end: 283,
    // seek: 0

    // id: 'xq-aTe77bkA', // [ Alizée ] - La Isla Bonita | XHX2CJryJ4U (boy version)
    // start: 15,
    // end: 222,
    // seek: 0
}
function prepareUrlParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    if (id) {
        // update params properties
        setInputValueIfNotNull(id, document.getElementById('urlInput'), 'id', urlParams);
        var start = urlParams.get('start');
        setInputValueIfNotNull(start, document.getElementById('inputStart'), 'start', urlParams);
        var end = urlParams.get('end');
        setInputValueIfNotNull(end, document.getElementById('inputEnd'), 'end', urlParams);
        var seek = urlParams.get('seek');
        setInputValueIfNotNull(seek, document.getElementById('inputSeekTo'), 'seek', urlParams);
        // check uuid and localStorate if exiting
        var uuid = urlParams.get('uuid');
        if (window.savedlistFiles.hasOwnProperty(uuid)) {
            // update title and lyric and lyricNoteOut
            document.getElementById('saveName').value = window.savedlistFiles[uuid].name;
            document.getElementById('saveLyricNote').value = window.savedlistFiles[uuid].lyricNote ?? '';
            document.getElementById('lyricNoteOut').innerHTML = window.savedlistFiles[uuid].lyricNote?.replace(/\n/g, "<br>") ?? '';
        }
    } else {
        // update params properties
        params.uuid = window.currentFileId;
        params.id = window.savedlistFiles[window.currentFileId].id;
        params.start = window.savedlistFiles[window.currentFileId].start;
        params.end = window.savedlistFiles[window.currentFileId].end;
        params.seek = window.savedlistFiles[window.currentFileId].seek;        
        updateLocationSearch();
        // update inputs
        document.getElementById('urlInput').value = params.id;
        document.getElementById('inputStart').value = params.start;
        document.getElementById('inputEnd').value = params.end;
        document.getElementById('inputSeekTo').value = params.seek;
        // update title and lyric and lyricNoteOut
        document.getElementById('saveName').value = window.savedlistFiles[window.currentFileId].name;
        document.getElementById('saveLyricNote').value = window.savedlistFiles[window.currentFileId].lyricNote ?? '';
        document.getElementById('lyricNoteOut').innerHTML = window.savedlistFiles[window.currentFileId].lyricNote?.replace(/\n/g, "<br>") ?? '';
    }
}

function onPlayerReady(event) {
    window.DHytplayerTarget = event.target;
    loadAndPlayById(params.id, params.start, true);
    setTimeout(() => {
        loadPlaybackRateList();
    }, 2000);
    // save window.currentFileId since no error any more from loading
    if (window.isEnterNewUrlManual) {
        window.localStorage.setItem('youtube_loop_currentFileId', window.currentFileId);
        renderFileList(); // enable the button if add new video from Input URL
        window.isEnterNewUrlManual = false; // reset flag
    }
}
function onPlayerStateChange(event) {
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
function onPlayerError(err) {
    DHtoast('Oops! Hãy kiểm tra lại URL...');
}

// onPlayerReady and onChangeUrlInput + fmOpen call many times
function loadAndPlayById(id, startNum = 0, isOnPlayerReadyCalling) {
    if (!isOnPlayerReadyCalling || !window.isNotFirstTimeLoadAndPlay) {
        window.DHytplayerMain.loadVideoById(id, startNum);
        setTimeout(() => {
            if (!document.getElementById('inputEnd').value) {
                params.end = document.getElementById('inputEnd').value = Math.floor(window.DHytplayerMain.getDuration());
            }
        }, 2000);

        // fix first load not playing, seek
        if (!window.isNotFirstTimeLoadAndPlay) {
            seekToStart();
            stopTimer();
            startTimer();
        }
        window.isNotFirstTimeLoadAndPlay = true;
    }
}

function loadPlaybackRateList(currentRate) {
    window.currentPlayRate = currentRate ? currentRate : window.DHytplayerMain.getPlaybackRate();
    window.plRateList = window.DHytplayerMain.getAvailablePlaybackRates();
    if (!window.plRateList.includes(0.9)) {
        window.plRateList.push(0.9);
    }
    if (!window.plRateList.includes(1.1)) {
        window.plRateList.push(1.1);
    }
    if (!window.plRateList.includes(1.3)) {
        window.plRateList.push(1.3);
    }
    if (!window.plRateList.includes(1.8)) {
        window.plRateList.push(1.8);
    }
    window.plRateList.sort();
    console.log(window.plRateList);
    renderPlaybackRatesContainer();
}
function renderPlaybackRatesContainer() {
    var playbackRatesContainer = document.getElementById('playbackRatesContainer');
    playbackRatesContainer.innerHTML = '';

    window.plRateList.forEach(rateItem => {
        playbackRatesContainer.innerHTML += `<button onclick="changePlaybackRate(${rateItem})" class="w3-button w3-transparent ${window.currentPlayRate == rateItem ? 'w3-border' : ''}">${rateItem}</button>`; 
    });
}
function changePlaybackRate(rateVal) {
    window.DHytplayerMain.setPlaybackRate(rateVal);
    loadPlaybackRateList(rateVal); // re-render
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
    document.getElementById('inputStart').value = i ? i : Math.round(window.DHytplayerMain.getCurrentTime())/100;
    onChangeInputParams('start', document.getElementById('inputStart'));
}
function pickEnd(i) {
    document.getElementById('inputEnd').value = i ? i : Math.round(window.DHytplayerMain.getCurrentTime())/100;
    onChangeInputParams('end', document.getElementById('inputEnd'));
}
function pickSeekCurrent(i) {
    document.getElementById('inputSeekTo').value = i ? i : Math.floor(window.DHytplayerMain.getCurrentTime());
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
    pickEnd(Math.floor(window.DHytplayerMain.getDuration()));
    onChangeInputParams('end', document.getElementById('inputEnd'));
}
function onOffTimeMonitor() {
    window.isMonitorTimmer = !window.isMonitorTimmer;
}
function startTimer() {
    try {
        window.DHTimer = setInterval(() => {
            if ((document.getElementById('inputEnd').value > 0) && (window.DHytplayerMain.getCurrentTime() > document.getElementById('inputEnd').value)) {
                seekTo(document.getElementById('inputStart').value ? document.getElementById('inputStart').value : 0);
            }
            if (window.isMonitorTimmer) {
                try {
                    document.getElementById('inputSeekTo_auto').value = window.DHytplayerMain.getCurrentTime();
                } catch (error) {
                    console.log(error);                    
                }
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

            window.currentFileId = generateFileID(); // generate new uuid
            window.isEnterNewUrlManual = true; // set window.isEnterNewUrlManual for onPlayerReady handling
            updateParams('id', id);
            updateParams('uuid', window.currentFileId); // update uuid also

            // reset title, lyric
            document.getElementById("saveName").value = "";
            document.getElementById("saveLyricNote").value = "";
            document.getElementById('lyricNoteOut').innerHTML = "";
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
function updateParams(keyParam, val) {// update params and URL also
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
function getTitleVideo() {
    try {
        document.getElementById("saveName").value = window.DHytplayerTarget.videoTitle;
    } catch (error) {
        console.log(error);
    }
}
function clearDescInput() {
    document.getElementById("saveName").value = "";
    document.getElementById("saveLyricNote").value = "";
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
    // '1234567891': {
    //     uuid: '1234567891',
    //     id: '3gNuUcPg1fk',
    //     name: 'BINZ - HIT ME UP (ft. NOMOVODKA)',
    //     start: 33,
    //     end: 283,
    //     seek: 0
    // },
    // '1234567892': {
    //     uuid: '1234567892',
    //     id: 'xq-aTe77bkA',
    //     name: '[ Alizée ] - La Isla Bonita | XHX2CJryJ4U (boy version)',
    //     start: 15,
    //     end: 222,
    //     seek: 0
    // },
    // '1701367193754': {
    //     uuid: '1701367193754',
    //     id: 'BLED0zy6UNE',
    //     name: 'Shape of You | Music Travel Love ft. Jada Facer (Ed Sheeran Cover)',
    //     start: '5',
    //     end: '215',
    //     seek: '215.91382219073486'
    // },
    // '1701925141323': {
    //     uuid: '1701925141323',
    //     id: 'XMyAEeXicbI',
    //     name: 'One In A Million - Ne-Yo | Tuấn Danh x Đức Tiến Choreography || REBOOT WORKSHOP 2',
    //     start: '1',
    //     end: '82',
    //     seek: '82'
    // },
    // '1702050285116': {
    //     uuid: '1702050285116',
    //     id: '65Gy4oPXjmE',
    //     name: 'One In A Million - Ne-Yo | Choreography Tutorial and Follow Along',
    //     start: '912',
    //     end: '1050',
    //     seek: ''
    // },
    // '1702052471731': {
    //     uuid: '1702052471731',
    //     id: 'lXHjxJ5kTzs',
    //     name: 'Footwork | Footwork Creativity for Shuffling',
    //     start: '0',
    //     end: '16',
    //     seek: '16.361197133514406'
    // },
    // '1702052607072': {
    //     uuid: '1702052607072',
    //     id: 'BxOBhZBLOio',
    //     name: 'Footwork | 5 Easy Footwork Shuffle Steps',
    //     start: '0',
    //     end: '9',
    //     seek: ''
    // },
    // '1702053794203': {
    //     uuid: '1702053794203',
    //     id: 'Ku2t4mtRl0M',
    //     name: 'Samba Whisk - Basic step in 4 steps - PLUS Arm Styling - Dance Insanity',
    //     start: '379',
    //     end: '411',
    //     seek: ''
    // },
    // '1702054074760': {
    //     uuid: '1702054074760',
    //     id: 'KQ5DrOVjUu8',
    //     name: '4 Basic Cha Cha Chasses for Agility | Practice Dance Tutorial',
    //     start: '165',
    //     end: '223',
    //     seek: ''
    // }
}
window.currentFileId = window.localStorage.getItem('youtube_loop_currentFileId');
window.currentFileId = window.currentFileId ? window.currentFileId : params.uuid; // use params if not existing
window.savedlistFiles = window.localStorage.getItem('youtube_loop_savedlistFiles');
if (!window.savedlistFiles) {
    window.savedlistFiles = { ...defaultFiles };
    window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
    window.localStorage.setItem('youtube_loop_currentFileId', window.currentFileId);
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
        li.innerHTML = `<span class="tooltip" style="border-bottom: none;">${truncate(value.name)}<span class="tooltiptext">${value.name}</span></span>
      <span class="w3-display-right small-BG-lightTealColor">
        <button onclick="fmOpen('${value.uuid}')" class="w3-button w3-transparent" ${value.uuid == window.currentFileId ? 'disabled' : ''}>Open</button>
        <!--<button onclick="fmRename('${value.uuid}')" class="w3-button w3-transparent">Re-name</button>-->
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
        if (newFileName == "") {
            DHtoast('File Name không thể để trống...');
        }
    } else {
        window.savedlistFiles[id].name = newFileName;
        window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
        DHtoast('Changed the name!');
    }
}
function fmDelete(id) {
    if (confirm(`Bạn có chắc là muốn DELETE? (${window.savedlistFiles[id].name})`)) {
        delete window.savedlistFiles[id];
        window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
        renderFileList();
        DHtoast('Deleted!');
    }
}
function fmOpen(id) {
    // assign and store new currentFileId
    window.currentFileId = id;
    window.localStorage.setItem('youtube_loop_currentFileId', window.currentFileId);
    // doing for own youtubeloop
    document.getElementById('urlInput').value = window.savedlistFiles[id].id;
    document.getElementById('inputStart').value = window.savedlistFiles[id].start;
    document.getElementById('inputEnd').value = window.savedlistFiles[id].end;
    document.getElementById('inputSeekTo').value = window.savedlistFiles[id].seek;
    document.getElementById('saveName').value = window.savedlistFiles[id].name;
    document.getElementById('saveLyricNote').value = window.savedlistFiles[id].lyricNote ?? '';
    document.getElementById('lyricNoteOut').innerHTML = window.savedlistFiles[id].lyricNote?.replace(/\n/g, "<br>") ?? '';
    renderFileList();

    //update params
    params.uuid = id;
    params.id = window.savedlistFiles[id].id;
    params.start = window.savedlistFiles[id].start;
    params.end = window.savedlistFiles[id].end;
    params.seek = window.savedlistFiles[id].seek;
    updateLocationSearch();

    loadAndPlayById(params.id, params.start);
}
function validateSaveOrCreateNew(fileName, urlInput, inputStart, inputEnd, saveLyricNote) {
    if (saveLyricNote && saveLyricNote.length > 10000) {
        DHtoast('Lyric or Note cannot exceed 10000!');
        return false;
    }
    if (fileName == null || fileName == "" 
        || urlInput == null || urlInput == ""
        || (!inputStart)
        || (!inputEnd)
    ) {
        DHtoast('[Name, URL, Start, End] cannot be empty!');
        return false;
    } else {
        return true;
    }
}
function fmCreateNew() {
    var fileId;
    var fileName = document.getElementById('saveName').value;
    var urlInput = document.getElementById('urlInput').value;
    var inputStart = document.getElementById('inputStart').value;
    var inputEnd = document.getElementById('inputEnd').value;
    var inputSeekTo = document.getElementById('inputSeekTo').value;
    var saveLyricNote = document.getElementById('saveLyricNote').value;

    if (validateSaveOrCreateNew(fileName, urlInput, inputStart, inputEnd, saveLyricNote)) {
        if (window.savedlistFiles.hasOwnProperty(window.currentFileId)) {
            // save current
            fileId = window.currentFileId;
        } else {
            // create new
            fileId = generateFileID();
        }
        // save and render
        if (fileId) {
            window.savedlistFiles[fileId] = {
                uuid: fileId,
                id: getYoutubeId(urlInput),
                name: fileName,
                start: inputStart,
                end: inputEnd,
                seek: inputSeekTo,
                lyricNote: saveLyricNote
            };
            window.localStorage.setItem('youtube_loop_savedlistFiles', JSON.stringify(window.savedlistFiles));
    
            window.currentFileId = fileId;
            window.localStorage.setItem('youtube_loop_currentFileId', fileId);
    
            renderFileList();
            document.getElementById('lyricNoteOut').innerHTML = saveLyricNote?.replace(/\n/g, "<br>") ?? '';

            DHtoast('Saved!');
        }
    }
}
renderFileList();
/** LIST FILES: begin */

// Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Document Ready
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        onYouTubePlayerAPIReady();
    }
}