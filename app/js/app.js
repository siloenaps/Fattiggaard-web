'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');
require('angular-load');
require('angular-animate');
require('gsap');


var app = angular.module('webApp', [ 'angularLoad', 'ngRoute', 'ngAnimate' ]);

app.constant('VERSION', require('../../package.json').version);

require('./factory');
require('./service');
require('./controller');
require('./directive');

app.config(function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: 'views/frontpage.html',
    controller: 'FrontpageCtrl',
  })
  .when('/forside', {
    templateUrl: 'views/frontpage.html',
    controller: 'FrontpageCtrl',
  })
  .when('/spil', {
    templateUrl: 'views/game.html',
    controller: 'GamepageCtrl',
  })
  .when('/kildesamling', {
    templateUrl: 'views/collection.html',
    controller: 'CollectionpageCtrl',
  })
  .when('/kildesamling::artikler', {
    templateUrl: 'views/collection-articles.html',
    controller: 'CollectionpageCtrl',
  })
  .when('/kildesamling::billeder', {
    templateUrl: 'views/collection-images.html',
    controller: 'CollectionpageCtrl',
  })
  .when('/kildesamling::tekster', {
    templateUrl: 'views/collection-texts.html',
    controller: 'CollectionpageCtrl',
  })  
  .when('/kildesamling::film', {
    templateUrl: 'views/collection-video.html',
    controller: 'CollectionpageCtrl',
  })  
  .when('/til-laereren', {
    templateUrl: 'views/guide.html',
    controller: 'GuidepageCtrl',
  })
  .when('/om-projektet', {
    templateUrl: 'views/about.html',
    controller: '',
  })
  .otherwise({
    redirectTo: '/',
  });
});
