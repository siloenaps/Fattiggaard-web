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

	// Texts ----------------------------------------------------------------
	var texts = [{
		title: 'Lorem ipsum .',
		text: '',
		path: './assets/pdf/test.pdf'
	},
	{
		title: 'Lorem ipsum  sit.',
		text: '',
		path: './assets/pdf/'
	},
	{
		title: 'Lorem m dolor sit.',
		text: '',
		path: './assets/pdf/forside'
	},
	{
		title: 'Lorem lor sit.',
		text: '',
		path: './assets/pdf/forside'
	}];

	this.getTexts = function() {
		return texts;
	};
};
