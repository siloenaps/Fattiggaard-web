'use strict';

module.exports = function($scope, $window, $location, SidebarService, LocationFactory) {

  $scope.getItems = SidebarService.getItems.bind(SidebarService);

  $scope.show = function() {
    var list = $window.location.href.split('/');
    return list[list.length - 1] !== 'spil';
  };

  $scope.getCurrentPage = function() {
    if(SidebarService.item === undefined)
      return;

    console.log(SidebarService.item.title);
    return SidebarService.item.title;
  };

  $scope.select = function(item) {
    // SidebarService.item = item;
    LocationFactory.go(item);
  };

  $scope.getCssClass = function(item) {
  	if (item === SidebarService.item) {
      return ['sidebar-item-active'];
    } else {
      return ['sidebar-item-inactive'];
    }
  }; 
};

