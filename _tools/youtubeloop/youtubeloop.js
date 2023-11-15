
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
    window.DHytplayerMain = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        videoId: '_fa5M8vmOOk',
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
    pickEnd(window.DHytplayerTarget.getDuration());
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
    console.log('---playVideo---');
    window.DHytplayerTarget.playVideo();
    startTimer();
}
function pauseVideo() {
    console.log('---pauseVideo---');
    window.DHytplayerTarget.pauseVideo();
    stopTimer();
}
function stopVideo() {
    console.log('---stopVideo---');
    window.DHytplayerTarget.stopVideo();
    stopTimer();
}
function pickStart(i) {
    console.log('---inputStart---');
    document.getElementById('inputStart').value = i ? i : window.DHytplayerTarget.getCurrentTime();
}
function pickEnd(i) {
    console.log('---inputEnd---');
    document.getElementById('inputEnd').value = i ? i : window.DHytplayerTarget.getCurrentTime();
}
function pickCurrent(i) {
    console.log('---inputSeekTo---');
    document.getElementById('inputSeekTo').value = i ? i : window.DHytplayerTarget.getCurrentTime();
}
function seekTo(i) {
    if (i) {
        window.DHytplayerTarget.seekTo(i);
    } else {
        var input = document.getElementById("inputSeekTo");
        if (input.value) {
            if (YT.PlayerState.PLAYING === 0) {
                window.DHytplayerTarget.playVideo();
            }
            window.DHytplayerTarget.seekTo(input.value);
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
}
function clearToEnd() {
    pickEnd(window.DHytplayerTarget.getDuration());
}

function startTimer() {
    try {
        window.DHTimer = setInterval(() => {
            if ((document.getElementById('inputEnd').value > 0) && (window.DHytplayerTarget.getCurrentTime() > document.getElementById('inputEnd').value)) {
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
    window.DHytplayerTarget.loadVideoById(id, startNum);
    setTimeout(() => {
        clearToEnd();
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
        }
    }, 1000);
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        onYouTubePlayerAPIReady();
    }
}