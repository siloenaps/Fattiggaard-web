'use strict';

module.exports = function() {
  this.item = undefined;

  var items = [{
    title: 'Lærervejledning',
    text: '',
    path: './assets/pdf/test.pdf'
  },
  {
    title: 'Prøveoplæg',
    text: '',
    path: './assets/pdf/'
  },
  {
    title: 'Undervisningsforløb 1',
    text: '',
    path: './assets/pdf/forside'
  },
  {
    title: 'Undervisningsforløb 2',
    text: '',
    path: './assets/pdf/forside'
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
