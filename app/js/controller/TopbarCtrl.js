'use strict';

module.exports = function($scope, $location, MainmenuService, LocationFactory) {

  	$scope.getItems = MainmenuService.getItems.bind(MainmenuService);

  	$scope.selectByIndex = function(index) {
		var item = MainmenuService.getItemByIndex(index);
		MainmenuService.item = item;
		LocationFactory.go(item.path);
	};

	$scope.show = function() {
		if(MainmenuService.item === undefined)
			return false;

		return MainmenuService.item.title !== 'SPIL';
	};
};

