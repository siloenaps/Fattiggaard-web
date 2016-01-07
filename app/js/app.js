'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');
require('angular-load');
require('angular-sanitize');
require('gsap');


var app = angular.module('webApp', [ 'angularLoad', 'ngRoute', 'ngSanitize']);

app.constant('VERSION', require('../../package.json').version);

require('./factory');
require('./service');
require('./controller');
require('./directive');

app.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.
      'http://player.vimeo.com/**',
      'https://player.vimeo.com/**',
      'http://vimeo.com/**'
    ]);


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
  .when('/kildesamling/artikler', { // Deafult page for the hole kildesamling - sub group
    templateUrl: 'views/collection-articles.html',
    controller: 'CollectionpageCtrl',
  })
  .when('/kildesamling/billeder', {
    templateUrl: 'views/collection-images.html',
    controller: 'CollectionpageCtrl',
  })
  .when('/kildesamling/kilder', {
    templateUrl: 'views/collection-texts.html',
    controller: 'CollectionpageCtrl',
  }) 
  .when('/kildesamling/film', {
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
