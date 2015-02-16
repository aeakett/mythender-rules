$( document ).ready(function() {
   $('#mRoll').click(function(){
      for (var i=0; i < $('#mStorm').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#mStormResult').append('<span>'+drawStormDie(result)+'</span>');
         } else {
            $('#mStormResult').append('<span class="mFailedStorm">'+drawStormDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#mBStorm').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#mStormResult').append('<span>'+drawBonusStormDie(result)+'</span>');
         } else {
            $('#mStormResult').append('<span class="mFailedStorm">'+drawBonusStormDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#mThunder').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#mThunderResult').append('<span>'+drawThunderDie(result)+'</span>');
         } else {
            $('#mThunderResult').append('<span class="mFailedThunder">'+drawThunderDie(result)+'</span>');
         }
      }
      for (var i=0; i < $('#mBThunder').val(); i++) {
         var result=roll();
         if (result > 3) {
            $('#mThunderResult').append('<span>'+drawBonusThunderDie(result)+'</span>');
         } else {
            $('#mThunderResult').append('<span class="mFailedThunder">'+drawBonusThunderDie(result)+'</span>');
         }
      }
      if (gifts['blazeOfGlory'].has) {
         var result1=roll();
         var result2=roll();
         var resultTotal=result1+result2;
         $('#mMythicResult').append('<span data-mythicresult="'+resultTotal+'">'+drawMythicDie(result1)+drawMythicDie(result2)+'</span>');
      } else {
         var result=roll();
         $('#mMythicResult').append('<span data-mythicresult="'+result+'">'+drawMythicDie(result)+'</span>');
      }
      $('#mRollResultsReset, #mRoll').toggle();
   });

   $('#mRollResultsReset').click(function(){
      var prevThunder = $('#mThunder').val();
      var gainedThunder = $('#mMythicResult > span').attr('data-mythicresult');
      $('#mStormResult > span:not(.mFailedStorm)').each(function(){gainedThunder++;});
      var newThunder = parseInt(prevThunder) + parseInt(gainedThunder);
      gainThunder(parseInt(gainedThunder));
      saveThunder(newThunder);

      var prevLightning = getLightning();
      var gainedLightning = 0;
      $('#mThunderResult > span:not(.mFailedThunder)').each(function(){gainedLightning++;});
      var newLightning = parseInt(prevLightning) + parseInt(gainedLightning);
      if (gainedLightning > 0) {gainLightning(gainedLightning);}
      saveLightning(newLightning);

      $('#ui-id-1').click();
      $('#mStormResult, #mThunderResult, #mMythicResult').empty();
      $('#mRollResultsReset, #mRoll').toggle();
      $('#mBThunder, #mBStorm').val('0');
   });
});