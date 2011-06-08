// The main code file of your application

// The setup of the basic Akshell library
require('ak').setup();

// var sk = require('ak');

// var $ = require('./jquery-1.6.1.min');
// require('tests');

// The index page handler
var IndexHandler = Handler.subclass(
  {
    get: function (request) {
      return render(
        '../pages/index.html',
        {
        });
    }
  });


// The URL -> handler mapping
exports.root = new URLMap(
  IndexHandler, 'index');
