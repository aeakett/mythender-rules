function roll() {
   return Math.floor((Math.random()*6)+1);
}

function drawThunderDie(num) {
   return drawDie(num, 'thunder');
}
function drawStormDie(num) {
   return drawDie(num, 'storm');
}
function drawBonusThunderDie(num) {
   return drawDie(num, 'bonusThunder');
}
function drawBonusStormDie(num) {
   return drawDie(num, 'bonusStorm');
}
function drawThunderDie(num) {
   return drawDie(num, 'thunder');
}
function drawMythicDie(num) {
   return drawDie(num, 'mythic');
}
function drawDie(num, type) {
   var classPrefix=type;
   switch (type) {
   case 'thunder':
      var diePrefix = 't';
      break;
   case 'bonusThunder':
      var diePrefix = 'bt';
      break;
   case 'storm':
      var diePrefix = 's';
      break;
   case 'bonusStorm':
      var diePrefix = 'bs';
      break;
   case 'mythic':
      var diePrefix = 'm';
      break;
   }
   return '<img class="die '+classPrefix+'Die" src="img/'+diePrefix+'d'+num+'.svg" />';
}