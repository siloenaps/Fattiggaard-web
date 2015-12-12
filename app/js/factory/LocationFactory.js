'use strict';

module.exports = function($location, $window, $route, MainmenuService) {
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