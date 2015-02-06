$('input[name="show"]').change(function(){
   switch ($(this).attr('value')) {
      case 'all':
         $('.enderOnly, .mythOnly').show();
			$('.exit-off-canvas').click();
         break;
      case 'eo':
         $('.enderOnly').show();
         $('.mythOnly').hide();
			$('.exit-off-canvas').click();
         break;
      case 'mo':
         $('.mythOnly').show();
         $('.enderOnly').hide();
			$('.exit-off-canvas').click();
         break;
   }
});
