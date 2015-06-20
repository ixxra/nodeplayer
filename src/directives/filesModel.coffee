(->
  filesModel = () ->
    link = (scope, elem, attrs) ->

      return

    directive =
      link: link
      restrict: 'A'

    return directive


  angular
    .module('music')
    .directive('filesModel', filesModel)
)()
