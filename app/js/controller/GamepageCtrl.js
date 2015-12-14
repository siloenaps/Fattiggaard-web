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
      console.log('loading:', url);
    }).catch(function() {
      console.log('Error loading game');
    });
  };
  loadNext(urls[index]);

  $scope.close = function() {
    var item = MainmenuService.getItemByIndex(0);
    MainmenuService.item = item;
    LocationFactory.go(item);
  };

  // $scope.show = function() {
  //   console.log($scope.loaded)
  //   return $scope.loaded === false;
  // };
};