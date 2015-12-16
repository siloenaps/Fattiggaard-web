'use strict';

module.exports = function($location, $window, $route, MainmenuService, SidebarService) {
	var path = $location.path();
	console.log(path)

	var mainitem = MainmenuService.getItemByPath(path);
	var subitem;

	// May be that the main item does not exist
	if(mainitem !== undefined){
		// Check if there is a subitem by the same path
		subitem = SidebarService.getItemByPath(path);
		
	}else{
		// Then we'll test for subitem
		subitem = SidebarService.getItemByPath(path);
		if(subitem !== undefined){
			// if we get a subitem - get the type and retrieve the type form the main menu 
			var type = subitem.type;
			mainitem = MainmenuService.getItemByType(type);
		}else{
			throw new Error('Crap. No path for main nor sub item');
		}
	}

	MainmenuService.item = mainitem;
    SidebarService.item = subitem;	

	return {		
        go: function (item) {
            this.currentPath = item.path;

            MainmenuService.item = MainmenuService.getItemByType(item.type);		// Use the type to get the main item since the item can cover more than one path
            SidebarService.item = SidebarService.getItemByPath(item.path);			// We use the full path to the item for the sub item
			$window.location.href = '#' + this.currentPath; // Set the '#' in honor of Safari
			// console.log(item)
			// Reload if the page is the game
			if(MainmenuService.item.title.toLowerCase() === 'spil')
				$window.location.reload();
        },
    }
}