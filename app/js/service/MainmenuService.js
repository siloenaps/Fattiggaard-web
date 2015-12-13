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
    path: '/kildesamling'
  },
  {
    title: 'TIL LÆREREN',
    text: '',
    path: '/til-laereren'
  },
  {
    title: 'OM PROJEKTET',
    text: '',
    path: '/om-projektet'
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

  this.getItemByIndex = function(index) {
    try{
      return items[index];  
    }catch(err){
      console.log(err);
    }    
  };

};
