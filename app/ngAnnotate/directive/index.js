'use strict';

var app = require('angular').module('webApp');
app.directive('slider', require('./SliderDirective'));
app.directive('vimeo', require('./VimeoDirective'));
app.directive('collectionheader', require('./CollectionHeaderDirective'));