'use strict';

module.exports = function() {
	var items = [
		{
		    title: '',
		    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nostrum fuga aliquid veniam quae quia omnis ad voluptate enim. Porro consectetur fugiat laborum.',
		    path: 'img1.jpg'
		},
		{
		    title: '',
		    text: 'Lorem ipsum dolor sit amet.',
		    path: 'img2.jpg'
		},
		{
		    title: '',
		    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque distinctio, aut totam.',
		    path: 'img3.jpg'
		}
	];

	this.getItems = function() {
		return items;
	};
};
