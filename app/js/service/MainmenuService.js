'use strict';

module.exports = function() {
  this.item = undefined;

  var items = [{
    title: 'FORSIDE',
    text: '',
    path: '/forside'
  },
  {
    title: 'SPIL',
    text: '',
    path: '/spil'
  },
  {
    title: 'KILDESAMLING',
    text: '',
    path: '/kilder'
  },
  {
    title: 'LÆREVEJLEDNING',
    text: '',
    path: '/vejledning'
  },
  {
    title: 'OM PROJEKTET',
    text: '',
    path: '/projektet'
  }];

  this.getItems = function() {
    return items;
  };

  this.getItemByIndex = function(index) {
    try{
      return items[index];  
    }catch(err){
      console.log(err);
    }    
  };

};
