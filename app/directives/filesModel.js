module.exports  = function filesModel(angular) {
  function directive() {
    return function(scope, elm, attrs) {
      elm.on('change', function(event) {
        scope.$apply(function (scope) {
          var Track = require('../models/track');
          event.target.value.split(';').forEach(function (file) {
            scope[attrs.filesModel].push(Track.fromLocation(file));
          });
        });
      });
    }
  };

  angular.module('music').directive('filesModel', directive);
};
