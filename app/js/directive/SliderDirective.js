module.exports = function($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
	// scope.imagesTotal: scope.images.length,
    link: function (scope, elem, attrs) {
	
		scope.currentIndex = 0;

		scope.next=function(){
			scope.direction = 1;
			(scope.currentIndex < scope.images.length - 1) ? scope.currentIndex++ : scope.currentIndex = 0;
		};
		
		scope.prev=function(){
			scope.direction = -1;
			(scope.currentIndex > 0) ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
		};
		
		scope.$watch('currentIndex',function(){			
			scope.images.forEach(function(image){
				image.visible = false;
			});
			scope.images[scope.currentIndex].visible = true;
			console.log(scope.images[scope.currentIndex])
			// TweenLite.to(scope.images[scope.currentIndex], 1, { left: 512 * scope.direction, onComplete: function(){
	  //         console.log('done');
	  //       } });
		});
		
		/* Start: For Automatic slideshow*/
		
		// var timer;
		
		// var sliderFunc=function(){
		// 	timer=$timeout(function(){
		// 		scope.next();
		// 		timer=$timeout(sliderFunc,5000);
		// 	},5000);
		// };
		
		// sliderFunc();
		
		scope.$on('$destroy',function(){
			  // $timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'templates/tpl_slider.html'
  }
};