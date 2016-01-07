module.exports = function() {
	var templateUrl = 'templates/partials/source-header.html';
	return {
		restrict: 'AE',
		replace: true,
		scope:{
			// page: '='
		},
		// link: function ($scope, element, attributes) {	
		// 	$scope.$watch('currentIndex',function(){			
		// 	});		

		// 	$scope.$on('$destroy',function(){			  
		// 	});
		// },
		// controller: function ($scope) {
  //       },
		templateUrl: templateUrl
	}
};