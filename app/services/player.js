module.exports = function (angular) {
  function player() {
    return {
      play: function play (){
        console.log('playing');
      }
    };
  };

  angular.module('music').factory('playerService', player);
};
