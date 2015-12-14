var video = function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      //Assumes that true means the video is playing
      controlBoolean: '='
    },
    template: '<video width="{{width}}" height="{{height}}" controls preload>'+
                '<source src="./assets/video/test.mp4" type=\'video/mp4; codecs="H.264, AAC"\'>'+
              '</video>',

    link: function postLink(scope, element, attrs) {
      // var url = "http://player.vimeo.com/video/" + attrs.vid + "?title=0&byline=0&portrait=0&api=1";
      // element.attr('src', url);

      // var iframe = element[0],
      // player = $f(iframe);

      // scope.$watch('controlBoolean', function(){
      //   if(scope.controlBoolean){
      //     player.api('play');
      //   }
      //   else{
      //     player.api('pause');
      //   }
      // });
    }
  };
};
module.exports = video;