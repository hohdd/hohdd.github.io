---
layout: default
robots: NOINDEX, NOFOLLOW
# info
priority: 1
tool_name: Grid Toggle Count
icon: "/assets/img/tools/grid_toggle_count.png"
description: Grid Toggle Count
konami: true
---
<link rel="stylesheet" href="/tools/grid_toggle_count/grid_count_styles.css" />

<div class="container">
    <div id="label" class="label">0</div>
    <div id="grid" class="grid"></div>
    <div class="buttons-row">
        <button id="increase" class="btn primary">Tăng</button>
        <button id="decrease" class="btn primary">Giảm</button>
    </div>
    <div class="buttons-row">
        <button id="selectAll" class="btn secondary">Chọn Tất Cả</button>
        <button id="deselectAll" class="btn secondary">Bỏ Chọn Tất Cả</button>
    </div>
</div>

<script src="/tools/grid_toggle_count/grid_count_script.js"></script>