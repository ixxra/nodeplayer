template = require '../views/main'

mainCtrl = ($scope) ->
  $scope.message = template


controller = (angular) ->
  (angular.module 'music').controller 'mainCtrl', mainCtrl

module.exports = controller
