module.exports = function LOADER(angular){
    function mediaPlayer($scope) {
        var track = require('../models/track');

        $scope.fileList = [];
        $scope.current = track.new();

        $scope.play = function play(track) {
          $scope.current = track;
        };

        $scope.next = function next () {
          var idx = $scope.fileList.indexOf($scope.current);
          if (idx > -1 && idx < $scope.fileList.length - 1) {
            $scope.current = $scope.fileList[idx + 1];
          }
        };

        $scope.prev = function prev () {
          var idx = $scope.fileList.indexOf($scope.current);
          if (idx > 0) {
            $scope.current = $scope.fileList[idx - 1];
          }
        };
    };
    angular.module('music').controller('MediaPlayer', mediaPlayer);
}
