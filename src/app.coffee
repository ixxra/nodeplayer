music = angular.module 'music', []

music.controller 'filesCtrl', ($scope) ->
  $scope.fileList = 'hello world'
  $scope.go = () ->
    console.log("GO!")

#(require './app/controllers/main') angular
