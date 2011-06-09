// rm-util module
define(function(require, exports, module) {
  var $ = require('jquery');

  function addInputTipEffect(inputObj, tipObj) {
    inputObj.focus(function() {
        tipObj.hide();
        inputObj.css('border-color', 'red');
        inputObj.addClass('inputFocusClass');
    });
    
    inputObj.focusout(function() {
      inputObj.css('border-color', '#CACACA');
      inputObj.removeClass('inputFocusClass');
      if(inputObj.val()) {
        tipObj.hide();
      } else {
        tipObj.show();
      }
    });
  }
  
  exports.addInputTipEffect = addInputTipEffect;
  
});