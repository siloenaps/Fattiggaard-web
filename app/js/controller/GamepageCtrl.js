'use strict';
var createjs;
module.exports = function($scope, angularLoad, GameService, MainmenuService, LocationFactory) {  

  var index = 0;
  var urls = GameService.urls;
  var urlsTotal = urls.length;

  TweenLite.to(".canvas", .1, { alpha: 0 });

  var loadNext = function(url){
    angularLoad.loadScript(url).then(function() {
      index++;
      if(index < urls.length){
        loadNext(urls[index]);
      }
      if(index === urlsTotal){
        // $('.preloader').remove();
        // $('.preloader').hide();
        TweenLite.to(".canvas", 1, { alpha: 1 });
      }
      console.log('loading:', url);
    }).catch(function() {
      console.log('Error loading game');
    });
  };
  loadNext(urls[index]);

  $scope.close = function() {
    var item = MainmenuService.getItemByIndex(0);
    console.log(item)
    MainmenuService.item = item;
    LocationFactory.go(item.path);
  };
};