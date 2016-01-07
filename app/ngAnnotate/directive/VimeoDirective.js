var vimeo = function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      //Assumes that true means the video is playing
      controlBoolean: '='
    },
    template: '<iframe id="{{id}}" height="{{height}}" width="{{width}}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen> {{text}} </iframe>',

    // <iframe src="https://player.vimeo.com/video/94229337" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

    link: function postLink(scope, element, attrs) {
      var url = "http://player.vimeo.com/video/" + attrs.vid + "?title=0&byline=0&portrait=0&api=1";
      element.attr('src', url);

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
module.exports = vimeo;