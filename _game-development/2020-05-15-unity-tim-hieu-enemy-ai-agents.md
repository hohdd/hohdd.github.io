---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu Enemy AI (Agents)
description: Tìm hiểu Enemy AI (Agents)

### HUMAN
header: Tìm hiểu Enemy AI (Agents)
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400
text2speech: false # có bật chức năng Text-To-Speech hay không?

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Investigate # this for AMP related post
### category: dùng để group collection
category: Investigate

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Tìm hiểu Enemy AI (Agents)

### Tổng quan các thành phần
- **AIBrain (MonoBehaviour)**: Chứa danh sách *State*, nhiệm vụ chính là định kỳ kích hoạt *CurrentState.PerformActions()* và *CurrentState.EvaluateTransitions()*
- **AIState [Serializable]**: Chứa danh sách Actions (để perform nếu là CurrentState ở Brain). Chứa danh sách Transition để phụ vụ EvaluateTransitions() để chuyển sang State khác dựa vào *Transitions[i].Decision*
- **AITransition [Serializable]**: Đơn giản chỉ chứa AIDecision (trả về true/false) và StateTrue + StateFalse để quyết định sẽ di chuyển sang State nào.
- **AIDecision (MonoBehaviour)**: Chứa Decide() trả về true/false để quyết định cho Transition đi State nào.
- **AIAction (MonoBehaviour)**: Chứa PerformAction() để thực hiện một hành động nào đó.

Sẽ cần implement **AIDecision** + **AIAction** là chính, *AIState* và *AITransition* chỉ là "***cấu hình***", *AIBrain* thì đã cố định.

### Cách sử dụng
- 1) Add AIBrain vào GO
- 2) Add các AIState vào GO????, currentState ban đâu sẽ là States[0]

