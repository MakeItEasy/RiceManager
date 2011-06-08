alert('start');

seajs.config({
  base: '/static/',
  alias: {
    'jquery': 'js-lib/jquery-1.6.1.min'
  }
});

alert('after config');

define(function(require) {

alert('1');
  var $ = require('jquery');
alert('2'+$);
  $(document).ready(function() {
    alert("hello world hello");
  });
  alert('3');

});