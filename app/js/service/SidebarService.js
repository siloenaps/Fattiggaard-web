'use strict';

module.exports = function() {
  this.item = undefined;

  var items = [{
    title: 'ARTIKLER',
    text: '',
    path: '/kildesamling::artikler'
  },
  {
    title: 'TEKSTER',
    text: '',
    path: '/kildesamling::tekster'
  },
  {
    title: 'BILLEDER',
    text: '',
    path: '/kildesamling::billeder'
  },
  {
    title: 'FILM',
    text: '',
    path: '/kildesamling::film'
  }];

  this.getItems = function() {
    return items;
  };

  this.getItemByIndex = function(index) {
    console.log('getItemByIndex')
    try{
      return items[index];  
    }catch(err){
      console.log(err);
    }    
  };

};
