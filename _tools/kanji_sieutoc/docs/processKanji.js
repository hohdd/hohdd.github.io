/*
    NOTE:
        - File kanji_bank_1.json và kanji_bank_2.json được lấy nguyên gốc của "Từ Điển Hán Nôm"
        - Kết hợp với dữ liệu từ MERGE_ALL_KANJI.json
        - Cần kết hợp cả dữ liệu của MimiKara và Tự ĐT-Tha ĐT
    RESULT:
        - out_vn_DongHD_20240514.zip là output sẵn sàng sử dụng trong Yomitan
        - out_vn_ORIGINAL.zip là nguyên gốc của "Từ Điển Hán Nôm"
        - out_en.zip là nguyên gốc của out_en trong "KanjiDictVN" (Gitlab)
    CẤU TRÚC DỮ LIỆU:
        [
            [
                "㝡",
                "tối",
                "",
                "",
                [],
                {
                    "Strokes": "11",
                    "Radical": "miên 宀 (+8 nét)",
                    "PenStrokes": "丶丶フ一丨丨一一一フ丶",
                    "Shape": "⿱宀取",
                    "Unicode": "U+3761"
                }
            ],
            [...]
            ...
        ]
        -------
         {
            "BookNo": "Book01",
            "Page": "No70-119",
            "No": 83,
            "CatGroup": "HN01_03",
            "GroupKJ": "月",
            "GroupHV": "NGUYỆT",
            "GroupVN": "mặt trăng",
            "Kanji": "謂",
            "Typing": "いわく",
            "Hiragana": "iwaku",
            "HanViet": "VỊ",
            "Vietnamese": "gọi là",
            "HintRemember": "bác sỹ NÓI về bệnh DẠ DÀY GỌI LÀ chuẩn đoán"
        }
*/

/* ----- Utils ----- */
var _$JSONLoader = {
    load: load
}
function getXHR() {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
}
function load(location, callback) {
    const xhr = getXHR()
    xhr.open('GET', location, true)
    xhr.onreadystatechange = createStateChangeListener(xhr, callback)
    xhr.send()
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
/* ----- END Utils ----- */

/* ----- Khai báo biến ----- */
let hacknaoData;
let kanjiBank;
const dataSetHN = {};
const exceptKanji = [];

/* ----- Functions ----- */
function handleKanjiBank() {
    _$JSONLoader.load('/tools/kanji_sieutoc/docs/kanji_bank_1.json', function (err1, json1) {
        if (err1) {
            console.error('failed to get JSON (kanji_bank_X.json)');
        }
        kanjiBank = json1;
        console.log('-------kanjiBank-------');
        console.log(kanjiBank);
        console.log('==================');
        console.log('[kanjiBank is done...]');

        // await
        setTimeout(() => {
            handleKanjiHN();
        }, 2000);
    });
}

function handleKanjiHN() {
    _$JSONLoader.load('/tools/kanji_sieutoc/MERGE_ALL_KANJI.json', function (err2, json2) {
        if (err2) {
            console.error('failed to get JSON (MERGE_ALL_KANJI.json)');
        }
        hacknaoData = json2;
        console.log('-------hacknaoData-------');
        console.log(hacknaoData);
        console.log('==================');
        console.log('[hacknaoData is done...]');

        setTimeout(() => {
            handleDataAfterFetching();
        }, 2000);
    });
}

function handleDataAfterFetching() {
    // thu thập vào dataSet
    hacknaoData.forEach(obj => {
        if (dataSetHN[obj.CatGroup]) {
            // append
            dataSetHN[obj.CatGroup]['objList'].push(obj);
        } else {
            // init
            dataSetHN[obj.CatGroup] = {
                groupMeta: obj,
                objList: [obj]
            }
        }
    });

    // await
    // duyệt hacknaoData rồi sửa kanjiBank
    console.log('[forEach...]');
    hacknaoData.forEach(objHN => {
        kanjiBank.forEach(objKanjiBank => {
            if (objHN['Kanji'] === objKanjiBank[0]) {
                // Tag (on-kun)
                objKanjiBank[3] = 'DongHD';

                // Meaning
                objKanjiBank[4].unshift('-----');
                objKanjiBank[4].unshift(`${objHN['HintRemember']}`);
                // if (objKanjiBank[5]['Shape']) {
                //     objKanjiBank[4].unshift(`[${objKanjiBank[5]['Shape']}][${objHN['Typing']} - ${objHN['Hiragana']}]`);
                // } else {
                //     objKanjiBank[4].unshift(`[${objHN['Typing']} - ${objHN['Hiragana']}]`);
                // }
                objKanjiBank[4].unshift(`${objHN['HanViet']} (${objHN['Vietnamese']}) [${objHN['No']} - ${objHN['Kanji']}]`);

                // objKanjiBank[4].push(`No: ${objHN['No']} - ${objHN['Kanji']}`);
                // objKanjiBank[4].push(`${objKanjiBank[5]['Shape']}`);
                // objKanjiBank[4].push(`${objHN['HanViet']} (${objHN['Vietnamese']})`);
                // objKanjiBank[4].push(`${objHN['Typing']} - ${objHN['Hiragana']}`);
                // objKanjiBank[4].push(`${objHN['HintRemember']}`);
                objKanjiBank[4].push('-----');
                objKanjiBank[4].push(`${getFamily(objHN['CatGroup'])}`);

                // Statistics.PenStrokes
                // objKanjiBank[5]['PenStrokes'] = objHN['HintRemember'];
            }
        });
    });

    const rs = JSON.stringify(kanjiBank);
    navigator.clipboard.writeText(rs);
    document.getElementById("myTextarea").value = rs;
    console.log('[Done!]');
}

// it may take about 30 minutes to finish
function processNow() {
    console.log('[Doing...]');
    handleKanjiBank(); // Vi chạy trên browser nên có thể lỗi out of memory và crash chrome > chuyển qua Edge
}

function getFamily(CatGroup) { // return string
    let _tmp = '';
    objList = dataSetHN[CatGroup]['objList'];
    objList.forEach(obj => {
        _tmp += `${obj['Kanji']} (${obj['HanViet']}-${obj['Vietnamese']}) `;
    });
    return _tmp;
}

/*/////// File.md ---------------------------------------------
<link rel="stylesheet" href="/tools/kanji_sieutoc/kanji.css" />

<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16" id="currentGroupTitle"></div>

<div class="container">
    <div class="left-sidebar scrollable" id="leftSidebar">
        <!-- Danh sách menu sẽ được tạo bằng JavaScript -->
    </div>
    <div class="main-content scrollable" id="mainContent">
        <!-- Bảng dữ liệu sẽ được tạo bằng JavaScript -->
    </div>
</div>

<script src="/tools/kanji_sieutoc/docs/processKanji.js" type="text/javascript"></script>

<textarea id="myTextarea"></textarea>
<button onclick="processNow()">processNow</button>
---------------------------------------------------------------*/