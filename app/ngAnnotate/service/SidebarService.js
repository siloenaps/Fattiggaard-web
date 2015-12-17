'use strict';

module.exports = function() {
  this.item = undefined;

  var items = [{
    title: 'ARTIKLER',
    text: '',
    path: '/kildesamling/artikler',
    type: 'source'
  },
  {
    title: 'KILDER',
    text: '',
    path: '/kildesamling/kilder',
    type: 'source'
  },
  {
    title: 'BILLEDER',
    text: '',
    path: '/kildesamling/billeder',
    type: 'source'
  },
  {
    title: 'FILM',
    text: '',
    path: '/kildesamling/film',
    type: 'source'
  }];

  this.getItems = function() {
    return items;
  };

  this.getItemByPath = function(path){
    for(var i in items){
      if(items[i].path === path){
        return items[i];
      }
    }
  }
  this.getItemByType = function(type){
    for(var i in items){
      if(items[i].type === type){
        return items[i];
      }
    }
  }

  this.getItemByIndex = function(index) {
    try{
      return items[index];  
    }catch(err){
      console.log(err);
    }    
  };

};
