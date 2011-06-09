// init the config of seajs
seajs.config({
  base: '/static/',
  alias: {
    'jquery': 'js/lib/jquery.js',
    'rm_util': 'js/common/rm_util.js'
  }
});


// index module
define(function(require, exports, module) {
  var $ = require('jquery');
  var rm_util = require('rm_util');
  alert($);
  
  $(document).ready(function() {
    // the process after the page loaded
    // alert("hello world hello");
    // add tip effect on email
    rm_util.addInputTipEffect($("#email"), $("#efs"));
    rm_util.addInputTipEffect($("#password"), $("#pfs"));
  });
  
});