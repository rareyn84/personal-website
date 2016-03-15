angular.module('personalApp').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/navbarTmpl.html',
    link: function(scope, element, attribute) {
      var a = angular.element(element.children()[3])
      
      a.bind('click', function (e) {
        a.css('color', 'white')
      })
    }
  }
});
