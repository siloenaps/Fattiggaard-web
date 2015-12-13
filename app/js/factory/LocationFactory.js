'use strict';

module.exports = function($location, $window, $route, MainmenuService) {
	var current = function() {
		var list = $window.location.href.split('/');
		var p = list[list.length - 1];			
		return '/' + p; // Get path macthing the path in the main menu
	}

	
	// console.log(MainmenuService.getItemByPath(current()));
	var currentPathItem = MainmenuService.getItemByPath(current())
	MainmenuService.item = currentPathItem;

	return {		
        go: function (path) {
            this.currentPath = path;
			// $location.path(path);

			$window.location.href = '#' + path; // Set the '#' in honor of Safari
			// $window.location.reload()


			// Reload if the page is the game
			if(MainmenuService.item.title.toLowerCase() === 'spil')
				$window.location.reload();
        },
    }
}