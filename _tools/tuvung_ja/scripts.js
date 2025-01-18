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

// đánh dấu HIGHLIGHTED_TEXT bằng JS
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

// tạo thêm một bảng ngắn gọn
function createTableFromShowOnHold(opt) {
    // Tìm bảng gốc
    const oldTable = document.getElementById("dongtu_trainghia");
    if (!oldTable) {
      console.error("Không tìm thấy bảng 'dongtu_trainghia'");
      return;
    }
  
    // Tạo bảng mới
    const newTable = document.createElement("table");
    newTable.id = "new_table";
    // newTable.classList.add("w3-table-all w3-hoverable w3-card-4 w3-section th-orange");
    // newTable.classList.add(["w3-table-all", "w3-hoverable", "w3-card-4", "w3-section", "th-orange"]);
    newTable.classList.add("w3-table-all");
    newTable.classList.add("w3-hoverable");
    newTable.classList.add("w3-card-4");
    newTable.classList.add("w3-section");
    newTable.classList.add("th-orange");
  
    // Tìm phần tử chứa modal
    const modalContent = document.getElementById("modal_content");
    if (!modalContent) {
      console.error("Không tìm thấy phần tử 'modal_content'");
      return;
    }
  
    // Lặp qua các hàng và cột của bảng gốc
    for (let i = 0; i < oldTable.rows.length; i++) {
      const newRow = newTable.insertRow();
      for (let j = 0; j < oldTable.rows[i].cells.length; j++) {
        const cell = oldTable.rows[i].cells[j];
        const showOnHoldElement = cell.querySelector(".ShowOnHold");

        const showOnHoldElements = cell.querySelectorAll(".ShowOnHold");
        const hanvietElement = cell.childNodes[7];
        const hintElement = cell.childNodes[9]; // const hintElement = cell.querySelectorAll("span")[9];
        const hintElement2 = cell.childNodes[8];
        const hintElement3 = cell.childNodes[7];
        const hintElement4 = cell.childNodes[6];

        const newCell = newRow.insertCell();

        switch (opt) {
          case 2:
            // showOnHoldElements.forEach(element => {
            //   newCell.appendChild(element.cloneNode(true));
            //   // newCell.appendChild(element);
            // });
            newCell.appendChild(showOnHoldElements[1].cloneNode(true));
            break;
          case 3:
            if (hanvietElement) {
              newCell.appendChild(hanvietElement.cloneNode(true));
              // newCell.appendChild(hanvietElement);
            }
            showOnHoldElements.forEach(element => {
              newCell.appendChild(element.cloneNode(true));
              // newCell.appendChild(element);
            });
            break;
          case 4:
            newCell.appendChild(showOnHoldElements[0].cloneNode(true));
            if (hintElement) {
              const newSpan = document.createElement("span");
              newSpan.textContent = hintElement.textContent;
              newCell.appendChild(newSpan);
            } else if (hintElement2) {
              const newSpan = document.createElement("span");
              newSpan.textContent = hintElement2.textContent;
              newCell.appendChild(newSpan);
            } else if (hintElement3) {
              const newSpan = document.createElement("span");
              newSpan.textContent = hintElement3.textContent;
              newCell.appendChild(newSpan);
            } else if (hintElement4) {
              const newSpan = document.createElement("span");
              newSpan.textContent = hintElement4.textContent;
              newCell.appendChild(newSpan);
            }
            const cloneElm = showOnHoldElements[1].cloneNode(true);
            cloneElm.style.fontWeight = 'bold';
            newCell.appendChild(cloneElm);
            break;
        
          default:
            if (showOnHoldElement) {
              newCell.textContent = showOnHoldElement.textContent;
            }
            if (hanvietElement) {
              newCell.appendChild(hanvietElement.cloneNode(true));
              // newCell.appendChild(hanvietElement);
            }
            break;
        }
      }
    }
  
    // Thêm bảng mới vào modal
    modalContent.innerHTML = '';
    modalContent.appendChild(newTable);

    // hiển thị modal
    document.getElementById('simpleTableModal').style.display='block';
}