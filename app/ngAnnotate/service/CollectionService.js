'use strict';

module.exports = function() {
  
  	// Articles ----------------------------------------------------------------
	var articles = [{
		title: 'Lorem ipsum dolor sit.',
		text: '',
		path: './assets/pdf/test.pdf'
	},
	{
		title: 'Lorem ipsum dolor sit.',
		text: '',
		path: './assets/pdf/'
	},
	{
		title: 'Lorem ipsum dolor sit.',
		text: '',
		path: './assets/pdf/forside'
	},
	{
		title: 'Lorem ipsum dolor sit.',
		text: '',
		path: './assets/pdf/forside'
	}];

	this.getArticles = function() {
		return articles;
	};

	// Texts/Sources -------------------------------------------------------------
	var texts = [{
		title: 'Lorem ipsum .',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquam animi modi.',
		path: './assets/pdf/test.pdf'
	},
	{
		title: 'Lorem ipsum  sit.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod.',
		path: './assets/pdf/'
	},
	{
		title: 'Lorem m dolor sit.',
		text: 'Lorem ipsum dolor sit.',
		path: './assets/pdf/forside'
	},
	{
		title: 'Lorem lor sit.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempore officiis quidem corrupti est incidunt voluptas, ex quos dolor accusantium, laudantium obcaecati praesentium!',
		path: './assets/pdf/forside'
	}];

	this.getTexts = function() {
		return texts;
	};
};
