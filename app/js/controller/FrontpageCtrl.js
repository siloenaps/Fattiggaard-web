'use strict';

module.exports = function($scope, LocationFactory, MainmenuService) {
	$scope.selectByIndex = function(index) {
		var item = MainmenuService.getItemByIndex(index);
		MainmenuService.item = item;
		LocationFactory.go(item);
	};
};
