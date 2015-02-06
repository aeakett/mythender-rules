$('#showAllGifts').click(function(){
   $('.enderOnly, .mythOnly').show();
	$('#showMythenderGifts, #showMythGifts').removeClass('giftSelected').addClass('giftUnselected');
	$(this).removeClass('giftUnselected').addClass('giftSelected');
   $('.exit-off-canvas').click();
});

$('#showMythenderGifts').click(function(){
   $('.enderOnly').show();
   $('.mythOnly').hide();
	$('#showAllGifts, #showMythGifts').removeClass('giftSelected').addClass('giftUnselected');
	$(this).removeClass('giftUnselected').addClass('giftSelected');
   $('.exit-off-canvas').click();
});

$('#showMythGifts').click(function(){
   $('.mythOnly').show();
   $('.enderOnly').hide();
   $('#showAllGifts, #showMythenderGifts').removeClass('giftSelected').addClass('giftUnselected');
	$(this).removeClass('giftUnselected').addClass('giftSelected');
   $('.exit-off-canvas').click();
});
