---
layout: tool
robots: NOINDEX, NOFOLLOW
# info
priority: 2
tool_name: Minano Nihongo
icon: "/assets/img/tools/mina_search.png"
description: Minano Nihongo Search
konami: true
quickNote: true
secondMenu: true
secondMenuIcon: close
secondMenuHandler: closeAllModal()
---
<script>
  function closeAllModal() {
    try {
      document.getElementById('quillNote').style.display = 'none';
    } catch (error) {}
    try {
      document.getElementById('savedModal').style.display='none';
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
</script>
<style>
  /* for container 01-11 */
  .container_01:has(.result_01:empty) {
    display: none;
  }
  .container_02:has(.result_02:empty) {
    display: none;
  }
  .container_03:has(.result_03:empty) {
    display: none;
  }
  .container_04:has(.result_04:empty) {
    display: none;
  }
  .container_05:has(.result_05:empty) {
    display: none;
  }
  .container_06:has(.result_06:empty) {
    display: none;
  }
  .container_07:has(.result_07:empty) {
    display: none;
  }
  .container_08:has(.result_08:empty) {
    display: none;
  }
  .container_09:has(.result_09:empty) {
    display: none;
  }
  .container_10:has(.result_10:empty) {
    display: none;
  }
  .container_11:has(.result_11:empty) {
    display: none;
  }

  /* for span_container 01-20 */
  .span_container_01:has(.span_result_01:empty) {
    display: none;
  }
  .span_container_02:has(.span_result_02:empty) {
    display: none;
  }
  .span_container_03:has(.span_result_03:empty) {
    display: none;
  }
  .span_container_04:has(.span_result_04:empty) {
    display: none;
  }
  .span_container_05:has(.span_result_05:empty) {
    display: none;
  }
  .span_container_06:has(.span_result_06:empty) {
    display: none;
  }
  .span_container_07:has(.span_result_07:empty) {
    display: none;
  }
  .span_container_08:has(.span_result_08:empty) {
    display: none;
  }
  .span_container_09:has(.span_result_09:empty) {
    display: none;
  }
  .span_container_10:has(.span_result_10:empty) {
    display: none;
  }
  .span_container_11:has(.span_result_11:empty) {
    display: none;
  }
  .span_container_12:has(.span_result_12:empty) {
    display: none;
  }
  .span_container_13:has(.span_result_13:empty) {
    display: none;
  }
  .span_container_14:has(.span_result_14:empty) {
    display: none;
  }
  .span_container_15:has(.span_result_15:empty) {
    display: none;
  }
  .span_container_16:has(.span_result_16:empty) {
    display: none;
  }
  .span_container_17:has(.span_result_17:empty) {
    display: none;
  }
  .span_container_18:has(.span_result_18:empty) {
    display: none;
  }
  .span_container_19:has(.span_result_19:empty) {
    display: none;
  }
  .span_container_20:has(.span_result_20:empty) {
    display: none;
  }

  /* for row_m2 01-10 */
  .row_m2_01:has(.row_m2_result_01:empty) {
    display: none;
  }
  .row_m2_02:has(.row_m2_result_02:empty) {
    display: none;
  }
  .row_m2_03:has(.row_m2_result_03:empty) {
    display: none;
  }
  .row_m2_04:has(.row_m2_result_04:empty) {
    display: none;
  }
  .row_m2_05:has(.row_m2_result_05:empty) {
    display: none;
  }
  .row_m2_06:has(.row_m2_result_06:empty) {
    display: none;
  }
  .row_m2_07:has(.row_m2_result_07:empty) {
    display: none;
  }
  .row_m2_08:has(.row_m2_result_08:empty) {
    display: none;
  }
  .row_m2_09:has(.row_m2_result_09:empty) {
    display: none;
  }
  .row_m2_10:has(.row_m2_result_10:empty) {
    display: none;
  }

  /* for row_s4 01-10 */
  .row_s4_01:has(.row_s4_result_01:empty) {
    display: none;
  }
  .row_s4_02:has(.row_s4_result_02:empty) {
    display: none;
  }
  .row_s4_03:has(.row_s4_result_03:empty) {
    display: none;
  }
  .row_s4_04:has(.row_s4_result_04:empty) {
    display: none;
  }
  .row_s4_05:has(.row_s4_result_05:empty) {
    display: none;
  }
  .row_s4_06:has(.row_s4_result_06:empty) {
    display: none;
  }
  .row_s4_07:has(.row_s4_result_07:empty) {
    display: none;
  }
  .row_s4_08:has(.row_s4_result_08:empty) {
    display: none;
  }
  .row_s4_09:has(.row_s4_result_09:empty) {
    display: none;
  }
  .row_s4_10:has(.row_s4_result_10:empty) {
    display: none;
  }

  /* for row_s6 01-10 */
  .row_s6_01:has(.row_s6_result_01:empty) {
    display: none;
  }
  .row_s6_02:has(.row_s6_result_02:empty) {
    display: none;
  }
  .row_s6_03:has(.row_s6_result_03:empty) {
    display: none;
  }
  .row_s6_04:has(.row_s6_result_04:empty) {
    display: none;
  }
  .row_s6_05:has(.row_s6_result_05:empty) {
    display: none;
  }
  .row_s6_06:has(.row_s6_result_06:empty) {
    display: none;
  }
  .row_s6_07:has(.row_s6_result_07:empty) {
    display: none;
  }
  .row_s6_08:has(.row_s6_result_08:empty) {
    display: none;
  }
  .row_s6_09:has(.row_s6_result_09:empty) {
    display: none;
  }
  .row_s6_10:has(.row_s6_result_10:empty) {
    display: none;
  }

  .container-added-results:has(#added-results-container:empty) {
    display: none;
  }
  /* #added-results-container:not(#added-results-container:has(.w3-container)) {
    display: none;
  } */

  /* Left Nav */
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
  #Saved {
    top: 220px;
    background-color: #04AA6D;
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
<script>
  var settingsMatching2 = {
      "Chia thể": "ChiaThe_check",
      "Tự/Tha ĐT": "TuThaDT_check",
      "Từ vựng Mina": "TuVungMina_check",
      "Tham khảo": "ThamKhao_check",
      "Ngữ pháp": "NguPhap_check",
      "Reibun": "Reibun_check",
      "Giao tiếp": "GiaoTiep_check",
  }
</script>
<script>
  function addToTop(thisDiv, parentDiv) {
    thisDiv.remove();
    document.getElementById("added-results-container").appendChild(parentDiv);
  }
  function clearAdded() {
    document.getElementById("added-results-container").innerHTML = "";
  }
  function saveNow() {
    loadSaved();
    const addedResultsContainer = document.getElementById("added-results-container").cloneNode(true);
    document.getElementById("saved-container").appendChild(addedResultsContainer);
    localStorage.setItem("DongHD_saved_results_mina_search", document.getElementById("saved-container").innerHTML);
  }
  function saveAndClearAdded() {
    saveNow();
    clearAdded();
  }
  function clearSaved() {
    document.getElementById("saved-container").innerHTML = "";
    localStorage.setItem("DongHD_saved_results_mina_search", "");
  }
  function loadSaved() {
    const iHTML = localStorage.getItem("DongHD_saved_results_mina_search");
    document.getElementById("saved-container").innerHTML = iHTML;
  }
</script>

<!-- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav_buttons -->
<div id="mySidenav" class="sidenav">
  <a href="#" id="Saved" onclick="document.getElementById('savedModal').style.display='block'">Saved<span class="material-icons">bookmark</span></a>
  <a href="#" id="Hiragana" onclick="document.getElementById('hiraganaModal').style.display='block'">Hiragana<span class="material-icons">H</span></a>
  <a href="#" id="Katakana" onclick="document.getElementById('katakanaModal').style.display='block'">Katakana<span class="material-icons">K</span></a>
  <a href="#" id="BoThu" onclick="document.getElementById('boThu214Modal').style.display='block'">Bộ Thủ<span class="material-icons">B</span></a>
  <a href="#" id="Note" onclick="document.getElementById('quillNote').style.display = 'block'">Note<span class="material-icons">edit</span></a>
</div>

<!-- add Result Container -->
<div class="container-added-results">
  <button class="w3-btn w3-white w3-border w3-border-blue w3-round" onclick="clearAdded()">Clear</button>
  <button class="w3-btn w3-white w3-border w3-border-blue w3-round" onclick="saveAndClearAdded()">Save & Clear</button>
  <div id="added-results-container">
  </div>
</div>

<!-- search -->
<div id="search-container">
<div class="input_settings w3-padding">
  <label><input id="ChiaThe_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('ChiaThe_check', this)">&nbsp;<span class="w3-yellow">Chia thể</span></label>
  <label><input id="TuThaDT_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('TuThaDT_check', this)">&nbsp;<span class="w3-green">Tự/Tha ĐT</span></label>
  <label><input id="TuVungMina_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('TuVungMina_check', this)">&nbsp;<span class="w3-pale-yellow">Từ vựng Mina</span></label>
  <label><input id="ThamKhao_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('ThamKhao_check', this)">&nbsp;<span class="w3-pale-blue">Tham khảo</span></label>
  <label><input id="NguPhap_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('NguPhap_check', this)">&nbsp;<span class="w3-purple">Ngữ pháp</span></label>
  <label><input id="Reibun_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('Reibun_check', this)">&nbsp;<span class="w3-teal">Reibun</span></label>
  <label><input id="GiaoTiep_check" class="w3-check" type="checkbox" onchange="onchangeInputSettings('GiaoTiep_check', this)">&nbsp;<span class="w3-indigo">Giao tiếp</span></label>
</div>
	<label>
		<input type="text" class="w3-card-4" id="search-input" placeholder="Minano Nihongo Search...">
	</label>
	<div id="results-container" class="w3-card"></div>
</div>
<script src="/tools/mina_search/mina_search-custom.js" type="text/javascript"></script>
<script>
	(function() {
		JSearch({
			searchInput: document.getElementById('search-input'),
			resultsContainer: document.getElementById('results-container'),
			json: '/tools/mina_search/MinaSearch_mergeAllGet.json',
      limit: 25
		})
	})();
</script>

<!-- modal -->
<div id="savedModal" class="w3-modal">
  <div class="w3-modal-content w3-animate-left w3-card-4" style="width: 90%;">
    <header class="w3-container w3-teal">
      <span onclick="document.getElementById('savedModal').style.display='none'" 
      class="w3-button w3-display-topright">&times;</span>
      <h2 style="font-size: small;">Saved<span onclick="clearSaved()" class="cursor-pointer">&nbsp;[x]</span></h2>
    </header>
    <div class="w3-container" id="saved-container">
    </div>
  </div>
</div>
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

<script>
  loadSaved();

  function checkInitInputSettings() {
    if (!window.input_settings) {
      window.input_settings = {
        ChiaThe_check: true,
        TuThaDT_check: true,
        TuVungMina_check: true,
        ThamKhao_check: true,
        NguPhap_check: true,
        Reibun_check: true,
        GiaoTiep_check: true,
      }
    }
  }
  function loadInputSettings() {
    window.input_settings = JSON.parse(localStorage.getItem("DongHD_input_settings_mina_search"));
    checkInitInputSettings();
    updateInputSettingCheckbox();
  }
  function updateInputSettingCheckbox() {
    document.getElementById('ChiaThe_check').checked = window.input_settings['ChiaThe_check'];
    document.getElementById('TuThaDT_check').checked = window.input_settings['TuThaDT_check'];
    document.getElementById('TuVungMina_check').checked = window.input_settings['TuVungMina_check'];
    document.getElementById('ThamKhao_check').checked = window.input_settings['ThamKhao_check'];
    document.getElementById('NguPhap_check').checked = window.input_settings['NguPhap_check'];
    document.getElementById('Reibun_check').checked = window.input_settings['Reibun_check'];
    document.getElementById('GiaoTiep_check').checked = window.input_settings['GiaoTiep_check'];
  }
  
  function updateResultsView2() {
      const resultDivs = document.getElementById('results-container');
      for (const result of resultDivs.children) {
      const span_result_01 = result.getElementsByClassName('span_result_01');
      if (span_result_01) {
          const idCheckboxStr = settingsMatching2[span_result_01[0].textContent];
          if (idCheckboxStr) {
          if (document.getElementById(idCheckboxStr).checked) {
              result.style.display = 'block';
          } else {
              result.style.display = 'none';
          }
          }
      }
      }
  }
  function onchangeInputSettings(keyStr, checkboxDiv) {
    checkInitInputSettings();
    saveInputSettingsToStorage();
    updateResultsView2();
  }
  function saveInputSettingsToStorage() {
    localStorage.setItem("DongHD_input_settings_mina_search", JSON.stringify(window.input_settings));
  }
  loadInputSettings();
</script>
<!-- memo -->
{% include quill-note.html %}