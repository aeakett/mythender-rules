$( document ).ready(function() {
   $('#tRoll').click(function(){
      for (var i=0; i < $('#tStorm').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#tStormResult').append('<span>'+drawStormDie(result)+'</span>');
         } else {
            $('#tStormResult').append('<span class="tFailedStorm">'+drawStormDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#tThunder').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#tThunderResult').append('<span>'+drawThunderDie(result)+'</span>');
         } else {
            $('#tThunderResult').append('<span class="tFailedThunder">'+drawThunderDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#tBThunder').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#tThunderResult').append('<span>'+drawBonusThunderDie(result)+'</span>');
         } else {
            $('#tThunderResult').append('<span class="tFailedThunder">'+drawBonusThunderDie(result)+'</span>');
         }
      }
      if (gifts['blazeOfGlory'].has) {
         var result1=roll();
         var result2=roll();
         var resultTotal=result1+result2;
         $('#tMythicResult').append('<span data-mythicresult="'+resultTotal+'">'+drawMythicDie(result1)+drawMythicDie(result2)+'</span>');
      } else {
         var result=roll();
         $('#tMythicResult').append('<span data-mythicresult="'+result+'">'+drawMythicDie(result)+'</span>');
      }
      $('#tRollResultsReset, #tRoll').toggle();
   });

   $('#tRollResultsReset').click(function(){
      var prevThunder = $('#tThunder').val();
      var gainedThunder = 0;
      var lostThunder = 0;
      $('#tStormResult > span:not(.tFailedStorm)').each(function(){gainedThunder++;});
      $('#tThunderResult > .tFailedThunder').each(function(){lostThunder++;});
      var netThunderChange = gainedThunder - lostThunder;
      var newThunder = parseInt(prevThunder) + parseInt(netThunderChange);
      if (netThunderChange > 0) {
         gainThunder(parseInt(gainedThunder));
      } else if (netThunderChange < 0) {
         loseThunder(parseInt(netThunderChange));
      }
      saveThunder(newThunder);

      var prevLightning = getLightning();
      var gainedLightning = 0;
      var titanicLightningMultiplier = 0;
      if (gifts['mightyPresence'].has) {
         titanicLightningMultiplier = 4;
      } else {
         titanicLightningMultiplier = 3;
      }
      
      $('#tThunderResult > span:not(.tFailedThunder)').each(function(){gainedLightning++;});
      var newLightning = parseInt(prevLightning) + parseInt(gainedLightning)*titanicLightningMultiplier;
      if (gainedLightning > 0) {gainLightning(parseInt(gainedLightning)*titanicLightningMultiplier);}
      saveLightning(newLightning);

      var prevMight = getMight();
      var gainedMight = $('#tMythicResult > span').attr('data-mythicresult');
      var newMight = parseInt(prevMight) + parseInt(gainedMight);
      gainMight(gainedMight);
      saveMight(newMight);

      $('#ui-id-1').click();
      $('#tStormResult, #tThunderResult, #tMythicResult').empty();
      $('#tRollResultsReset, #tRoll').toggle();
      $('#tBThunder').val('0');
   });
});