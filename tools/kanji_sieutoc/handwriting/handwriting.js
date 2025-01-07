function recognizeWithDebounce() {
    if (window.recognizeTimmer) {
        clearTimeout(window.recognizeTimmer);
    }
    window.recognizeTimmer = setTimeout(() => {
        recognizeClick();
    }, 1000);
}
document.getElementById('can')?.addEventListener("mouseup", function (e) {
    KanjiCanvas.findxy('up', e, 'can');
    recognizeWithDebounce();
}, false);
function recognizeClick() {
    const outStr = KanjiCanvas.recognize('can');
    document.getElementById('candidateList').innerHTML = handleOutStr(outStr);
}

function handleOutStr(str) {
    const words = str.split(' ');
    const wrappedWords = words.map(word => {
        return word.trim();
    }).map(word => {
        return matchKanjiOut(word);
    });
    return wrappedWords.join(' ');
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