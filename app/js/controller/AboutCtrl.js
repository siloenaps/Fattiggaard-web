'use strict';

module.exports = function($scope, $window, $location, CollectionService, LocationFactory) {
 //  $scope.getArticles = CollectionService.getArticles.bind(CollectionService);
 //  $scope.getTexts = CollectionService.getTexts.bind(CollectionService);

 	var documents = 
 	[
		{
			text: 	[],
			files: 	[
						{
							title:'Samarbejdsmodel for skole og museum - Fattiggård eller fjendeland', 
							path:'./assets/pdf/Samarbejdsmodel-for-skole-og-museum_Fattiggård-eller-fjendeland.pdf'
						}
					]
		}
	]

	$scope.getDocuments = function(){
		return documents;
	};

	$scope.select = function(item) {
		$window.open(item.path,'_blank');
	};
};

