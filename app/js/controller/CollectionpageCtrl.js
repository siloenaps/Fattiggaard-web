'use strict';

module.exports = function($scope, $window, $location, CollectionService, LocationFactory) {
  $scope.getArticles = CollectionService.getArticles.bind(CollectionService);
  $scope.getTexts = CollectionService.getTexts.bind(CollectionService);

	$scope.select = function(item) {
		$window.open(item.path,'_blank');
	};
};

