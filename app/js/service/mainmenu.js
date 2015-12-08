'use strict';

module.exports = function() {

  var items = [{
    title: 'FORSIDE',
    text: '',
  },
  {
    title: 'SPIL',
    text: ''
  },
  {
    title: 'KILDESAMLING',
    text: ''
  },
  {
    title: 'LÆREVEJLEDNING',
    text: ''
  },
  {
    title: 'OM PROJEKTET',
    text: ''
  }];

  this.getItems = function() {
    return items;
  };

};
