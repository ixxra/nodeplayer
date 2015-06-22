module.exports = function LOADER(angular){
  var spawn = require ('child_process').spawn;

  function ctrl ($scope) {
    $scope.play = function play(fname){
      console.log(fname);
      var ffplay = spawn('ffplay',[fname]);
      ffplay.stdout.on('data', function (data){
        console.log('DATA:', data);
      });
    };
  };

  angular.module('music').controller('filesCtrl', ctrl);
};
