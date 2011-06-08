// index module
define(function(require, exports, module) {
  var $ = require('jquery');
  var rm_util = require('rm_util');
  
  
  $(document).ready(function() {
    // the process after the page loaded
    alert("hello world hello");
    // add tip effect on email
    rm_util.addInputTipEffect($("#email"), $("#efs"));
    rm_util.addInputTipEffect($("#password"), $("#pfs"));
  });
  
});