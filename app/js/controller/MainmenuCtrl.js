'use strict';

module.exports = function($scope, $location, MainmenuService, LocationFactory) {

  $scope.getItems = MainmenuService.getItems.bind(MainmenuService);

  $scope.select = function(item) {
    $scope.$parent.item = item;
    LocationFactory.go(item.path);
  };

  $scope.getCssClass = function(item) {
  	if (item === $scope.$parent.item) {
      return ['mainmenu-item-active'];
    } else {
      return ['mainmenu-item-inactive'];
    }
  };

};

