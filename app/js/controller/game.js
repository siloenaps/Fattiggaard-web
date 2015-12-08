'use strict';

module.exports = function($scope, MainmenuService) {

  $scope.getItems = MainmenuService.getItems.bind(MainmenuService);

  $scope.select = function(item) {
    $scope.$parent.item = item;
  };

  $scope.getCssClass = function(item) {
  	if (item === $scope.$parent.item) {
      return ['mainmenu-item-active'];
    } else {
      return ['mainmenu-item-inactive'];
    }
  };

};

