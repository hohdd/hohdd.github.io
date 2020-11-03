---
layout: page
title: Học tiếng anh
robots: NOINDEX, FOLLOW
draft: true
---
<!-- SEARCH: # Nhớ sửa đường dẫn tìm kiếm bên dưới # -->
<div id="search-container" class="konamiHide">
  <label>
		<span class="dh-unnecessary">Tìm kiếm</span>
    <input type="text" id="search-input" placeholder="Search...">
  </label>
  <div id="results-container" class="w3-card"></div>
</div>
<div id="inputCheat">
  <label>
		<span class="dh-unnecessary">Tìm kiếm</span>
    <input type="text" id="search-input-cheat" placeholder="Search...">
  </label>
</div>

<div class="w3-section">
  <!-- serials -->
  {% assign serials = site.collections | where: 'isSerial', true | where: 'show', true | where: 'label', page.collection %}
  {% for serial in serials %}
    <div class="opacity-transition-hover">
      <h5>{{ serial.title }}</h5>
      <div>{{ serial.description }}</div>
    </div>

    {% include disclaimer-google-translate.html %}

    {% include disclaimer-copyright.html %}

    {% assign excludeArr = "Speaking,Vocabulary,Vocabulary_Builder,TOEIC,Supper_Simple_Sentence,Writing,Business_English,In_Actions" | split:"," %}

    {% assign groups = serial.docs | group_by: "category" %}
    {% for group in groups %}
      {% if group.name != "" %}
      <div class="w3-section {% if excludeArr contains group.name %}konamiHide{% endif %}">
        <h5 id="{{ group.name }}">{{ group.name | replace: "_", " " }} ({{ group.size }})</h5>
        <ul class="w3-ul">
        {% for doc in group.items %}
          {% if doc.draft != true %}
          <a href="{{ site.baseurl }}{{doc.url}}" class="hvr-forward"><li><span></span>{{doc.title}} · {{ doc.content | reading_time }}</li></a>
          {% endif %}
        {% endfor %}
        </ul>
      </div>
      {% endif %}
    {%endfor%}
  {% endfor %}
</div>

{% comment %}

<div class="w3-row">
  <!-- serials -->
  {% assign serials = site.collections | where: 'isSerial', true | where: 'show', true | where: 'label', page.collection %}
  {% for serial in serials %}
  <div class="opacity-transition-hover">
    <h5>{{ serial.title }}</h5>
    <div>{{ serial.description }}</div>
  </div>
  <ul class="w3-ul">
  {% for doc in serial.docs %}
    {% if doc.draft != true %}
    <!-- {{ doc.date | date_to_string }} -->
    <a href="{{ site.baseurl }}{{doc.url}}" class="hvr-forward"><li><span></span>{{doc.title}} · {{ doc.content | reading_time }}</li></a>
    {% endif %}
  {% endfor %}
  </ul>
  {% endfor %}
</div>

{% endcomment %}

<script src="/assets/js/search-custom.min.js" type="text/javascript"></script>
<script>
	(function() {
    JSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
			json: '/collections/english/search.json'
    })
	})();
</script>