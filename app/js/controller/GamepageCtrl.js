'use strict';
var createjs;
module.exports = function($scope, angularLoad, GameService, MainmenuService, LocationFactory) {  
  var vm = this;
  var index = 0;
  var urls = GameService.urls;
  var urlsTotal = urls.length;

  $scope.loaded = false;

  TweenLite.to(".canvas", .1, { alpha: 0 });

  var loadNext = function(url){
    angularLoad.loadScript(url).then(function() {
      index++;
      if(index < urls.length){
        loadNext(urls[index]);
      }
      if(index === urlsTotal){
        TweenLite.to(".canvas", 1, { alpha: 1, onComplete: function(){
          vm.loaded = true;
        } });
      }
      
    }).catch(function() {
      console.log('Error loading game');
    });
  };
  loadNext(urls[index]);

  $scope.close = function() {
    var item = MainmenuService.getItemByIndex(0); // Frontpage
    MainmenuService.item = item;
    LocationFactory.go(item, true); // Force frontpage to reload. Stops any media in game for playing when closed
  };

  // $scope.show = function() {
  //   console.log($scope.loaded)
  //   return $scope.loaded === false;
  // };
};