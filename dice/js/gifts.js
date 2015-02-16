function saveGifts() {
   simpleStorage.set('globalGifts', gifts);
   renderGifts();
}

function loadGifts() {
   var thisGifts=simpleStorage.get('globalGifts');
   if (!thisGifts) { thisGifts=noGifts; }
   gifts=thisGifts;
   renderGifts();
}

function addGift(giftID) {
   gifts[giftID]['has']=true;
   saveGifts();
}

function removeGift(giftID) {
   gifts[giftID]['has']=false;
   saveGifts();
}

function renderGifts() {
   $('#giftList').html('')
   for (var i in gifts) {
      if (gifts.hasOwnProperty(i)) {
         if (gifts[i]['has']) {
            $('#giftList').append(gifts[i]['displayName']);
         }
      }
   }
}

$( document ).ready(function() {

   $('#addGiftButton').click(function(){
      $('#addGiftSelect, #addGiftAddButton').show();
   });

   $('#addGiftAddButton').click(function(){
      addGift($('#addGiftSelect').val());
      $('#addGiftSelect, #addGiftAddButton').hide();
      renderGifts();
   });

   $('#delGiftButton').click(function(){
      for (var i in gifts) {
         if (gifts.hasOwnProperty(i)) {
            if (gifts[i].has) {
               $('#delGiftSelect').append($('<option>', {
                  value: i,
                  text: gifts[i].displayName
               }));
            }
         }
      }
      $('#delGiftSelect, #delGiftRemoveButton').show();
   });

   $('#delGiftRemoveButton').click(function(){
      removeGift($('#delGiftSelect').val());
      $('#delGiftSelect, #delGiftRemoveButton').hide();
      renderGifts();
      $('#delGiftSelect').empty();
   });

});




function describeBlazeOfGlory(){
   var n = noty({
      text        : '<strong>Blaze of Glory</strong><br><br>Whenever you roll the <span class="giftHighlight">Mythic die</span> in Battle, roll a second Mythic die and combine the results. This costs no Might. If you have this Gift, you <em>must</em> do this.<br><br>This is considered a single die for the purposes of risking your Fate, so you’re almost guaranteed to progress your Fate, as you’ll rarely get a result lower than 4.',
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
}

function describeBloodlust(){
   var n = noty({
      text        : '<strong>Bloodlust</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to the Thunder dice lost.<br><br>If a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.',
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
}

function describeBloodlustDangerousUpgrade(){
   var n = noty({
      text        : '<strong>Bloodlust</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to the Thunder dice lost.<br><br>If a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.<br><br><strong>Dangerous Upgrade</strong><br>Pay <span class="giftHighlight">3 more Might</span>, gain Lightning equal to twice Thunder dice lost instead.',
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
}

function describeBloodlustQuickUpgrade(){
   var n = noty({
      text        : '<strong>Bloodlust</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when you’re Wounded and have lost Thunder dice. Gain Lightning tokens equal to the Thunder dice lost.<br><br>If a Mythender dies and comes back, all the Thunder dice lost before coming back count for this Gift.<br><br><strong>Quick Upgrade</strong><br>Pay <span class="giftHighlight">1 fewer Might</span> to use this Gift.',
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
}

function describeChanneledHatred(){
   var n = noty({
      text        : '<strong>Channeled Hatred</strong><br><br>At the time of taking this gift, gain Lighting equal to twice the number of Gifts you have taken (including this one). When doing this, describe how you are ripping raw power from the Mythic World and pouring it into your Weapons and body.<br><br>You may take this Gift multiple times, but only once per round.',
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
}

function describeDualWield(){
   var n = noty({
      text        : '<strong>Dual Wield</strong><br><br>Pay <span class="giftHighlight">1 Might token</span> when acting; you may charge two Weapons, or charge one Weapon and drain another, on the same turn. You must incorporate both Weapons into your description.<br><br>Alternatively, pay <span class="giftHighlight">3 Might tokens</span> to drain two Weapons on the same turn.',
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
}

function describeFastStrike(){
   var n = noty({
      text        : '<strong>Fast Strike</strong><br><br>Pay <span class="giftHighlight">1 Might token</span> when acting, you may charge and drain with a Weapon on the same turn. Incorporate some advanced tactic with this Weapon in your description. (The charge and drain both happen before dice are gathered.)<br><br>This effect may stack with <span class="giftHighlight">Dual Wield</span>, but only for one Weapon you wish to drain.',
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
}

function describeFocusedOnslaught(){
   var n = noty({
      text        : '<strong>Focused Onslaught</strong><br><br>When charging a Blight, mark two charge boxes. This costs no Might.<br><br>You may also pay <span class="giftHighlight">2 Might tokens</span> to gain double bonus Thunder from draining a Blight, but then the Blight is destroyed. Describe how you tax it beyond existence.',
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
}

function describeGrievousHarm(){
   var n = noty({
      text        : '<strong>Grievous Harm</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when Wounding, before the Wound is rolled. Raise the target’s <span class="giftHighlight">Wound number</span> by 1. Describe how your Wound is severe and vicious. Spend before the target rolls the Wound.<br><br><em>Note</em>: this doesn’t change what <span class="giftHighlight">Wound box</span> is checked, just the number during this action.',
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
}

function describeGrievousHarmViciousUpgrade(){
   var n = noty({
      text        : '<strong>Grievous Harm</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when Wounding, before the Wound is rolled. Raise the target’s <span class="giftHighlight">Wound number</span> by 1. Describe how your Wound is severe and vicious. Spend before the target rolls the Wound.<br><br><em>Note</em>: this doesn’t change what <span class="giftHighlight">Wound box</span> is checked, just the number during this action.<br><br><strong>Vicious Upgrade</strong><br>Pay <span class="giftHighlight">2 more Might</span>, increase the target’s Wound number by 2 instead of 1.',
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
}

function describeGrievousHarmPreciseUpgrade(){
   var n = noty({
      text        : '<strong>Grievous Harm</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when Wounding, before the Wound is rolled. Raise the target’s <span class="giftHighlight">Wound number</span> by 1. Describe how your Wound is severe and vicious. Spend before the target rolls the Wound.<br><br><em>Note</em>: this doesn’t change what <span class="giftHighlight">Wound box</span> is checked, just the number during this action.<br><br><strong>Precise Upgrade</strong><br>May pay after seeing the result of the target’s Wound roll. Must pay <span class="giftHighlight">1 more Might</span> if done after the Wound roll.',
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
}

function describeGrievousHarmAidingUpgrade(){
   var n = noty({
      text        : '<strong>Grievous Harm</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> when Wounding, before the Wound is rolled. Raise the target’s <span class="giftHighlight">Wound number</span> by 1. Describe how your Wound is severe and vicious. Spend before the target rolls the Wound.<br><br><em>Note</em>: this doesn’t change what <span class="giftHighlight">Wound box</span> is checked, just the number during this action.<br><br><strong>Aiding Upgrade</strong><br>Pay <span class="giftHighlight">1 more Might</span> during an ally’s turn, they gain this benefit.',
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
}

function describeHarbingerOfStorm(){
   var n = noty({
      text        : '<strong>Harbinger of Storm</strong><br><br>Add 2 to your Storm rating. This costs no Might.',
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
}

function describeHarbingerOfStormRagingUpgrade(){
   var n = noty({
      text        : '<strong>Harbinger of Storm</strong><br><br>Add 2 to your Storm rating. This costs no Might.<br><br><strong>Raging Upgrade</strong><br>Add 2 more to your Storm rating, for a total of 4.',
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
}

function describeHarbingerOfStormSurgingUpgrade(){
   var n = noty({
      text        : '<strong>Harbinger of Storm</strong><br><br>Add 2 to your Storm rating. This costs no Might.<br><br><strong>Surging Upgrade</strong><br>Pay <span class="giftHighlight">2 Might tokens</span> when acting; gain double Thunder from your Storm dice. Pay before rolling. Describe how you’re carefully plotting the action to full advantage.',
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
}

function describeMasterTactician(){
   var n = noty({
      text        : '<strong>Master Tactician</strong><br><br>Pay <span class="giftHighlight">1 Might token</span> on your action or an ally’s action, move up to 5 Thunder dice from yourself to that willing character or vice versa. Must have that Mythender’s permission. Describe how you two are cooperating and show your cunning plan.<br><br>Pay <span class="giftHighlight">1 more Might</span> for every 5 additional Thunder dice you move.',
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
}

function describeMasterTacticianForesightUpgrade(){
   var n = noty({
      text        : '<strong>Master Tactician</strong><br><br>Pay <span class="giftHighlight">1 Might token</span> on your action or an ally’s action, move up to 5 Thunder dice from yourself to that willing character or vice versa. Must have that Mythender’s permission. Describe how you two are cooperating and show your cunning plan.<br><br>Pay <span class="giftHighlight">1 more Might</span> for every 5 additional Thunder dice you move.<br><br><strong>Foresight Upgrade</strong><br>May move Thunder dice from any willing character to any other willing character, not just involving you.',
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
}

function describeMasterTacticianQuickUpgrade(){
   var n = noty({
      text        : '<strong>Master Tactician</strong><br><br>Pay <span class="giftHighlight">1 Might token</span> on your action or an ally’s action, move up to 5 Thunder dice from yourself to that willing character or vice versa. Must have that Mythender’s permission. Describe how you two are cooperating and show your cunning plan.<br><br>Pay <span class="giftHighlight">1 more Might</span> for every 5 additional Thunder dice you move.<br><br><strong>Quick Upgrade</strong><br>Pay <span class="giftHighlight">1 fewer Might</span> to use these benefits.',
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
}

function describeMightyPresence(){
   var n = noty({
      text        : '<strong>Mighty Presence</strong><br><br>On a Titanic action, gain 4 Lightning tokens instead of 3 for each successful Thunder die.',
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
}

function describeRelentlessness(){
   var n = noty({
      text        : '<strong>Relentlessness</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> after rolling a Legendary or Mythic action. Reroll failed Storm or Thunder dice (including any failed bonus Storm or Thunder dice). Spend after rolling. Describe how you’re pushing harder to recover from a fumble.<br><br>Pay <span class="giftHighlight">2 more Might</span> tokens to use on a Titanic action.<br><br>Pay <span class="giftHighlight">double Might cost</span> to reroll failed Storm <em>and</em> Thunder dice.',
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
}

function describeRelentlessnessAidingUpgrade(){
   var n = noty({
      text        : '<strong>Relentlessness</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> after rolling a Legendary or Mythic action. Reroll failed Storm or Thunder dice (including any failed bonus Storm or Thunder dice). Spend after rolling. Describe how you’re pushing harder to recover from a fumble.<br><br>Pay <span class="giftHighlight">2 more Might</span> tokens to use on a Titanic action.<br><br>Pay <span class="giftHighlight">double Might cost</span> to reroll failed Storm <em>and</em> Thunder dice.<br><br><strong>Aiding Upgrade</strong><br>May pay to affect a willing character on their turn.',
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
}

function describeRelentlessnessUnrepentantUpgrade(){
   var n = noty({
      text        : '<strong>Relentlessness</strong><br><br>Pay <span class="giftHighlight">2 Might tokens</span> after rolling a Legendary or Mythic action. Reroll failed Storm or Thunder dice (including any failed bonus Storm or Thunder dice). Spend after rolling. Describe how you’re pushing harder to recover from a fumble.<br><br>Pay <span class="giftHighlight">2 more Might</span> tokens to use on a Titanic action.<br><br>Pay <span class="giftHighlight">double Might cost</span> to reroll failed Storm <em>and</em> Thunder dice.<br><br><strong>Unrepentant Upgrade</strong><br>Pay <span class="giftHighlight">3 Might tokens</span> when Wounded, use this benefit on your Wound roll.',
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
}

function describeSureness(){
   var n = noty({
      text        : '<strong>Sureness</strong><br><br>Pay <span class="giftHighlight">3 Might tokens</span> during a Legendary or Mythic action; count <span class="stormDie">3</span>s and higher as successes on Storm and Thunder. Pay <span class="giftHighlight">2 more Might tokens</span> to do so on a Titanic action. Must pay before rolling.',
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
}

function describeSurenessPreciseUpgrade(){
   var n = noty({
      text        : '<strong>Sureness</strong><br><br>Pay <span class="giftHighlight">3 Might tokens</span> during a Legendary or Mythic action; count <span class="stormDie">3</span>s and higher as successes on Storm and Thunder. Pay <span class="giftHighlight">2 more Might tokens</span> to do so on a Titanic action. Must pay before rolling.<br><br><strong>Precise Upgrade</strong><br>Pay <span class="giftHighlight">1 more Might</span> to use this Gift after rolling instead of before.',
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
}

function describeSurenessQuickUpgrade(){
   var n = noty({
      text        : '<strong>Sureness</strong><br><br>Pay <span class="giftHighlight">3 Might tokens</span> during a Legendary or Mythic action; count <span class="stormDie">3</span>s and higher as successes on Storm and Thunder. Pay <span class="giftHighlight">2 more Might tokens</span> to do so on a Titanic action. Must pay before rolling.<br><br><strong>Quick Upgrade</strong><br>Pay <span class="giftHighlight">1 fewer Might</span> to use these benefits.',
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
}

function describeSurenessUnyieldingUpgrade(){
   var n = noty({
      text        : '<strong>Sureness</strong><br><br>Pay <span class="giftHighlight">3 Might tokens</span> during a Legendary or Mythic action; count <span class="stormDie">3</span>s and higher as successes on Storm and Thunder. Pay <span class="giftHighlight">2 more Might tokens</span> to do so on a Titanic action. Must pay before rolling.<br><br><strong>Unyielding Upgrade</strong><br>Pay <span class="giftHighlight">2 more Might</span>, count <span class="stormDie">2</span>s and higher as successes.',
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
}

function describeSurgeOfMight(){
   var n = noty({
      text        : '<strong>Surge of Might</strong><br><br>At the time of taking this Gift, gain 5 Might tokens. Describe how you acquire and drain this new wellspring of power.<br><br>You may take this Gift multiple times, but only once per round.',
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
}

function describeSwiftness(){
   var n = noty({
      text        : '<strong>Swiftness</strong><br><br>Pay <span class="giftHighlight">8 Might tokens</span> to take an additional action. This action must be after your first action in this round, but cannot be immediately after your first. Myths cannot use this at the end of the round—that would given them two actions in a row (the Swiftness action and the first action of the next round).<br><br>Mythenders who use Swiftness must make a Mythic or Titanic action.<br><br>If more than one person wants to use this Gift at the same time, the rule: if the Myth is one of them, the Myth gets to go. Otherwise, the Mythenders decide amongst themselves.',
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
}

function describeSwiftnessAidingUpgrade(){
   var n = noty({
      text        : '<strong>Swiftness</strong><br><br>Pay <span class="giftHighlight">8 Might tokens</span> to take an additional action. This action must be after your first action in this round, but cannot be immediately after your first. Myths cannot use this at the end of the round—that would given them two actions in a row (the Swiftness action and the first action of the next round).<br><br>Mythenders who use Swiftness must make a Mythic or Titanic action.<br><br>If more than one person wants to use this Gift at the same time, the rule: if the Myth is one of them, the Myth gets to go. Otherwise, the Mythenders decide amongst themselves.<br><br><strong>Aiding Upgrade</strong><br>Allow another willing character to take this extra turn, instead of you. That character may only benefit from Swiftness once per round.',
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
}

function describeSwiftnessQuickUpgrade(){
   var n = noty({
      text        : '<strong>Swiftness</strong><br><br>Pay <span class="giftHighlight">8 Might tokens</span> to take an additional action. This action must be after your first action in this round, but cannot be immediately after your first. Myths cannot use this at the end of the round—that would given them two actions in a row (the Swiftness action and the first action of the next round).<br><br>Mythenders who use Swiftness must make a Mythic or Titanic action.<br><br>If more than one person wants to use this Gift at the same time, the rule: if the Myth is one of them, the Myth gets to go. Otherwise, the Mythenders decide amongst themselves.<br><br><strong>Quick Upgrade</strong><br>Pay <span class="giftHighlight">2 fewer Might</span> to use these benefits.',
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
}

function describeSwiftnessBloodyUpgrade(){
   var n = noty({
      text        : '<strong>Swiftness</strong><br><br>Pay <span class="giftHighlight">8 Might tokens</span> to take an additional action. This action must be after your first action in this round, but cannot be immediately after your first. Myths cannot use this at the end of the round—that would given them two actions in a row (the Swiftness action and the first action of the next round).<br><br>Mythenders who use Swiftness must make a Mythic or Titanic action.<br><br>If more than one person wants to use this Gift at the same time, the rule: if the Myth is one of them, the Myth gets to go. Otherwise, the Mythenders decide amongst themselves.<br><br><strong>Bloody Upgrade</strong><br>Pay <span class="giftHighlight">5 Might tokens</span>, act before the Myth in battle. Only one Mythender may take advantage of this ability for any given battle. Note that the Myth’s Wound cost will be tripled during this action.',
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
}

var noGifts = {
   "blazeOfGlory": {"displayName": "Blaze of Glory", "has": false},
   "bloodlust": {"displayName": "Bloodlust", "has": false},
   "bloodlust-dangerous": {"displayName": "Bloodlust - Dangerous", "has": false},
   "bloodlust-quick": {"displayName": "Bloodlust - Quick", "has": false},
   "channeledHatred": {"displayName": "Channeled Hatred", "has": false},
   "dualWield": {"displayName": "Dual Wield", "has": false},
   "fastStrike": {"displayName": "Fast Strike", "has": false},
   "focusedOnslaught": {"displayName": "Focused Onslaught", "has": false},
   "grievousHarm": {"displayName": "Grievous Harm", "has": false},
   "grievousHarm-vicious": {"displayName": "Grievous Harm - Vicious", "has": false},
   "grievousHarm-precise": {"displayName": "Grievous Harm - Precise", "has": false},
   "grievousHarmaiding": {"displayName": "Grievous Harm - Aiding", "has": false},
   "harbingerOfStorm": {"displayName": "Harbinger of Storm", "has": false},
   "harbingerOfStorm-raging": {"displayName": "Harbinger of Storm - Raging", "has": false},
   "harbingerOfStorm-surging": {"displayName": "Harbinger of Storm - Surging", "has": false},
   "masterTactician": {"displayName": "Master Tactician", "has": false},
   "mightyPresence": {"displayName": "Mighty Presence", "has": false},
   "relentlessness": {"displayName": "Relentlessness", "has": false},
   "relentlessness-aiding": {"displayName": "Relentlessness - Aiding", "has": false},
   "relentlessness-unrepentant": {"displayName": "Relentlessness - Unrepentant", "has": false},
   "sureness": {"displayName": "Sureness", "has": false},
   "sureness-precise": {"displayName": "Sureness - Precise", "has": false},
   "sureness-quick": {"displayName": "Sureness - Quick", "has": false},
   "sureness-unyielding": {"displayName": "Sureness - Unyielding", "has": false},
   "surgeOfMight": {"displayName": "Surge of Might", "has": false},
   "swiftness": {"displayName": "Swiftness", "has": false},
   "swiftness-aiding": {"displayName": "Swiftness - Aiding", "has": false},
   "swiftness-quick": {"displayName": "Swiftness - Quick", "has": false},
   "swiftness-bloody": {"displayName": "Swiftness - Bloody", "has": false}
};