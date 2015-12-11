'use strict';

module.exports = function($scope, $location, MainmenuService, LocationFactory) {

  $scope.getItems = MainmenuService.getItems.bind(MainmenuService);

  $scope.show = function() {
    if(MainmenuService.item === undefined)
      return false;
    
    return MainmenuService.item.title !== 'SPIL';
  };
};

