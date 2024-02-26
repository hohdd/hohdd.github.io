// Util add Menu to Glsl Editor
function addElementOnly(container, elmHTML) {
    let el = document.createElement('span');
    el.innerHTML = elmHTML;
    if (container) {
        container.appendChild(el);
    }
  }
  function addMenuItem(container, className, name, onClick, elmHTML) {
    this.el = document.createElement('li');
    this.button = document.createElement('button');
    this.button.className = className + '_button';
    this.el.appendChild(this.button);
    this.el.setAttribute('class', className);
    this.button.innerHTML = name;

    if (elmHTML) {
      addElementOnly(this.el, elmHTML);
    }

    this.button.addEventListener('click', onClick, true);

    if (container) {
        container.appendChild(this.el);
    }
}

// Drawer Menu
function openDrawerMenu() {
    document.getElementById("myDrawer").classList.add("active");
    populateItems();
}
function closeDrawerMenu() {
    document.getElementById("myDrawer").classList.remove("active");
}
function SetContent(src) {
    if (src) {
        console.log("Selected item SRC:", src);
        window.glslEditor.new();
        window.glslEditor.open(src);
        closeDrawerMenu();
    }
}
function limitString(string, maxLength) {
    if (string.length > maxLength) {
        /* Cut the string and add "..." at the end */
        return string.substring(0, maxLength) + "...";
    }
    return string; /* Return the original string if it's within the limit */
}
function populateItems() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    // itemsList.forEach(item => {
    //     const li = document.createElement("li");
    //     li.classList.add('hvr-forward');
    //     li.style = 'display: block;';
    //     li.innerHTML = `
    //     <h3>${ limitString(item.title, 25) }</h3>
    //     <p>${ limitString(item.description, 100) }</p>
    //   `;
    //     li.onclick = () => SetContent(item.src);
    //     itemList.appendChild(li);
    // });
    let currentGroup = null;
    itemsList.forEach(item => {
        if (item.group !== currentGroup) {
            const groupTitle = document.createElement("li");
            groupTitle.classList.add("group-title");
            // groupTitle.textContent = limitString(item.group, 20);
            groupTitle.innerHTML = `<p>${limitString(item.group, 20)}</p>`;
            itemList.appendChild(groupTitle);
            currentGroup = item.group;
        }
        const li = document.createElement("li");
        li.innerHTML = `
            <h4>${limitString(item.title, 25)}</h4>
            <p>${limitString(item.description, 100)}</p>
        `;
        li.onclick = () => SetContent(item.src);
        itemList.appendChild(li);
    });
}
function filterItems() {
    const searchInput = document.querySelector(".search-input");
    const filter = searchInput.value.toLowerCase();
    const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");
    for (const item of items) {
        const title = item.querySelector("h4")?.textContent.toLowerCase();
        const description = item.querySelector("p")?.textContent.toLowerCase();
        if (title?.includes(filter) || description?.includes(filter)) {
            item.style.display = "block";
        } else if (title || description) {
            item.style.display = "none";
        }
    }
}

function toggleDrawerMenu() {
    if (document.getElementById("myDrawer").classList.contains("active")) {
        closeDrawerMenu();
    } else {
        openDrawerMenu();
    }
}

/* Ext Menu Links */
function toggleMenu() {
    if (document.getElementById("myMenu").classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
}
function populateExtMenuItems() {
    const menuContent = document.getElementById("ext-menu-itemList");
    menuContent.innerHTML = "";
    let currentGroup = null;
    extLinksList.forEach(item => {
        if (item.group !== currentGroup) {
            const groupTitle = document.createElement("li");
            groupTitle.classList.add("ext-menu-group-title");
            // groupTitle.textContent = item.group;
            groupTitle.innerHTML = `<a>${item.group}</a>`;
            menuContent.appendChild(groupTitle);
            currentGroup = item.group;
        }
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
        menuContent.appendChild(li);
    });
}
function openMenu() {
    if (!document.getElementById("myMenu").classList.contains("active")) {
        document.getElementById("myMenu").classList.add("active");
        populateExtMenuItems();
    }
}
function closeMenu() {
    document.getElementById("myMenu").classList.remove("active");
}

function filterExtMenuItems() {
    const searchInput = document.querySelector(".ext-menu-search-input");
    const filter = searchInput.value.toLowerCase();
    const itemList = document.getElementById("ext-menu-itemList");
    const items = itemList.getElementsByTagName("li");
    for (const item of items) {
        const title = item.querySelector("a")?.textContent.toLowerCase();
        if (title?.includes(filter)) {
            item.style.display = "block";
        } else if (title) {
            item.style.display = "none";
        }
    }
}