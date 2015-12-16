'use strict';

module.exports = function ($scope, $sce) {
    $scope.getItems = function(){
    	return $scope.items;
    }

    // $scope.items = [
    //     {title: 'Lorem ipsum dolor.', src: '1. Det fortæller jo.mp4'}
    // ];
    $scope.items = [
    	{id: 147895685, title: 'Lorem ipsum dolor.'},
    	{id: 147758866, title: 'Lorem ipsum dolor.'},
    	{id: 147876560, title: 'Lorem ipsum dolor.'},
    	{id: 148198462, title: 'Lorem ipsum dolor.'},
    	{id: 148268680, title: 'Lorem ipsum dolor.'},
    	{id: 148111448, title: 'Lorem ipsum dolor.'}
    ];
};

