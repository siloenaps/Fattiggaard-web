'use strict';

module.exports = function($scope, $window, $location, SliderService) {
  $scope.images = SliderService.getItems(); 
};

