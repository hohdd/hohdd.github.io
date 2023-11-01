function toggleContentForChallenge() {
    var bothuDiv = document.getElementById('boThu214Modal');
    var trHTMLCollection = bothuDiv.getElementsByTagName('tr');
    for (let tr of trHTMLCollection) {
        try {
            toggleElmDisplay(tr.childNodes[2], 'table-cell');
        } catch (error) {}
        try {
            toggleElmDisplay(tr.childNodes[3], 'table-cell');
        } catch (error) {}
    }
}