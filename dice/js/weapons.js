function loadWeapons() {
   var thisWeapons=simpleStorage.get('globalWeapons');
   if (!thisWeapons) { thisWeapons= [blankWeapon, blankWeapon, blankWeapon]; }
   weapons=thisWeapons;
   renderWeapons();
}

function saveWeapons() {
   simpleStorage.set('globalWeapons', weapons);
   renderWeapons();
}

$( document ).ready(function() {
   $('#wpn1name > input').change(function(){weapons[0].name = $(this).val(); saveWeapons();});
   $('#wpn2name > input').change(function(){weapons[1].name = $(this).val(); saveWeapons();});
   $('#wpn3name > input').change(function(){weapons[2].name = $(this).val(); saveWeapons();});
   $('#wpn1int').click(function(){weapons[0].type.intrinsic = !weapons[0].type.intrinsic; saveWeapons();});
   $('#wpn1rel').click(function(){weapons[0].type.relic     = !weapons[0].type.relic; saveWeapons();});
   $('#wpn1cmp').click(function(){weapons[0].type.companion = !weapons[0].type.companion; saveWeapons();});
   $('#wpn2int').click(function(){weapons[1].type.intrinsic = !weapons[0].type.intrinsic; saveWeapons();});
   $('#wpn2rel').click(function(){weapons[1].type.relic     = !weapons[0].type.relic; saveWeapons();});
   $('#wpn2cmp').click(function(){weapons[1].type.companion = !weapons[0].type.companion; saveWeapons();});
   $('#wpn3int').click(function(){weapons[2].type.intrinsic = !weapons[0].type.intrinsic; saveWeapons();});
   $('#wpn3rel').click(function(){weapons[2].type.relic     = !weapons[0].type.relic; saveWeapons();});
   $('#wpn3cmp').click(function(){weapons[2].type.companion = !weapons[0].type.companion; saveWeapons();});
   $('#wpn1cd1').click(function(){
      if      (!weapons[0].charge[0]){weapons[0].charge[0]=true;}
      else if (!weapons[0].drain[0]) {weapons[0].drain[0]=true;}
      else                           {weapons[0].charge[0]=false;weapons[0].drain[0]=false;}
      saveWeapons();
   });
   $('#wpn1cd2').click(function(){
      if      (!weapons[0].charge[1]){weapons[0].charge[1]=true;}
      else if (!weapons[0].drain[1]) {weapons[0].drain[1]=true;}
      else                           {weapons[0].charge[1]=false;weapons[0].drain[1]=false;}
      saveWeapons();
   });
   $('#wpn1cd3').click(function(){
      if      (!weapons[0].charge[2]){weapons[0].charge[2]=true;}
      else if (!weapons[0].drain[2]) {weapons[0].drain[2]=true;}
      else                           {weapons[0].charge[2]=false;weapons[0].drain[2]=false;}
      saveWeapons();
   });
   $('#wpn2cd1').click(function(){
      if      (!weapons[1].charge[0]){weapons[1].charge[0]=true;}
      else if (!weapons[1].drain[0]) {weapons[1].drain[0]=true;}
      else                           {weapons[1].charge[0]=false;weapons[1].drain[0]=false;}
      saveWeapons();
   });
   $('#wpn2cd2').click(function(){
      if      (!weapons[1].charge[1]){weapons[1].charge[1]=true;}
      else if (!weapons[1].drain[1]) {weapons[1].drain[1]=true;}
      else                           {weapons[1].charge[1]=false;weapons[1].drain[1]=false;}
      saveWeapons();
   });
   $('#wpn2cd3').click(function(){
      if      (!weapons[1].charge[2]){weapons[1].charge[2]=true;}
      else if (!weapons[1].drain[2]) {weapons[1].drain[2]=true;}
      else                           {weapons[1].charge[2]=false;weapons[1].drain[2]=false;}
      saveWeapons();
   });
   $('#wpn3cd1').click(function(){
      if      (!weapons[2].charge[0]){weapons[2].charge[0]=true;}
      else if (!weapons[2].drain[0]) {weapons[2].drain[0]=true;}
      else                           {weapons[2].charge[0]=false;weapons[2].drain[0]=false;}
      saveWeapons();
   });
   $('#wpn3cd2').click(function(){
      if      (!weapons[2].charge[1]){weapons[2].charge[1]=true;}
      else if (!weapons[2].drain[1]) {weapons[2].drain[1]=true;}
      else                           {weapons[2].charge[1]=false;weapons[2].drain[1]=false;}
      saveWeapons();
   });
   $('#wpn3cd3').click(function(){
      if      (!weapons[2].charge[2]){weapons[2].charge[2]=true;}
      else if (!weapons[2].drain[2]) {weapons[2].drain[2]=true;}
      else                           {weapons[2].charge[2]=false;weapons[2].drain[2]=false;}
      saveWeapons();
   });
});

function chargeCompanions() {
   var flag=false;
   if (weapons[0].type.companion) {chargeWeapon(0); flag=true;}
   if (weapons[1].type.companion) {chargeWeapon(1); flag=true;}
   if (weapons[2].type.companion) {chargeWeapon(2); flag=true;}
   if (flag) {
      var n = noty({
         text        : '<span class="gainLosePay">Companions Charged</span><img height="300" src="img/compCharge.svg">',
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
   }
}

function chargeWeapon(weaponNo) {
   if (!weapons[weaponNo].charge[0]) {weapons[weaponNo].charge[0]=true; return;}
   if (!weapons[weaponNo].charge[1]) {weapons[weaponNo].charge[1]=true; return;}
   if (!weapons[weaponNo].charge[2]) {weapons[weaponNo].charge[2]=true; return;}
   saveWeapons();
}

function drainWeapon(weaponNo) {
   if (weapons[weaponNo].charge[0] && !weapons[weaponNo].drain[0]) {weapons[weaponNo].drain[0]=true;}
   if (weapons[weaponNo].charge[1] && !weapons[weaponNo].drain[1]) {weapons[weaponNo].drain[1]=true;}
   if (weapons[weaponNo].charge[2] && !weapons[weaponNo].drain[2]) {weapons[weaponNo].drain[2]=true;}
   saveWeapons();
}

function renderWeapons() {
   $('#wpn1name > input').val(weapons[0].name);
   $('#wpn1cd1, #wpn1cd2, #wpn1cd3').removeClass().addClass('cdReady');
   $('#wpn1int, #wpn1rel, #wpn1cmp').removeClass().addClass('wpnType');
   if (weapons[0].charge[0])      {$('#wpn1cd1').removeClass().addClass('cdCharged');}
   if (weapons[0].charge[1])      {$('#wpn1cd2').removeClass().addClass('cdCharged');}
   if (weapons[0].charge[2])      {$('#wpn1cd3').removeClass().addClass('cdCharged');}
   if (weapons[0].drain[0])       {$('#wpn1cd1').removeClass().addClass('cdDrained');}
   if (weapons[0].drain[1])       {$('#wpn1cd2').removeClass().addClass('cdDrained');}
   if (weapons[0].drain[2])       {$('#wpn1cd3').removeClass().addClass('cdDrained');}
   if (weapons[0].type.intrinsic) {$('#wpn1int').removeClass().addClass('wpnTypeChecked');}
   if (weapons[0].type.relic)     {$('#wpn1rel').removeClass().addClass('wpnTypeChecked');}
   if (weapons[0].type.companion) {$('#wpn1cmp').removeClass().addClass('wpnTypeChecked');}
   $('#wpn2name > input').val(weapons[1].name);
   $('#wpn2cd1, #wpn2cd2, #wpn2cd3').removeClass().addClass('cdReady');
   $('#wpn2int, #wpn2rel, #wpn2cmp').removeClass().addClass('wpnType');
   if (weapons[1].charge[0])      {$('#wpn2cd1').removeClass().addClass('cdCharged');}
   if (weapons[1].charge[1])      {$('#wpn2cd2').removeClass().addClass('cdCharged');}
   if (weapons[1].charge[2])      {$('#wpn2cd3').removeClass().addClass('cdCharged');}
   if (weapons[1].drain[0])       {$('#wpn2cd1').removeClass().addClass('cdDrained');}
   if (weapons[1].drain[1])       {$('#wpn2cd2').removeClass().addClass('cdDrained');}
   if (weapons[1].drain[2])       {$('#wpn2cd3').removeClass().addClass('cdDrained');}
   if (weapons[1].type.intrinsic) {$('#wpn2int').removeClass().addClass('wpnTypeChecked');}
   if (weapons[1].type.relic)     {$('#wpn2rel').removeClass().addClass('wpnTypeChecked');}
   if (weapons[1].type.companion) {$('#wpn2cmp').removeClass().addClass('wpnTypeChecked');}
   $('#wpn3name > input').val(weapons[2].name);
   $('#wpn3cd1, #wpn3cd2, #wpn3cd3').removeClass().addClass('cdReady');
   $('#wpn3int, #wpn3rel, #wpn3cmp').removeClass().addClass('wpnType');
   if (weapons[2].charge[0])      {$('#wpn3cd1').removeClass().addClass('cdCharged');}
   if (weapons[2].charge[1])      {$('#wpn3cd2').removeClass().addClass('cdCharged');}
   if (weapons[2].charge[2])      {$('#wpn3cd3').removeClass().addClass('cdCharged');}
   if (weapons[2].drain[0])       {$('#wpn3cd1').removeClass().addClass('cdDrained');}
   if (weapons[2].drain[1])       {$('#wpn3cd2').removeClass().addClass('cdDrained');}
   if (weapons[2].drain[2])       {$('#wpn3cd3').removeClass().addClass('cdDrained');}
   if (weapons[2].type.intrinsic) {$('#wpn3int').removeClass().addClass('wpnTypeChecked');}
   if (weapons[2].type.relic)     {$('#wpn3rel').removeClass().addClass('wpnTypeChecked');}
   if (weapons[2].type.companion) {$('#wpn3cmp').removeClass().addClass('wpnTypeChecked');}
}

var blankWeapon = {
   'name': '',
   'type': {
      'intrinsic': false,
      'relic': false,
      'companion': false
   },
   'charge': [false, false, false],
   'drain': [false, false, false]
};