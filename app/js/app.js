'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('todoApp', [ 'ngRoute' ]);

app.constant('VERSION', require('../../package.json').version);

require('./factory');
require('./service');
require('./controller');

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: 'views/frontpage.html',
    controller: 'FrontpageCtrl',
  })
  .when('/spil', {
    templateUrl: 'views/game.html',
    controller: 'GamepageCtrl',
  })
  .otherwise({
    redirectTo: '/',
  });
});
