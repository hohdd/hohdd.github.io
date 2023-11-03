function toggleContentForChallenge() {
    var bothuDiv = document.getElementById('boThu214Modal');
    var trHTMLCollection = bothuDiv.getElementsByTagName('tr');
    for (let tr of trHTMLCollection) {
        try {
            toggleElmVisibility(tr.childNodes[0]);
        } catch (error) {
            console.log(error);
        }
        try {
            toggleElmVisibility(tr.childNodes[2]);
        } catch (error) {
            console.log(error);
        }
        try {
            toggleElmVisibility(tr.childNodes[3]);
        } catch (error) {
            console.log(error);
        }
    }
}