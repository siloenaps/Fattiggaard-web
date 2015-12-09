'use strict';

module.exports = function($location) {
	return {
        go: function (path) {
        	console.log('L:', path);
            this.currentPath = path;
			$location.path(path);
        },
    }
}