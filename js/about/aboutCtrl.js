angular.module('personalApp').controller('aboutCtrl', function($scope, mainService) {
  $scope.images = mainService.lifeImages;

})
