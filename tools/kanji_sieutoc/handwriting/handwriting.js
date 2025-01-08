function recognizeWithDebounce() {
    if (window.recognizeTimmer) {
        clearTimeout(window.recognizeTimmer);
    }
    window.recognizeTimmer = setTimeout(() => {
        recognizeClick();
    }, 1000);
}
// document.getElementById('can')?.addEventListener("mouseup", function (e) {
//     KanjiCanvas.findxy('up', e, 'can');
//     recognizeWithDebounce();
// }, false);
function recognizeClick() {
    // move current to history
    document.getElementById('historyList').innerHTML = handleOutStr(document.recognizeOutStr);
    document.recognizeOutStr = KanjiCanvas.recognize('can');
    // update candidate list
    document.getElementById('candidateList').innerHTML = handleOutStr(document.recognizeOutStr);
}
function eraseClick() {
    // document.getElementById('historyList').innerHTML = '';
    KanjiCanvas.erase('can');
}
function kanjiRecognizeSpanClick(catGroupStr) {
    renderMainContent(catGroupStr);
}

function handleOutStr(str) {
    if (str) {
        const words = str.split(' ');
        const wrappedWords = words.map(word => {
            return word.trim();
        }).map(word => {
            return matchKanjiOut(word);
        });
        return wrappedWords.join(' ');
    }
    return '';
}
function matchKanjiOut(kanjiStr) {
    const outMatching = handwritingMatchDict[kanjiStr];
    return outMatching ? outMatching.toolTipHTML : kanjiStr;
}
function initPlus() {
    /* Fix Ratio Viewport issue */
    const can = document.getElementById('can');
    const rect = can.getBoundingClientRect();
    console.log(rect.width, rect.height);

    can.width = rect.width;
    can.height = rect.height;
    KanjiCanvas.init('can');
    // KanjiCanvas["w_can"] = rect.width;
    // KanjiCanvas["h_can"] = rect.height;
}