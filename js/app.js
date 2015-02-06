// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
   offcanvas : {
      // Sets method in which offcanvas opens.
      // [ move | overlap_single | overlap ]
      open_method: 'overlap_single'
   }
});

$(document).ready(function(){
   $('.navList .toggle').click(function(){
      $(this).next().slideToggle();
      if ($(this).text() == '+') {
         $(this).text('–');
      } else {
         $(this).text('+');
      }
   });
});
