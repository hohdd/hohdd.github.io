---
layout: compress
robots: NOINDEX, NOFOLLOW
# info
priority: 1
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
<style>
  #glsl_editor {
    height: 100%;
  }
</style>
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