'use strict';

var app = require('angular').module('webApp');

app.service('MainmenuService', require('./MainmenuService'));
app.service('FrontpageService', require('./FrontpageService'));
app.service('GameService', require('./GameService'));
app.service('GuideService', require('./GuideService'));
app.service('CollectionService', require('./CollectionService'));
app.service('SliderService', require('./SliderService'));
app.service('SidebarService', require('./SidebarService'));
