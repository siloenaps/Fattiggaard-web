'use strict';

module.exports = function() {
  this.item = undefined;

  var items = [
    {
      text: [
        '<b>Lærervejledning</b>',
        'Her finder du lærervejledning til dilemmaspillet, forslag til et undervisningsforløb til historie med spillet som omdrejningspunkt og et eksempel på inddragelse af dilemmaspillet i historieprøven. Derudover finder du skemaer med bud på, hvilke læringsmål spillet understøtter i fagene historie, samfundsfag, dansk og kristendomskundskab.'
        ],
      files: [
        {
          title:'Hent lærervejledning', 
          path:'./assets/pdf/Lærervejledning-FattiggårdEllerFjendeland.pdf'
        }]
    },

  ];

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
