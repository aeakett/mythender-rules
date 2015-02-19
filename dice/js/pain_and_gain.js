function loseThunder(num) {
   var n = noty({
      text        : '<span class="gainLosePay">lose '+num+' Thunder</span><img height="280" src="img/thunderDiceRing.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveThunder(parseInt(getThunder())-parseInt(num));
}
function gainThunder(num) {
   var n = noty({
      text        : '<span class="gainLosePay">gain '+num+' Thunder</span><img height="280" src="img/thunderDiceRing.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveThunder(parseInt(getThunder())+parseInt(num));
}
function payMight(num) {
   var n = noty({
      text        : '<span class="gainLosePay">pay '+num+' Might</span><img height="300" src="img/fist.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveMight(parseInt(getMight())-parseInt(num));
}
function gainMight(num) {
   var n = noty({
      text        : '<span class="gainLosePay">gain '+num+' Might</span><img height="300" src="img/fist.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveMight(parseInt(getMight())+parseInt(num));
}
function payLightning(num) {
   var n = noty({
      text        : '<span class="gainLosePay">pay '+num+' Lightning</span><img height="300" src="img/lightning.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveLightning(parseInt(getLightning())-parseInt(num));
}
function gainLightning(num) {
   var n = noty({
      text        : '<span class="gainLosePay">gain '+num+' Lightning</span><img height="300" src="img/lightning.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveLightning(parseInt(getLightning())+parseInt(num));
}
function gainStorm(num) {
   var n = noty({
      text        : '<span class="gainLosePay">gain '+num+' Storm Dice</span><img height="300" src="img/stormDiceRing.svg">',
      type        : 'alert',
      maxVisible  : 1,
      dismissQueue: true,
      modal       : true,
      layout      : 'center',
      theme       : 'mythdice_theme',
      animation: {
         open: 'animated bounceInDown',
         close: 'animated bounceOutDown'
      }
   });
   saveStorm(parseInt(getStorm())+parseInt(num));
}