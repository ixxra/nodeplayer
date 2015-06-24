module.exports  = function mediaPlayer(angular) {
  function directive() {
    return function(scope, elm, attrs) {
      var audio = elm[0];
      for (var prop in attrs.$attr) {
        if (prop.startsWith('on')){
          audio[prop.toLowerCase()] = function () {
              scope.$apply(function(scope) {
                scope[attrs[prop]]();
              });
            };
        }
      }
      console.log(elm);
      console.log(scope);
      console.log(attrs);
    }
  };

  angular.module('music').directive('mediaPlayer', directive);
};
