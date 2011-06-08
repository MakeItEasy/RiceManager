// rm-util module
define(function(require, exports, module) {
  var $ = require('jquery');

  function addInputTipEffect(inputObj, tipObj) {
    inputObj.focus(function() {
        tipObj.hide();
    });
    
    inputObj.focusout(function() {
      if(inputObj.val()) {
        tipObj.hide();
      } else {
        tipObj.show();
      }
    });
  }
  
  exports.addInputTipEffect = addInputTipEffect;
  
});