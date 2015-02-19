function hideWRelentlessnessU() {$('#wuserelentlessnessu, #wrelentlessnessuwut, #wrelentlessnessuwut + br').hide();}
function hideWBloodlust() {$('#wusebloodlust, #wbloodlustwut, #wbloodlustwut + br').hide();}
function hideWBloodlustQ() {$('#wusebloodlustq, #wbloodlustqwut, #wbloodlustqwut + br').hide();}
function hideWBloodlustD() {$('#wusebloodlustd, #wbloodlustdwut, #wbloodlustdwut + br').hide();}
function hideWBloodlustDQ() {$('#wusebloodlustdq, #wbloodlustdqwut, #wbloodlustdqwut + br').hide();}
function showWRelentlessnessU() {$('#wuserelentlessnessu, #wrelentlessnessuwut, #wrelentlessnessuwut + br').show();}
function showWBloodlust() {$('#wusebloodlust, #wbloodlustwut, #wbloodlustwut + br').show();}
function showWBloodlustQ() {$('#wusebloodlustq, #wbloodlustqwut, #wbloodlustqwut + br').show();}
function showWBloodlustD() {$('#wusebloodlustd, #wbloodlustdwut, #wbloodlustdwut + br').show();}
function showWBloodlustDQ() {$('#wusebloodlustdq, #wbloodlustdqwut, #wbloodlustdqwut + br').show();}

$( document ).ready(function() {
   $('#woundRoll').click(function(){
      var discard=0;
      var effectiveno = $('#wno').val();
      for (var i=0; i < $('#woundThunder').val(); i++) {
         var result=roll();
         if (result >= effectiveno) {
            $('#woundRollResults').append('<span>'+drawThunderDie(result)+'</span>');
         } else {
            $('#woundRollResults').append('<span class="wfailed" data-result="'+result+'">'+drawThunderDie(result)+'</span>');
            discard++;
         }
      }
      // Deal with wound numbers greater than 6
      if (effectiveno > 6) {
         console.log('wound no. is greater than 6!');
         $('.wfailed[data-result="6"]').each(function(){
            console.log('processing a failed 6');
            if (effectiveno == 6) {
               $(this).removeClass('wfailed');
               discard--;
            } else {
               effectiveno--;
            }
         });
      }
      $('#wno').attr('weffectiveno',effectiveno);


      $('#woundRollResults').append('<p id="wdiscard" data-discard="'+discard+'">discard '+discard+'</p>');
      if (discard > 0) {
         if (gifts['relentlessness']['has']) {showWRelentlessnessU();}
         if (gifts['bloodlust']['has']) {showWBloodlust();}
         if (gifts['bloodlust-quick']['has']) {showWBloodlustQ();}
         if (gifts['bloodlust-dangerous']['has']) {showWBloodlustD();}
         if (gifts['bloodlust-dangerous']['has'] && gifts['bloodlust-quick']['has']) {showWBloodlustDQ();}
      }
      $('#woundRollResultsReset, #woundRoll').toggle();
   });

   $('#woundRollResultsReset').click(function(){
      var prevThunder = $('#woundThunder').val();
      var discarding = $('#wdiscard').attr('data-discard');
      var newThunder = prevThunder - discarding;
      if (discarding > 0) {loseThunder(discarding);}
      saveThunder(newThunder);
      chargeCompanions();
      $('#woundRollResults').empty();
      $('#woundRollResultsReset, #woundRoll').toggle();
      hideWRelentlessnessU(); hideWBloodlust(); hideWBloodlustQ(); hideWBloodlustD(); hideWBloodlustDQ();
      $('#ui-id-1').click();
   });

   $('#wbloodlustwut').click(function(){
      var n = noty({
         text        : 'Pay 2 Might tokens when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to the Thunder dice lost.\n\nIf a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.',
         type        : 'information',
         maxVisible  : 1,
         dismissQueue: true,
         layout      : 'center',
         theme       : 'mythdice_theme',
         animation: {
            open: 'animated zoomIn',
            close: 'animated zoomOut'
         }
      });
   });
   $('#wbloodlustdwut').click(function(){
      var n = noty({
         text        : 'Pay 5 Might tokens when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to twice the Thunder dice lost.\n\nIf a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.',
         type        : 'information',
         maxVisible  : 1,
         dismissQueue: true,
         layout      : 'center',
         theme       : 'mythdice_theme',
         animation: {
            open: 'animated zoomIn',
            close: 'animated zoomOut'
         }
      });
   });
   $('#wbloodlustqwut').click(function(){
      var n = noty({
         text        : 'Pay 1 Might token when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to the Thunder dice lost.\n\nIf a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.',
         type        : 'information',
         maxVisible  : 1,
         dismissQueue: true,
         layout      : 'center',
         theme       : 'mythdice_theme',
         animation: {
            open: 'animated zoomIn',
            close: 'animated zoomOut'
         }
      });
   });
   $('#wbloodlustdqwut').click(function(){
      var n = noty({
         text        : 'Pay 4 Might tokens when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to twice the Thunder dice lost.\n\nIf a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.',
         type        : 'information',
         maxVisible  : 1,
         dismissQueue: true,
         layout      : 'center',
         theme       : 'mythdice_theme',
         animation: {
            open: 'animated zoomIn',
            close: 'animated zoomOut'
         }
      });
   });
   $('#wrelentlessnessuwut').click(function(){
      var n = noty({
         text        : 'Pay 3 Might tokens when Wounded. Reroll failed Thunder dice. Spend after rolling. Describe how you’re pushing harder to recover from a fumble.',
         type        : 'information',
         maxVisible  : 1,
         dismissQueue: true,
         layout      : 'center',
         theme       : 'mythdice_theme',
         animation: {
            open: 'animated zoomIn',
            close: 'animated zoomOut'
         }
      });
   });

   $('#wusebloodlust').click(function(){
      payMight(2);
      gainLightning($('#wdiscard').attr('data-discard'));
      hideWRelentlessnessU(); hideWBloodlust(); hideWBloodlustQ(); hideWBloodlustD(); hideWBloodlustDQ();
   });

   $('#wusebloodlustq').click(function(){
      payMight(1);
      gainLightning($('#wdiscard').attr('data-discard'));
      hideWRelentlessnessU(); hideWBloodlust(); hideWBloodlustQ(); hideWBloodlustD(); hideWBloodlustDQ();
   });

   $('#wusebloodlustd').click(function(){
      payMight(5);
      gainLightning($('#wdiscard').attr('data-discard')*2);
      hideWRelentlessnessU(); hideWBloodlust(); hideWBloodlustQ(); hideWBloodlustD(); hideWBloodlustDQ();
   });

   $('#wusebloodlustdq').click(function(){
      payMight(4);
      gainLightning($('#wdiscard').attr('data-discard')*2);
      hideWRelentlessnessU(); hideWBloodlust(); hideWBloodlustQ(); hideWBloodlustD(); hideWBloodlustDQ();
   });

   $('#wuserelentlessnessu').click(function(){
      // pony up
      payMight(3);
      // grab the number of rerolls we have to do
      var numRerolls=$('#wdiscard').attr('data-discard'); console.log('rerolling: '+numRerolls);
      // remove the old discard number
      $('#wdiscard').remove();
      // remove the rolls we're redoing
      $('.wfailed').remove();
      // make sure to describe the awesome
      var n = noty({
         text        : 'Describe how you’re pushing harder to recover from a fumble.',
         type        : 'information',
         maxVisible  : 1,
         dismissQueue: true,
         layout      : 'center',
         theme       : 'mythdice_theme',
         animation: {
            open: 'animated zoomIn',
            close: 'animated zoomOut'
         }
      });


      // do rerolls
      var discard=0;
      var effectiveno = $('#wno').attr('weffectiveno');
      console.log('effective number is: '+effectiveno);
      for (var i=0; i < numRerolls; i++) {
         var result=roll();
         if (result >= effectiveno) {
            $('#woundRollResults').append('<span>'+drawThunderDie(result)+'</span>');
         } else {
            $('#woundRollResults').append('<span class="wfailed" data-result="'+result+'">'+drawThunderDie(result)+'</span>');
            discard++;
         }
      }
      // Deal with wound numbers greater than 6
      if (effectiveno > 6) {
         console.log('Relentlessness: wound no. is greater than 6!');
         $('.wfailed[data-result="6"]').each(function(){
            console.log('processing a failed 6');
            if (effectiveno == 6) {console.log()
               $(this).removeClass('wfailed');
               discard--;
            } else {
               effectiveno--;
               console.log('effective number is: '+effectiveno);
            }
         });
      }
      $('#wno').attr('weffectiveno',effectiveno);


      $('#woundRollResults').append('<p id="wdiscard" data-discard="'+discard+'">discard '+discard+'</p>');
      
      // since we can't use the same gift twice, remove relentlessness
      hideWRelentlessnessU();
   });
});