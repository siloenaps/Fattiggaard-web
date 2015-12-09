'use strict';

module.exports = function($scope, LocationFactory, MainmenuService) {
  $scope.selectByIndex = function(index) {
    var item = MainmenuService.getItemByIndex(index);
    $scope.$parent.item = item;
    LocationFactory.go(item.path);
  };
};
