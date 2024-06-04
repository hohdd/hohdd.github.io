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
    document.getElementById('currentGroupTitle').textContent = `[${_groupMeta.BookNo}][${_groupMeta.Page}] ${_groupMeta.GroupKJ} (${_groupMeta.GroupHV} - ${_groupMeta.GroupVN})`;

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
            cell.textContent = rowData[header];
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
})

function toggleDisplay(className) {
    var cols = document.getElementsByClassName(className);
    for(i = 0; i < cols.length; i++) {
        let _elm = cols[i];
      if (_elm.style.display) {
        _elm.style.display = '';
      } else {
        _elm.style.display = 'none';
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

    toggleDisplay('main-td-HanViet');
    toggleDisplay('main-td-Vietnamese');
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
}
function preMainContent() {
    let currentIndex = menuData.indexOf(currentCatGroup);
    --currentIndex;
    if (currentIndex < 0) {
        renderMainContent(menuData[menuData.length - 1]);
    } else {
        renderMainContent(menuData[currentIndex]);
    }
}