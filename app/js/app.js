'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('todoApp', [ 'ngRoute' ]);

app.constant('VERSION', require('../../package.json').version);

require('./service');
require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/forside', {
    templateUrl: 'views/frontpage.html',
    controller: 'FrontpageCtrl',
  })
  .when('/spil', {
    templateUrl: 'views/game.html',
    controller: 'GameCtrl',
  })
  .otherwise({
    redirectTo: '/forside',
  });
});
