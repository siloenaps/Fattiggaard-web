'use strict';

module.exports = function($location, $window, $route, MainmenuService) {
	return {
        go: function (path) {
            this.currentPath = path;
			$location.path(path);
			// var currentPageTemplate = $route.current.templateUrl; 
			// $templateCache.remove(currentPageTemplate);
			// $route.reload();
			// console.log($window.location.href)

			// Reload if the page is the game
			if(MainmenuService.item.title.toLowerCase() === 'spil')
				$window.location.reload();
        },
    }
}