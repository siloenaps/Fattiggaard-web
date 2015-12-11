'use strict';

module.exports = function($scope, $location, MainmenuService, LocationFactory) {

  $scope.getItems = MainmenuService.getItems.bind(MainmenuService);

  $scope.show = function() {
    if(MainmenuService.item === undefined)
      return false;
    
    return MainmenuService.item.title !== 'SPIL';
  };

  $scope.getCurrentPage = function() {
    if(MainmenuService.item === undefined)
      return;

    console.log(MainmenuService.item.title);
    return MainmenuService.item.title;
  };

  $scope.select = function(item) {
    MainmenuService.item = item;
    LocationFactory.go(item.path);
  };

  $scope.getCssClass = function(item) {
  	if (item === MainmenuService.item) {
      return ['mainmenu-item-active'];
    } else {
      return ['mainmenu-item-inactive'];
    }
  }; 
};

