//---------------------- Main Content: Begin ---------------------------//
/* Utils */
function getXHR() {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
}
function createStateChangeListener(xhr, callback) {
    return function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                callback(null, JSON.parse(xhr.responseText))
            } catch (err) {
                callback(err, null)
            }
        }
    }
}
function load(location, callback) {
    const xhr = getXHR()
    xhr.open('GET', location, true)
    xhr.onreadystatechange = createStateChangeListener(xhr, callback)
    xhr.send()
}
var _$JSONLoader = {
    load: load
}

const btnHTML = `
<span class="material-icons w3-button w3-border w3-border-blue" onclick="preMainContent()" title="Next">skip_previous</span>
<span class="material-icons w3-button w3-border w3-border-blue" onclick="nextMainContent()" title="Next">skip_next</span>
`

/* Danh sách các Dữ liệu */
const dataSet = {};
const handwritingMatchDict = {};
let menuData = [];
let tableData = [];
let activeItemMenu = null;

const currentCatGroup_KEY = 'DongHD_Kanji_currentCatGroup';
let currentCatGroup = localStorage.getItem(currentCatGroup_KEY);

/* Hàm render danh sách menu */
function renderLeftSidebar(data) {
    const leftSidebar = document.getElementById("leftSidebar");
    leftSidebar.innerHTML = "";
    data.forEach(item => {
        const menuItem = document.createElement("div");
        if (currentCatGroup === item) {
            activeItemMenu = menuItem.classList.add('menu-item-active');
        } else {
            menuItem.classList.add('menu-item');
        }
        let groupMeta = dataSet[item]['groupMeta'];
        menuItem.classList.add(`${groupMeta.BookNo}`);
        menuItem.textContent = `[${groupMeta.No}] ${groupMeta.GroupKJ} (${groupMeta.GroupHV} - ${groupMeta.GroupVN})`;
        leftSidebar.appendChild(menuItem);
        menuItem.addEventListener("click", () => renderMainContent(item));
    });

    if (activeItemMenu) {
        // activeItemMenu.scrollIntoView();
        scrollToElm(activeItemMenu);
    }
}
function scrollToElm(elm){
    // var topPos = document.getElementById('leftSidebar').offsetTop;
    // elm.scrollTop = topPos-10;

    // const innerDivPos = document.querySelector('#leftSidebar > div:nth-child(1)').offsetTop;
    // elm.scrollTo({ top: innerDivPos, behavior: 'smooth' })
    
    const innerDivPos = elm.offsetTop;
    document.getElementById('leftSidebar').scrollTo({ top: innerDivPos, behavior: 'smooth' })
}

/* Hàm render bảng dữ liệu */
function renderMainContent(CatGroup) {
    currentCatGroup = CatGroup;
    localStorage.setItem(currentCatGroup_KEY, currentCatGroup);

    /* Set title */
    let _groupMeta = dataSet[CatGroup]['groupMeta'];
    // document.getElementById('currentGroupTitle').textContent = `[${_groupMeta.BookNo}][${_groupMeta.Page}] ${_groupMeta.GroupKJ} <b>(${_groupMeta.GroupHV} - ${_groupMeta.GroupVN})</b>`;
    document.getElementById('currentGroupTitle').innerHTML = `[${_groupMeta.BookNo}][${_groupMeta.Page}] ${_groupMeta.GroupKJ} (<span class="ShowOnHoldContainer" onclick="toggleVisibilityChildren(this)"><span class="ShowOnHold">${_groupMeta.GroupHV} - ${_groupMeta.GroupVN}</span></span>)`;

    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headers = ["Kanji", "HanViet", "Vietnamese", "Typing", "Hiragana", "HintRemember"];

    /* Tạo header */
    // const headerRow = document.createElement("tr");
    // headers.forEach(headerText => {
    //     const th = document.createElement("th");
    //     th.textContent = headerText;
    //     headerRow.appendChild(th);
    // });
    // thead.appendChild(headerRow);

    /* Tạo các hàng dữ liệu */
    tableData = dataSet[CatGroup]['objList'];
    tableData.forEach(rowData => {
        const row = document.createElement("tr");
        headers.forEach(header => {
            const cell = document.createElement("td");
            cell.classList.add(`main-td-${header}`);
            if (header == 'Typing' || header == 'Hiragana') {
                cell.style.display = 'none';
            }
            // cell.textContent = rowData[header];
            if (header !== 'Kanji') {
                cell.innerHTML = `<span class="ShowOnHoldContainer" onclick="toggleVisibilityChildren(this)"><span class="ShowOnHold">${rowData[header]}</span></span>`;
            } else {
                cell.textContent = rowData[header];
            }
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    mainContent.appendChild(table);

    // thêm button Pre + Next
    const btnElm = document.createElement("div");
    btnElm.classList.add('w3-panel');
    btnElm.innerHTML = btnHTML;
    mainContent.appendChild(btnElm);
    
    renderLeftSidebar(menuData); // re-make left sidebar for new active item
}

/* Khởi tạo ban đầu */
_$JSONLoader.load('/tools/kanji_sieutoc/MERGE_ALL_KANJI.json', function (err, json) {
    if (err) {
        throwError('failed to get JSON (/tools/kanji_sieutoc/MERGE_ALL_KANJI.json)')
    }
    json.forEach(obj => {
        if (dataSet[obj.CatGroup]) {
            dataSet[obj.CatGroup]['objList'].push(obj);
        } else {
            let _tmpObj = {
                groupMeta: obj,
                objList: [obj]
            };
            dataSet[obj.CatGroup] = _tmpObj;
        }

        // add for handwriting match
        const toolTipStr = `${obj.HanViet} (${obj.Vietnamese}) ${obj.HintRemember}`;
        const toolTipHTML = `<span class="tooltip" onclick="kanjiRecognizeSpanClick('${obj.CatGroup}')">${obj.Kanji}<span class="tooltiptext">${toolTipStr}</span></span>`;
        handwritingMatchDict[obj.Kanji] = {
            toolTipStr: toolTipStr,
            toolTipHTML: toolTipHTML,
            objItem: [obj]
        };
    });
    // console.log(dataSet);
    menuData = Object.keys(dataSet);
    // console.log(menuData);
    renderLeftSidebar(menuData);

    if (currentCatGroup) {
        renderMainContent(currentCatGroup);
    } else {
        renderMainContent(menuData[0]);
    }

    // set quiz data
    initQuizData(json);
})

function toggleDisplay(className) {
    var cols = document.getElementsByClassName(className);
    for(i = 0; i < cols.length; i++) {
        let _elm = cols[i];
      if (_elm.style.display) {
        _elm.style.display = '';
        if (className === 'main-td-HintRemember') {
            document.needToCallToggleExceptKanjiNext = false;
        }
      } else {
        _elm.style.display = 'none';
        if (className === 'main-td-HintRemember') {
            document.needToCallToggleExceptKanjiNext = true;
        }
      }
    }
}
function toggleTypingAndOnKun() {
    toggleDisplay('main-td-Typing');
    toggleDisplay('main-td-Hiragana');
}
function toggleExceptKanji() {
    /* ["Kanji", "HanViet", "Vietnamese", "Typing", "Hiragana", "HintRemember"] */
    // toggleDisplay('main-td-Typing');
    // toggleDisplay('main-td-Hiragana');

    // optionCheckboxHanViet | optionCheckboxMeaning
    const optionCheckboxHanViet = document.getElementById('optionCheckboxHanViet').checked;
    const optionCheckboxMeaning = document.getElementById('optionCheckboxMeaning').checked;

    if (! optionCheckboxHanViet) {
        toggleDisplay('main-td-HanViet');
    }
    if (! optionCheckboxMeaning) {
        toggleDisplay('main-td-Vietnamese');
    }
    toggleDisplay('main-td-HintRemember');
}
function nextMainContent() {
    let currentIndex = menuData.indexOf(currentCatGroup);
    ++currentIndex;
    if (currentIndex < menuData.length) {
        renderMainContent(menuData[currentIndex]);
    } else {
        renderMainContent(menuData[0]);
    }

    // check and call toggleExceptKanji();
    try {
        if (document.needToCallToggleExceptKanjiNext) {
            toggleExceptKanji();
        }
        topFunction('currentGroupTitle'); // Go To 'currentGroupTitle' element
    } catch (error) {
        console.log(error);
    }
}
function preMainContent() {
    let currentIndex = menuData.indexOf(currentCatGroup);
    --currentIndex;
    if (currentIndex < 0) {
        renderMainContent(menuData[menuData.length - 1]);
    } else {
        renderMainContent(menuData[currentIndex]);
    }

    // check and call toggleExceptKanji();
    try {
        if (document.needToCallToggleExceptKanjiNext) {
            toggleExceptKanji();
        }
        topFunction(); // Go To Top
    } catch (error) {
        console.log(error);
    }
}

//---------------------- Main Content: End ---------------------------//

//---------------------- QUIZ: Begin ---------------------------//
let quizIsPlaying = false; // Auto Play

let quizMinNo = 1;
let quizMaxNo = 2511;
const quizPauseIcon = 'pause';
const quizPlayIcon = 'play_arrow';

const currentQuizNo_KEY = 'DongHD_Quiz_currentNo';
let quizCurrentNo = localStorage.getItem(currentQuizNo_KEY);
quizCurrentNo = quizCurrentNo ? Number(quizCurrentNo) : 1;

const quizKanjiTxtElm = document.getElementById('quizKanjiTxtId');
const quizTypingHiraganaTxtElm = document.getElementById('quizTypingHiraganaTxtId');
const quizHanVietAndMeaningTxtElm = document.getElementById('quizHanVietAndMeaningTxtId');
const quizGroupIndicatorTxtElm = document.getElementById('quizGroupIndicatorTxtId');
const quizHintRememberTxtElm = document.getElementById('quizHintRememberTxtId');

const quizPlayOrPauseBtnIconElm = document.getElementById('quizPlayOrPauseBtnIcon');

const quizIntervalDelayInput = document.getElementById('quizIntervalDelay');
const quizCurrentNoIndicatorInput = document.getElementById('quizCurrentNoIndicator');

const quizFromNoInput = document.getElementById('quizFromNo');
const quizToNoInput = document.getElementById('quizToNo');

quizPlayOrPauseBtnIcon

const quizDataSet = {};
let currentItemQuiz = {};

function getUpdatedMinMax() {
    quizMinNo = quizFromNoInput.value ? quizFromNoInput.value : 1;
    quizMaxNo = quizToNoInput.value ? quizToNoInput.value : 2511;
}
eval(getUpdatedMinMax());

// Sample data for options
var optData = [
    // { optionTxt: "Option 01", optionVal: { fromVal: "value1", toVal: "value2" } },
    // { optionTxt: "Option 02", optionVal: { fromVal: "value3", toVal: "value4" } }
    // Add more options here if needed
];
// Function to append options to the select tag
function appendOptions() {
    var select = document.getElementById("mySelect");
    for (var i = 0; i < optData.length; i++) {
        var option = document.createElement("option");
        option.value = JSON.stringify(optData[i].optionVal);
        option.text = optData[i].optionTxt;
        select.appendChild(option);
    }
}
_$JSONLoader.load('/tools/kanji_sieutoc/list_page.json', function (err, json) {
    if (err) {
        throwError('failed to get JSON (/tools/kanji_sieutoc/list_page.json)')
    }
    optData = json;
    // Call the function to append options
    appendOptions();
});

// Function to handle option change
function onChangeOpt() {
    var select = document.getElementById("mySelect");
    var selectedOption = select.options[select.selectedIndex];
    var optionTxt = selectedOption.text;
    var optionVal = JSON.parse(selectedOption.value);

    // Example: Log the selected option text and value
    console.log("Selected option text:", optionTxt);
    console.log("Selected option value:", optionVal);
    quizFromNoInput.value = optionVal.fromVal;
    quizToNoInput.value = optionVal.toVal;
    getUpdatedMinMax();
}

function initQuizData(jsonData) {
    jsonData.forEach(obj => {
        quizDataSet[obj.No] = obj;
    });

    // init display
    currentItemQuiz = quizDataSet[quizCurrentNo];
    displayContentQuiz();
    setNoIndicator(quizCurrentNo);
}
function displayContentQuiz() {
    quizKanjiTxtElm.textContent = currentItemQuiz.Kanji;
    quizTypingHiraganaTxtElm.textContent = `${currentItemQuiz.Typing} (${currentItemQuiz.Hiragana})`;
    quizGroupIndicatorTxtElm.textContent = `[GROUP: ${currentItemQuiz.GroupKJ} ${currentItemQuiz.GroupHV} ${currentItemQuiz.GroupVN}]`;
    quizHanVietAndMeaningTxtElm.textContent = `${currentItemQuiz.HanViet} - ${currentItemQuiz.Vietnamese}`;
    quizHintRememberTxtElm.textContent = `[${quizCurrentNo}] ${currentItemQuiz.HintRemember}`;
}
function quizPreItem() {
    getUpdatedMinMax();

    --quizCurrentNo;
    quizCurrentNo = quizCurrentNo < quizMinNo ? quizMaxNo : quizCurrentNo;
    currentItemQuiz = quizDataSet[quizCurrentNo];
    displayContentQuiz();
    localStorage.setItem(currentQuizNo_KEY, quizCurrentNo);
    setNoIndicator(quizCurrentNo);
}
function quizNextItem() {
    getUpdatedMinMax();

    ++quizCurrentNo;
    quizCurrentNo = quizCurrentNo > quizMaxNo ? quizMinNo : quizCurrentNo;
    currentItemQuiz = quizDataSet[quizCurrentNo];
    displayContentQuiz();
    localStorage.setItem(currentQuizNo_KEY, quizCurrentNo);
    setNoIndicator(quizCurrentNo);
}

let quizIntervIdRef = undefined;
let quizProgressFlag = 0;
function quizPlayOrPause() {
    // đổi trạng thái và icon (play_arrow | pause)
    quizIsPlaying = !quizIsPlaying;
    quizPlayOrPauseBtnIconElm.textContent = quizIsPlaying ? quizPauseIcon : quizPlayIcon;

    // thiết lập ẩn hiện
    toggleQuizItemDisplay(); // chắc chắn sẽ HIDE khi bắt đầu play

    // Interval
    clearInterval(quizIntervIdRef);
    if (quizIsPlaying) {
        let quizIntervalDelayInputValue = quizIntervalDelayInput.value;
        quizIntervalDelayInputValue = quizIntervalDelayInputValue ? quizIntervalDelayInputValue : 1000;
        quizIntervIdRef = setInterval(() => {
            ++quizProgressFlag;
            switch (quizProgressFlag) {
                // sử dụng 'visibility' thay vì 'display' để giữ chỗ...
                case 1:
                    quizTypingHiraganaTxtElm.style.visibility = ''; // show
                    break;
                case 2:
                    quizGroupIndicatorTxtElm.style.visibility = ''; // show
                    break;
                case 3:
                    quizHanVietAndMeaningTxtElm.style.visibility = ''; // show
                    break;
                case 4:
                    quizHintRememberTxtElm.style.visibility = ''; // show
                    break;
                case 5:
                    // do nothing
                    break;
                case 6:
                    quizProgressFlag = 0; // reset
                    quizNextItem(); // next
                    toggleQuizItemDisplay(); // HIDE on next
                    break;
            
                default:
                    break;
            }
        }, quizIntervalDelayInputValue);
    } else {
        // reset progress
        quizProgressFlag = 0;
        // sử dụng 'visibility' thay vì 'display' để giữ chỗ...
        quizTypingHiraganaTxtElm.style.visibility = ''; // show
        quizGroupIndicatorTxtElm.style.visibility = ''; // show
        quizHanVietAndMeaningTxtElm.style.visibility = ''; // show
        quizHintRememberTxtElm.style.visibility = ''; // show
    }
}
function toggleQuizItemDisplay() {
    toggleDisplayElement(quizTypingHiraganaTxtElm);
    toggleDisplayElement(quizGroupIndicatorTxtElm);
    toggleDisplayElement(quizHanVietAndMeaningTxtElm);
    toggleDisplayElement(quizHintRememberTxtElm);
}
function toggleDisplayElement(elm) {
    // sử dụng 'visibility' thay vì 'display' để giữ chỗ...
    if (elm.style.visibility) {
        // elm.style.display = '';
        elm.style.visibility = '';
    } else {
        // elm.style.display = 'none';
        elm.style.visibility = 'hidden';
    }
}
function setNoIndicator(num) {
    quizCurrentNoIndicatorInput.value = num;
}
function goToNoClicked() {
    let num = quizCurrentNoIndicatorInput.value;
    quizCurrentNo = num;
    currentItemQuiz = quizDataSet[quizCurrentNo];
    displayContentQuiz();
    localStorage.setItem(currentQuizNo_KEY, quizCurrentNo);
}
//---------------------- QUIZ: End ---------------------------//

//---------------------- Push Notification: Begin ---------------------------//
function registerPushNotification() {
    // Request desktop notifications permission on page load
    if (!Notification) {
      console.log('Desktop notifications are not available in your browser.');
      return;
    }
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
}
function showNotification(titleStr, bodyStr, imageUrl) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      const options = {
        body: bodyStr,
        dir: 'ltr',
        image: imageUrl,
      };
      const notification = new Notification(titleStr, options);

      notification.onclick = function () {
        // clicked...
        try {
            notiPlayOrPause(); // turn off...
        } catch (error) {
            console.log(error);
        }
      };
    }
}
function randNum(min = 1, max = 2511) {
    return Math.floor(Math.random() * (max - min) + min);
}
const notificationElms = document.getElementById('notificationElms');
function toggleNotificationElms() {
    if (notificationElms.style.display) {
        notificationElms.style.display = '';
    } else {
        notificationElms.style.display = 'none';
    }
}

const notiKanjiTxtElm = document.getElementById('notiKanjiTxtId');
const notiTypingHiraganaTxtElm = document.getElementById('notiTypingHiraganaTxtId');
const notiGroupIndicatorTxtElm = document.getElementById('notiGroupIndicatorTxtId');
const notiHanVietAndMeaningTxtElm = document.getElementById('notiHanVietAndMeaningTxtId');
const notiHintRememberTxtElm = document.getElementById('notiHintRememberTxtId');

const notiPlayOrPauseBtnIconElm = document.getElementById('notiPlayOrPauseBtnIcon');

const notiIntervalDelayInput = document.getElementById('notiIntervalDelay');
const notiCountIndicatorElm = document.getElementById('notiCountIndicator');

const notiKanjiIndicatorElm = document.getElementById('notiKanjiIndicator');

let currentNoNoti = 1;
let notificationCount = 0;
let currentItemNoti;

function displayContentNotification() {
    if (currentItemNoti) {
        notiKanjiTxtElm.textContent = currentItemNoti.Kanji;
        notiTypingHiraganaTxtElm.textContent = `${currentItemNoti.Typing} (${currentItemNoti.Hiragana})`;
        notiGroupIndicatorTxtElm.textContent = `[GROUP: ${currentItemNoti.GroupKJ} ${currentItemNoti.GroupHV} ${currentItemNoti.GroupVN}]`;
        notiHanVietAndMeaningTxtElm.textContent = `${currentItemNoti.HanViet} - ${currentItemNoti.Vietnamese}`;
        notiHintRememberTxtElm.textContent = `[${currentNoNoti}] ${currentItemNoti.HintRemember}`;
    
        notiCountIndicatorElm.textContent = `${notificationCount}`;
        notiKanjiIndicatorElm.textContent = currentItemNoti.Kanji;
    }
}

let notiIntervIdRef;
let notiIsPlaying = false;
function notiPlayOrPause() {
    // đổi trạng thái và icon (play_arrow | pause)
    notiIsPlaying = !notiIsPlaying;
    notiPlayOrPauseBtnIconElm.textContent = notiIsPlaying ? quizPauseIcon : quizPlayIcon;

    // Interval
    clearInterval(notiIntervIdRef);
    if (notiIsPlaying) {
        let notiIntervalDelayInputValue = notiIntervalDelayInput.value;
        notiIntervalDelayInputValue = notiIntervalDelayInputValue ? notiIntervalDelayInputValue : 1800000;
        notiIntervIdRef = setInterval(() => {
            pushNow();
        }, notiIntervalDelayInputValue);
    }
}
function pushNow() {
    // random item
    ++notificationCount;
    currentNoNoti = randNum();
    currentItemNoti = quizDataSet[currentNoNoti];
    displayContentNotification();
    // push
    showNotification(
        `[${currentNoNoti}] ${currentItemNoti.HintRemember}`,
        `${currentItemNoti.Kanji} (${currentItemNoti.HanViet} - ${currentItemNoti.Vietnamese}) ${currentItemNoti.Typing} (${currentItemNoti.Hiragana})`
    );
}
//---------------------- Push Notification: End ---------------------------//

function showHideBtnClick() {
    // ShowOnHold
    const elements = document.querySelectorAll('.ShowOnHold');
    elements.forEach(element => {
        element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
    });
}