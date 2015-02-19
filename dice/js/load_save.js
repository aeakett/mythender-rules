function saveThunder(num) {
   simpleStorage.set('globalThunder', num);
   $('#woundThunder').val(num);
   $('#lThunder').val(num);
   $('#mThunder').val(num);
   $('#tThunder').val(num);
   $('#thunder').val(num);
}

function saveStorm(num) {
   simpleStorage.set('globalStorm', num);
   $('#lStorm').val(num);
   $('#mStorm').val(num);
   $('#tStorm').val(num);
   $('#storm').val(num);
}

function saveMight(num) {
   simpleStorage.set('globalMight', num);
   $('#might').val(num);
}

function saveLightning(num) {
   simpleStorage.set('globalLightning', num);
   $('#lightning').val(num);
}

function saveWoundCost(num) {
   simpleStorage.set('globalWoundCost', num);
   $('#woundCost').val(num);
}

function loadThunder() {
   var thunder=simpleStorage.get('globalThunder');
   if (thunder) {
      $('#woundThunder').val(thunder);
      $('#lThunder').val(thunder);
      $('#mThunder').val(thunder);
      $('#tThunder').val(thunder);
      $('#thunder').val(thunder);
   }
}

function loadStorm() {
   var storm=simpleStorage.get('globalStorm');
   if (storm) {
      $('#lStorm').val(storm);
      $('#mStorm').val(storm);
      $('#tStorm').val(storm);
      $('#storm').val(storm);
   }
}

function loadMight() {
   var might=simpleStorage.get('globalMight');
   if (!might) { might=0; }
   $('#might').val(might);
}

function loadLightning() {
   var lightning=simpleStorage.get('globalLightning');
   if (!lightning) { lightning=0; }
   $('#lightning').val(lightning);
}

function loadWoundCost() {
   var woundCost=simpleStorage.get('globalWoundCost');
   if (!woundCost) { woundCost=0; }
   $('#woundCost').val(woundCost);
}