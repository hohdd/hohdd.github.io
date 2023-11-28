---
layout: tool
robots: NOINDEX, NOFOLLOW
# info
priority: 1
tool_name: Memo search
icon: "/assets/img/tools/memo_search_512x512.png"
description: Memo Search
konami: true
quickNote: true
secondMenu: true
secondMenuIcon: close
secondMenuHandler: closeAllModal()
thirdMenu: true
thirdMenuIcon: menu_open
thirdMenuHandler: toggleSideBar()
---
<script>
  function closeAllModal() {
    try {
      document.getElementById('quillNote').style.display = 'none';
    } catch (error) {}
    try {
      document.getElementById('hiraganaModal').style.display='none';
    } catch (error) {}
    try {
      document.getElementById('katakanaModal').style.display='none';
    } catch (error) {}
    try {
      document.getElementById('boThu214Modal').style.display='none';
    } catch (error) {}
  }
  function toggleSideBar() {
    var x = document.getElementById("mySidenav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
</script>
<style>
  #mySidenav a {
    position: absolute;
    left: -80px;
    transition: 0.3s;
    padding: 15px;
    width: 125px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;
    font-size: small;
  }
  #mySidenav a:hover {
    left: 0;
  }

  #Hiragana {
    top: 280px;
    background-color: #2196F3;
  }

  #Katakana {
    top: 340px;
    background-color: #f44336;
  }

  #BoThu {
    top: 400px;
    background-color: #3f51b5
  }

  #Note {
    top: 460px;
    background-color: #555
  }
  .material-icons {
    float: right;
  }
</style>

<div id="mySidenav" class="sidenav">
  <a href="#" id="Hiragana" onclick="document.getElementById('hiraganaModal').style.display='block'">Hiragana<span class="material-icons">H</span></a>
  <a href="#" id="Katakana" onclick="document.getElementById('katakanaModal').style.display='block'">Katakana<span class="material-icons">K</span></a>
  <a href="#" id="BoThu" onclick="document.getElementById('boThu214Modal').style.display='block'">Bộ Thủ<span class="material-icons">B</span></a>
  <a href="#" id="Note" onclick="document.getElementById('quillNote').style.display = 'block'">Note<span class="material-icons">edit</span></a>
</div>

<!-- search -->
<div id="search-container">
	<label>
		<input type="text" class="w3-card-4" id="search-input" placeholder="Tìm kiếm...">
	</label>
	<div id="results-container" class="w3-card"></div>
</div>
<script src="/tools/memo_search/memo_search_custom.js" type="text/javascript"></script>
<script src="/tools/memo_search/memo_js.js" type="text/javascript"></script>
<script>
	(function() {
		DongHDSearch({
			searchInput: document.getElementById('search-input'),
			resultsContainer: document.getElementById('results-container'),
			json: [
        '/tools/memo_search/data/MemRise_214BoThu.json'
      ],
      pwToyRunfiles: '/tools/memo_search/data/MemRiseListFiles.json', /* require: arr[i].dataFilePath */
      searchResultTemplate: '<div class="w3-container w3-padding w3-hover-light-gray"><strong>{title}</strong><br/><small>{subTitle}</small></div>',
      limit: 30
		})
	})();
</script>

<!-- modal -->
<div id="hiraganaModal" class="w3-modal">
  <div class="w3-modal-content w3-animate-left w3-card-4">
    <header class="w3-container w3-blue">
      <span onclick="document.getElementById('hiraganaModal').style.display='none'" 
      class="w3-button w3-display-topright">&times;</span>
      <h2 style="font-size: small;">Hiragana</h2>
    </header>
    <div class="w3-container">
    {% include hiragana.html %}
    </div>
  </div>
</div>
<div id="katakanaModal" class="w3-modal">
  <div class="w3-modal-content w3-animate-left w3-card-4">
    <header class="w3-container w3-red">
      <span onclick="document.getElementById('katakanaModal').style.display='none'" 
      class="w3-button w3-display-topright">&times;</span>
      <h2 style="font-size: small;">Katakana</h2>
    </header>
    <div class="w3-container">
    {% include katakana.html %}
    </div>
  </div>
</div>
<div id="boThu214Modal" class="w3-modal">
  <div class="w3-modal-content w3-animate-left w3-card-4">
    <header class="w3-container w3-indigo">
      <span onclick="document.getElementById('boThu214Modal').style.display='none'" 
      class="w3-button w3-display-topright">&times;</span>
      <h2 style="font-size: small;">214 Bộ Thủ</h2>
    </header>
    <div class="w3-container">
    {% include 214bothu.html %}
    </div>
  </div>
</div>

<!-- memo -->
{% include quill-note.html %}