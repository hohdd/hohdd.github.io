---
layout: compress
robots: NOINDEX, NOFOLLOW
# info
priority: 3
tool_name: GLSL Editor
icon: "/assets/img/tools/glsl_editor_400x400.png"
description: GLSL Editor
konami: true
secondMenu: true
secondMenuIcon: folder_special
secondMenuHandler: settingToolHandler()
thirdMenu: true
thirdMenuIcon: sync_alt
thirdMenuHandler: toggleToolBar()
quickNote: true
---
<!-- Custom CSS, JS -->
<link rel="stylesheet" href="/assets/css/delay.css"><!-- hover, icon -->
<link type="text/css" rel="stylesheet" href="/tools/glsl_editor/myGlslEditor.css" /> 
<script type="text/javascript" src="/tools/glsl_editor/myGlslEditor.js"></script>
<script type="text/javascript" src="/tools/glsl_editor/listShaderBookmarks.js"></script>
<script type="text/javascript" src="/tools/glsl_editor/listReferExtLinks.js"></script>

<!-- Drawer Menu -->
<div class="drawer-menu" id="myDrawer">
  <button class="close-button" onclick="closeDrawerMenu()">Close</button>
  <input type="text" class="search-input" placeholder="Search..." oninput="filterItems()">
  <ul id="itemList">
    <!-- Items will be dynamically added here -->
  </ul>
</div>

<!-- glsl Editor -->
<div id="glsl_editor"></div>>
<link type="text/css" rel="stylesheet" href="/tools/glsl_editor/glslEditor.css">
<script type="text/javascript" src="/tools/glsl_editor/glslEditor.js"></script>
<script type="text/javascript">
  window.glslEditor = new GlslEditor('#glsl_editor', {
    canvas_size: 500,
    canvas_draggable: true,
    canvas_resizable: true,
    theme: 'monokai',
    watchHash: true,
    fileDrops: true,
    menu: true,
    multipleBuffers: true
  });
  document.body.style.backgroundColor = window.getComputedStyle(glslEditor.editor.getWrapperElement(),null).getPropertyValue('background-color');
</script>

<!-- Add my own menu to glsl Editor -->
<script type="text/javascript">
  addMenuItem(window.glslEditor.menu.el, 'ge_menu', '<i class="material-icons">restart_alt</i> Default', (event) => {
    location.reload();
    localStorage.removeItem("glslEditor-last-content");
    localStorage.removeItem("pdfjs.history");
  });
  addMenuItem(window.glslEditor.menu.el, 'ge_menu', '<i class="material-icons">manage_search</i> Bookmarks', (event) => {
    toggleDrawerMenu();
  });
  addMenuItem(window.glslEditor.menu.el, 'ge_menu', `<i class="material-icons">question_mark</i> Helps`, (event) => {
    toggleMenu();
  },`
    <div class="ext-menu" id="myMenu">
      <button class="ext-menu-close-button" onclick="closeMenu()">Close</button>
      <input type="text" class="ext-menu-search-input" placeholder="Search..." oninput="filterExtMenuItems()">
      <ul id="ext-menu-itemList">
      </ul>
    </div>`);
</script>