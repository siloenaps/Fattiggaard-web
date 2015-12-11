'use strict';

var app = require('angular').module('webApp');

app.service('MainmenuService', require('./MainmenuService'));
app.service('FrontpageService', require('./FrontpageService'));
app.service('GameService', require('./GameService'));