'use strict';

module.exports = function($scope, $window, GuideService) {
	$scope.getItems = GuideService.getItems.bind(GuideService);

	$scope.select = function(item) {
		GuideService.item = item;
		$window.open(item.path,'_blank');
	};
};
