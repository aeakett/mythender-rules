$('input[name="show"]').change(function(){
   switch ($(this).attr('value')) {
      case 'all':
         $('.enderOnly, .mythOnly').show();
         break;
      case 'eo':
         $('.enderOnly').show();
         $('.mythOnly').hide();
         break;
      case 'mo':
         $('.mythOnly').show();
         $('.enderOnly').hide();
         break;
   }
});
