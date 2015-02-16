$( document ).ready(function() {
   $('#lRoll').click(function(){
      for (var i=0; i < $('#lStorm').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#lStormResult').append('<span>'+drawStormDie(result)+'</span>');
         } else {
            $('#lStormResult').append('<span class="lFailedStorm">'+drawStormDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#lBStorm').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#lStormResult').append('<span>'+drawBonusStormDie(result)+'</span>');
         } else {
            $('#lStormResult').append('<span class="lFailedStorm">'+drawBonusStormDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#lThunder').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#lThunderResult').append('<span>'+drawThunderDie(result)+'</span>');
         } else {
            $('#lThunderResult').append('<span class="lFailedThunder">'+drawThunderDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#lBThunder').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#lThunderResult').append('<span>'+drawBonusThunderDie(result)+'</span>');
         } else {
            $('#lThunderResult').append('<span class="lFailedThunder">'+drawBonusThunderDie(result)+'</span>');
         }
      }
      $('#lRollResultsReset, #lRoll').toggle();
   });

   $('#lRollResultsReset').click(function(){
      var prevThunder = $('#lThunder').val();
      var gainedThunder = 0;
      $('#lStormResult > span:not(.lFailedStorm)').each(function(){gainedThunder++;});
      var newThunder = parseInt(prevThunder) + parseInt(gainedThunder);
      if (gainedThunder > 0) {gainThunder(gainedThunder);}
      saveThunder(newThunder);

      var prevLightning = getLightning();
      var gainedLightning = 0;
      $('#lThunderResult > span:not(.lFailedThunder)').each(function(){gainedLightning++;});
      var newLightning = parseInt(prevLightning) + parseInt(gainedLightning);
      if (gainedLightning > 0) {gainLightning(gainedLightning);}
      saveLightning(newLightning);

      $('#ui-id-1').click();
      $('#lStormResult, #lThunderResult').empty();
      $('#lRollResultsReset, #lRoll').toggle();
      $('#lBThunder, #lBStorm').val('0');
   });
});