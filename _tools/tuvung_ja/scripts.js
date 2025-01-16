window.addEventListener('beforeunload', () => {
    localStorage.setItem('tuvung_ja_scrollPosition', window.scrollY);
});

window.onload = () => {
    const savedPosition = localStorage.getItem('tuvung_ja_scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, savedPosition);
    }
    setBackgroundColorForShowOnHold();
};

function showHideBtnClick() {
    // ShowOnHold
    const elements = document.querySelectorAll('.ShowOnHold');
    elements.forEach(element => {
        element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
    });
}

function setBackgroundColorForShowOnHold() {
    // Giả sử bảng của bạn có ID là "myTable"
    // const table = document.querySelector('body > div.w3-content.w3-panel.w3-animate-opacity-slow > main > div.w3-section > table');
    // dongtu_trainghia
    const table = document.getElementById("dongtu_trainghia");
  
    // Lấy tất cả các ô <td> trong bảng
    const cells = table.querySelectorAll("td");
  
    // Lặp qua từng ô
    cells.forEach(cell => {
      // Tìm phần tử con có class "ShowOnHold" đầu tiên
      const showOnHoldElement = cell.querySelector(".ShowOnHold");
  
      // Nếu tìm thấy, đặt màu nền
      if (showOnHoldElement) {
        showOnHoldElement.style.backgroundColor = "yellow";
      }
    });
}