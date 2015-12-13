'use strict';

module.exports = function() {
  this.item = undefined;

  var items = [{
    title: 'FORSIDE',
    text: '',
    path: '/',
    type: 'frontpage'
  },
  {
    title: 'SPIL',
    text: '',
    path: '/spil',
    type: 'game'
  },
  {
    title: 'KILDESAMLING',
    text: '',
    path: '/kildesamling/artikler',
    type: 'source'
  },
  {
    title: 'TIL LÆREREN',
    text: '',
    path: '/til-laereren',
    type: 'guide'
  },
  {
    title: 'OM PROJEKTET',
    text: '',
    path: '/om-projektet',
    type: 'about'
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
