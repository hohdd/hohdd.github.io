var params = {
    // id: 'DnIBWk_TdKw', // Người miền núi chất
    // start: 28.5,
    // end: 63,
    // seek: 0

    id: '3gNuUcPg1fk', // BINZ - HIT ME UP (ft. NOMOVODKA)
    start: 33,
    end: 283,
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
        elm.value = v;
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

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        onYouTubePlayerAPIReady();
    }
}