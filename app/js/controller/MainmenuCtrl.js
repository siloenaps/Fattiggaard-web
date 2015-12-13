'use strict';

module.exports = function($scope, $window, $location, MainmenuService, LocationFactory) {
  console.log('MainmenuCtrl');
  
  $scope.getItems = MainmenuService.getItems.bind(MainmenuService);

  $scope.show = function() {
    var list = $window.location.href.split('/');
    return list[list.length - 1] !== 'spil';
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

