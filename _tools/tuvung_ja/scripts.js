window.addEventListener('beforeunload', () => {
    localStorage.setItem('tuvung_ja_scrollPosition', window.scrollY);
});

window.onload = () => {
    const savedPosition = localStorage.getItem('tuvung_ja_scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, savedPosition);
    }
};

function showHideBtnClick() {
    // ShowOnHold
    const elements = document.querySelectorAll('.ShowOnHold');
    elements.forEach(element => {
        element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
    });
}