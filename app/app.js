(function() {
  angular.module('music', []);
  function load(dir) {
    var fs = require('fs');

    fs.readdirSync(dir)
      .filter(function isJs(file){
        return file.endsWith('.js');
      })
      .forEach(function load(js) {
        require(dir + js)(angular);
      });
  }

  load('./app/controllers/');
  load('./app/services/');
  load('./app/directives/');
}).call(this);
