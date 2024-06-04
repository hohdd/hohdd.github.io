// When document ready
function documentReady() {
  try {
    highlight_text_content();
  } catch (error) { 
    console.log(error);
  }
  try {
    openAudioControl();
  } catch (error) {
    console.log(error);
  }
  var tocnavElm = document.getElementsByClassName("toc-nav")[0];
  if (tocnavElm) {
    tocnavElm.addEventListener('click', () => {
      tocnavElm.style.display = 'none';
    });
  }
  try {
    mermaid.initialize({
      startOnLoad: true,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  } catch (error) {
    console.log(error);
  }
  applyEventsForAudios();
  try {
    window.quillEditor = new Quill('#quillNoteEditor', {
      theme: 'snow',
      placeholder: 'Bạn có thể viết ghi chú ở đây!',
    });
    window.quillEditor.setHTML = (html) => {
      window.quillEditor.root.innerHTML = html;
    };
    window.quillEditor.getHTML = () => {
      return window.quillEditor.root.innerHTML;
    };
    loadMemo();
  } catch (error) {
    console.log(error);
  }
  try {
    if (window.localStorage.getItem('KNM_donghd')) {
      showKNM();
    } else {
      document.getElementById('modalUnderMaintenance').style.display='block';
    }
  } catch (error) { 
    console.log(error);
  }
  try {
    loadGlslElements();
  } catch (error) { 
    console.log(error);
  }
  try {
    registerScrollToTop();
  } catch (error) { 
    console.log(error);
  }
  try {
    registerFlipable();
  } catch (error) { 
    console.log(error);
  }
  try {
    _TEST_();
  } catch (error) { 
    console.log(error);
  }
}

// secondMenu: true
// secondMenuIcon: gamepad
// secondMenuHandler: closeAllModal()
function toggleColumnTables(arrStr) {
  const columnArr = arrStr.split(" ");
  document.tableHTMLCollection = document.tableHTMLCollection ? document.tableHTMLCollection : document.getElementsByTagName('table');
  for (let tbl of document.tableHTMLCollection) {
    let trHTMLCollection = tbl.getElementsByTagName('tr');
    for (let tr of trHTMLCollection) {
      for (let col of columnArr) {
        try {
          toggleElmDisplay(tr.childNodes[col], 'inline');
        } catch (error) {
          console.log(error);
        }        
      }
    }
  }
}

// Open and close Menu
function toggleMenu() {
  if (document.getElementById("menuElm").style.display === "block") {
    document.getElementById("menuIcon").innerHTML = "menu";
    document.getElementById("menuElm").style.display = "none";
  } else {
    document.getElementById("menuIcon").innerHTML = "close";
    document.getElementById("menuElm").style.width = "100%";
    document.getElementById("menuElm").style.display = "block";
  }
}

function toggleTOC() {
  var tocnavElement = document.getElementsByClassName("toc-nav")[0];
  if (tocnavElement) {
    if (tocnavElement.style.display === "block") {
      tocnavElement.style.display = "none";
    } else {
      tocnavElement.style.display = "block";
      tocnavElement.style.top = "0px";
    }
  }
}

function registerScrollToTop() {
  // Scroll to top
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const tocMenu = document.getElementById("tocMenu");
  // Hide menu on scroll
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function scrollFunction() {
    // go to top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }

    // hide menu on scroll
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      if (tocMenu) tocMenu.classList.remove("opacity-transition-hover");
      if (scrollTopBtn) scrollTopBtn.classList.remove("opacity-transition-hover");
    } else {
      document.getElementById("navbar").style.top = "-62px";
      if (tocMenu) tocMenu.classList.add("opacity-transition-hover");
      if (scrollTopBtn) scrollTopBtn.classList.add("opacity-transition-hover");
    }
    prevScrollpos = currentScrollPos;

    // scroll indicator
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var progressBar = document.getElementById("progressBar")
    if (progressBar) progressBar.style.width = scrolled + "%";

    //spy title
    var titles = document.querySelectorAll('[spy-title]');
    var tocs = document.querySelectorAll('[spy-toc]');
    titles.forEach(title => {
      var rect = title.getBoundingClientRect();
      if (document.documentElement.clientHeight > rect.top) {
        tocs.forEach(toc => {
          if (title.hash === toc.hash) {
            toc.classList.add("w3-border-bottom", "w3-border-red");
          } else {
            toc.classList.remove("w3-border-bottom", "w3-border-red");
          }
        });
      }
    });
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function gotoBottom() {
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

// Img Modal
function onZoomImg(element) {
  document.getElementById("imgModal").src = element.src;
  document.getElementById("zoomModal").style.display = "block";
}

// audio custom
function openAudioSettings() {
  document.getElementById('audioSettings').style.display = 'block';
}

/**
 * Ưu tiên: Repeat > Next > Random
 * Phần này chỉ xử lý logic uncheck và apply rate, còn đâu ended event đã xử lý audio tiếp theo sẽ là gì...
 */
function onClickApplyAs() {
  var audios = document.getElementsByTagName('audio');
  var asSpeed = document.getElementById('asSpeedSelect');
  var asRepeat = document.getElementById('asRepeatCheck');
  var asRandom = document.getElementById('asRandomCheck');
  var asAutoNext = document.getElementById('asAutoNextCheck');
  if (audios) {
    for (let i = 0; i < audios.length; i++) {
      audios.item(i).playbackRate = asSpeed.value;
      // uncheck repeat
      audios.item(i).loop = false;
    }
    if (asRepeat.checked) {
      asAutoNext.checked = false;
      asRandom.checked = false;
    } else if (asAutoNext.checked) {
      asRandom.checked = false;
    }
  }
  document.getElementById('audioSettings').style.display = 'none';
}

function applyEventsForAudios() {
  var audios = document.getElementsByTagName('audio');
  if (audios) {
    window.audioList = audios;
    window.audiosLength = audios.length;
    for (let i = 0; i < audios.length; i++) {
      if (!window.addedEventListenerFlag) {
        // ended
        audios.item(i).addEventListener('ended', () => {
          console.log('audio ended =>', i);
          handleAudioEnd(audios, i, audios.length);
        });
        // play
        audios.item(i).addEventListener('play', () => {
          console.log('audio play =>', i);
          window.audioCurrentIndex = i;
          handleAudioPlay(audios, i, audios.length);
        });
        // pause
        audios.item(i).addEventListener('pause', () => {
          console.log('audio pause =>', i);
          handleAudioPause(audios, i, audios.length);
        });
      }
    }
    window.addedEventListenerFlag = true;
    window.currentAudioPlaying = audios.item(0);
  }
}

function resetCurrentAudio() {
  if (window.currentAudioPlaying) {
    window.currentAudioPlaying.currentTime = 0;
  }
}

function skipCurrentAudioAndNext() {
  if (window.currentAudioPlaying) {
    window.currentAudioPlaying.currentTime = 0; // reset
    window.currentAudioPlaying.pause(); // pause
    window.currentAudioPlaying = window.audioList.item(forceNext());
    window.currentAudioPlaying.scrollIntoView();
    window.currentAudioPlaying.play();
  }
}

function forceNext() {
  console.log('forceNext => ', window.audioCurrentIndex, window.audiosLength);
  var nextIndex = window.audioCurrentIndex + 1;
  if (nextIndex >= window.audiosLength) {
    nextIndex = 0;
  }
  return nextIndex;
}

function handleAudioEnd(audios, currentIndex, audiosLength) {
  window.currentAudioPlaying = audios.item(getNextAudio(currentIndex, audiosLength));
  window.currentAudioPlaying.scrollIntoView();
  window.currentAudioPlaying.play();
}

function isOdd(num) { return num % 2; }

/**
 * Ưu tiên Repeat > Auto Next > Random
 */
function getNextAudio(currentIndex, audiosLength) {
  var nextIndex = currentIndex + 1;
  if (document.getElementById('asRepeatCheck').checked) {
    return currentIndex;
  }
  if (document.getElementById('asAutoNextCheck').checked) {
    if (nextIndex >= audiosLength) {
      nextIndex = 0;
    }
    // check ItemToItem (even or odd) here
    if (document.getElementById('asPlayItemToItem').checked) {
      if (document.getElementById('asEvenOrOdd').value === 'odd') {
        if (isOdd(nextIndex)) {
          return nextIndex;
        }
        return getNextAudio(nextIndex, audiosLength);
      } else {
        if (!isOdd(nextIndex)) {
          return nextIndex;
        }
        return getNextAudio(nextIndex, audiosLength);
      }
    }
    return nextIndex;
  }
  if (document.getElementById('asRandomCheck').checked) {
    return randomIndex(0, audiosLength);
  }
  return currentIndex;
}

function randomIndex(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}

function onClickGotoCurrentAudio() {
  if (window.currentAudioPlaying) {
    window.currentAudioPlaying.scrollIntoView();
    document.getElementById('audioSettings').style.display = 'none';
  }
}

function onClickShowAudioControl() {
  if (document.getElementById("audioControlGroup")) {
    if (!window.audioControlIsShow) {
      document.getElementById("audioControlGroup").style.display = "block";
      window.audioControlIsShow = true;
    } else {
      document.getElementById("audioControlGroup").style.display = "none";
      window.audioControlIsShow = false;
    }
    document.getElementById('audioSettings').style.display = 'none';
  }
}
function audioControlPlayOrPause() {
  if (window.currentAudioPlaying) {
    if (window.currentAudioStatusIsPlaying) {
      // pause now
      window.currentAudioPlaying.pause();
      // change icon
      changeAudioControlIcon('play_arrow');
    } else {
      // play now
      window.currentAudioPlaying.play();
      // change icon
      changeAudioControlIcon('pause');
    }
  }
}
function audioControlPlus() {
  if (window.currentAudioPlaying) {
    window.currentAudioPlaying.currentTime = window.currentAudioPlaying.currentTime + parseInt(document.getElementById('plusMinusAmount').value);
  }
}
function audioControlMinus() {
  if (window.currentAudioPlaying) {
    window.currentAudioPlaying.currentTime = window.currentAudioPlaying.currentTime - parseInt(document.getElementById('plusMinusAmount').value);
  }
}
function handleAudioPlay(audios, currentIndex, audiosLength) {
  window.currentAudioPlaying = audios.item(currentIndex);
  // update status
  window.currentAudioStatusIsPlaying = true;
  // change icon
  changeAudioControlIcon('pause');
}
function handleAudioPause(audios, currentIndex, audiosLength) {
  // update status
  window.currentAudioStatusIsPlaying = false;
  // change icon
  changeAudioControlIcon('play_arrow');
}
// play_arrow | pause
function changeAudioControlIcon(icon) {
  if (document.getElementById("audioControlEl")) {
    document.getElementById("audioControlEl").innerHTML = icon;
  }
}

// speech (experiment): "articleBody"
function get_content(id) {
  var html = document.getElementById(id).innerHTML;
  return html.replace(/<[^>]*>/g, "");
}
function say(m) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.8;
  msg.text = m;
  msg.lang = document.getElementById('asLangSay').value;
  speechSynthesis.speak(msg);
}

// tabs in articles
function openTab(volumeTxt, activateTxt, deactivateTxt) {
  try {
    var activateId = activateTxt + '-' + volumeTxt;
    var deactivateId = deactivateTxt + '-' + volumeTxt;

    document.getElementById(deactivateId).style.display = "none";
    document.getElementById(deactivateId + '-tab').className = document.getElementById(deactivateId + '-tab').className.replace(" w3-red", "");
    document.getElementById(activateId + '-tab').className = document.getElementById(activateId + '-tab').className.replace(" w3-red", "");

    document.getElementById(activateId).style.display = "block";
    document.getElementById(activateId + '-tab').className += " w3-red";
  } catch (error) {
    console.log(error);
  }
}

function getSelectionText() {
  var text = "";
  var activeEl = document.activeElement;
  var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
  if (
    (activeElTagName == "textarea") || (activeElTagName == "input" &&
    /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
    (typeof activeEl.selectionStart == "number")
  ) {
      text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
  } else if (window.getSelection) {
      text = window.getSelection().toString();
  }
  return text;
}

// BEGIN Konami Code
// var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
// var pattern = ['w', 'w', 's', 's', 'a', 'd', 'a', 'd', 'e', 'r'];
var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'x', 'o'];
var current = 0;

var keyHandler = function (event) {
  // key combinations to call thirdMenu, secondMenu, quickNote
  // ctrlKey, altKey, shiftKey
  try {
    if (event.altKey && event.key === '1') {
      eval(`${document.thirdFuncName}`);
    } else if (event.altKey && event.key === '2') {
      eval(`${document.secondFuncName}`);
    } else if (event.altKey && event.key === '3') {
      eval(openMemo());
    } else if (event.altKey && event.key === '4') {
      eval(openAudioSettings());
    } else if (event.altKey && event.key === '5') {
      eval(toggleMenu());
    }
  } catch (error) {
    console.log(error);
  }

  // BEGIN - if [Q]uery
  if (['q', 'Q'].indexOf(event.key) >= 0) {
    var selectedTxt = getSelectionText();
    if (!selectedTxt) {
      console.log('Empty....');
    } else {
      try {
        performQuiz(selectedTxt);
      } catch (error) {
        console.log(error);        
      }
    }
  }
  // END - if [Q]uery

  // If the key isn't in the pattern, or isn't the current key in the pattern, reset
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }

  // Update how much of the pattern is complete
  current++;

  // If complete, action and reset
  if (pattern.length === current) {
    current = 0;
    try {
      showKNM();
      window.localStorage.setItem('KNM_donghd', true);
    } catch (error) { }
  }

};
function showKNMMobile() {
  showKNM();
  window.localStorage.setItem('KNM_donghd', true);
}
function showKNM() {
  for (let item of document.getElementsByClassName('konamiHide')) {
    item.style.display = 'initial';
  }
  document.getElementById('hat').style.display = 'initial';
}
function removeHat() {
  window.localStorage.setItem('KNM_donghd', '');
  document.getElementById('hat').style.display = 'none';
}

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
// END Konami Code

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    documentReady();
    var randQuote = getQuoteRand();
    document.title = `[${randQuote.author}] ${randQuote.quote}`;
  }
}
function _documentReady_() {
  // now using 'document.onreadystatechange'
}
function toggleElmDisplay(elm, block = "block") {
  try {
    if (elm.style.display === "none") {
      elm.style.display = block;
    } else {
      elm.style.display = "none";
    }
  } catch (error) {}
}
function toggleElmVisibility(elm, visible = "visible") {
  try {
    if (elm.style.visibility === "hidden") {
      elm.style.visibility = visible;
    } else {
      elm.style.visibility = "hidden";
    }
  } catch (error) {}
}
function DHtoast(msg, milisc = 3000) {
  var x = document.getElementById("snackbar");
  x.innerHTML = msg;
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, milisc);
}

function limitString(string, maxLength) {
  if (string.length > maxLength) {
      /* Cut the string and add "..." at the end */
      return string.substring(0, maxLength) + "...";
  }
  return string; /* Return the original string if it's within the limit */
}

// GLSL EDITOR ----------------------------------------------
//  Graph plotter function take from
//  From http://blog.hvidtfeldts.net/index.php/2011/07/plotting-high-frequency-functions-using-a-gpu/
var preFunction = "\n\
#ifdef GL_ES\n\
precision mediump float;\n\
#endif\n\
\n\
#define PI 3.14159265359\n\
\n\
uniform vec2 u_resolution;\n\
uniform vec2 u_mouse;\n\
uniform float u_time;\n\
\n\
float lineJitter = 0.5;\n\
float lineWidth = 7.0;\n\
float gridWidth = 1.7;\n\
float scale = 0.0013;\n\
float zoom = 2.5;\n\
vec2 offset = vec2(0.5);\n\
\n\
float rand (in float _x) {\n\
    return fract(sin(_x)*1e4);\n\
}\n\
\n\
float rand (in vec2 co) {\n\
    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);\n\
}\n\
\n\
float noise (in float _x) {\n\
    float i = floor(_x);\n\
    float f = fract(_x);\n\
    float u = f * f * (3.0 - 2.0 * f);\n\
    return mix(rand(i), rand(i + 1.0), u);\n\
}\n\
\n\
float noise (in vec2 _st) {\n\
    vec2 i = floor(_st);\n\
    vec2 f = fract(_st);\n\
    // Four corners in 2D of a tile\n\
    float a = rand(i);\n\
    float b = rand(i + vec2(1.0, 0.0));\n\
    float c = rand(i + vec2(0.0, 1.0));\n\
    float d = rand(i + vec2(1.0, 1.0));\n\
    vec2 u = f * f * (3.0 - 2.0 * f);\n\
    return mix(a, b, u.x) + \n\
            (c - a)* u.y * (1.0 - u.x) + \n\
            (d - b) * u.x * u.y;\n\
}\n\
\n\
float function(in float x) {\n\
    float y = 0.0;\n";

var postFunction = "\n\
    return y;\n\
}\n\
\n\
vec3 plot2D(in vec2 _st, in float _width ) {\n\
    const float samples = 3.0;\n\
\n\
    vec2 steping = _width*vec2(scale)/samples;\n\
    \n\
    float count = 0.0;\n\
    float mySamples = 0.0;\n\
    for (float i = 0.0; i < samples; i++) {\n\
        for (float j = 0.0;j < samples; j++) {\n\
            if (i*i+j*j>samples*samples) \n\
                continue;\n\
            mySamples++;\n\
            float ii = i + lineJitter*rand(vec2(_st.x+ i*steping.x,_st.y+ j*steping.y));\n\
            float jj = j + lineJitter*rand(vec2(_st.y + i*steping.x,_st.x+ j*steping.y));\n\
            float f = function(_st.x+ ii*steping.x)-(_st.y+ jj*steping.y);\n\
            count += (f>0.) ? 1.0 : -1.0;\n\
        }\n\
    }\n\
    vec3 color = vec3(1.0);\n\
    if (abs(count)!=mySamples)\n\
        color = vec3(abs(float(count))/float(mySamples));\n\
    return color;\n\
}\n\
\n\
vec3 grid2D( in vec2 _st, in float _width ) {\n\
    float axisDetail = _width*scale;\n\
    if (abs(_st.x)<axisDetail || abs(_st.y)<axisDetail) \n\
        return 1.0-vec3(0.65,0.65,1.0);\n\
    if (abs(mod(_st.x,1.0))<axisDetail || abs(mod(_st.y,1.0))<axisDetail) \n\
        return 1.0-vec3(0.80,0.80,1.0);\n\
    if (abs(mod(_st.x,0.25))<axisDetail || abs(mod(_st.y,0.25))<axisDetail) \n\
        return 1.0-vec3(0.95,0.95,1.0);\n\
    return vec3(0.0);\n\
}\n\
\n\
void main(){\n\
    vec2 st = (gl_FragCoord.xy/u_resolution.xy)-offset;\n\
    st.x *= u_resolution.x/u_resolution.y;\n\
\n\
    scale *= zoom;\n\
    st *= zoom;\n\
\n\
    vec3 color = plot2D(st,lineWidth);\n\
    color -= grid2D(st,gridWidth);\n\
\n\
    gl_FragColor = vec4(color,1.0);\n\
}";
var glslEditors = [];
var glslGraphs = [];
function loadGlslElements() {
  // codeAndCanvas
	var ccList = document.querySelectorAll(".codeAndCanvas");
	for(var i = 0; i < ccList.length; i++){
    if (ccList[i].hasAttribute("data")){
      var srcFile = ccList[i].getAttribute("data");
      var editor = new GlslEditor(ccList[i], {
        canvas_size: 250,
        canvas_follow: true,
        canvas_float: 'right',
        theme: 'monokai',
        tooltips: true,
        exportIcon: true
      });
      editor.open(srcFile);
      glslEditors.push(editor);
    }
  }
  
  // simpleFunction
  var sfList = document.querySelectorAll(".simpleFunction");
  for(var i = 0; i < sfList.length; i++){
    if (sfList[i].hasAttribute("data")){
      var srcFile = sfList[i].getAttribute("data");
      glslGraphs.push(new GlslEditor(sfList[i], {
        canvas_width: 800,
        lineNumbers: false,
        canvas_height: 250,
        canvas_follow: true,
        canvas_float: false,
        frag_header: preFunction,
        frag_footer: postFunction,
        tooltips: true
      }).open(srcFile));
    }
  }
}
// GLSL EDITOR ----------------------------------------------
// BEGIN: Flippable flash cards - flip on click ----------------------------------------------
function registerFlipable() {
  document.querySelectorAll(".flip-card").forEach(function(element) {
    element.addEventListener("click", function() {
      this.classList.toggle("flipme");
    });
  });
}
// END: Flippable flash cards - flip on click ----------------------------------------------
