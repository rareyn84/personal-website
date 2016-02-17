angular.module('personalApp').directive('pageTitle', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attribute) {
      element.css('font-family', 'La Belle Aurore, cursive')
      element.css('font-size', '80px'),
      element.css('text-align', 'center'),
      element.css('color', '#167587')
    }

  }
});
