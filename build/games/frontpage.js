!function(e,t,i){var n;e.properties={width:1024,height:648,fps:24,color:"#000000",manifest:[{src:"./assets/images/pool/_0_0Frontpage.jpg",id:"_0_0Frontpage"}]},(e._0_0Frontpage=function(){this.initialize(t._0_0Frontpage)}).prototype=n=new i.Bitmap,n.nominalBounds=new i.Rectangle(0,0,1024,648),(e._00Frontpage=function(){this.initialize(),this.instance=new e._0_0Frontpage,this.addChild(this.instance)}).prototype=n=new i.Container,n.nominalBounds=new i.Rectangle(0,0,1024,648),(e.frontpage=function(t,n,a){null==a&&(a=!1),this.initialize(t,n,a,{start:0}),this.frame_0=function(){this.stop()},this.timeline.addTween(i.Tween.get(this).call(this.frame_0).wait(1)),this.frontpage=new e._00Frontpage,this.timeline.addTween(i.Tween.get(this.frontpage).wait(1))}).prototype=n=new i.MovieClip,n.nominalBounds=new i.Rectangle(512,324,1024,648)}(gamelib=gamelib||{},images=images||{},createjs=createjs||{},ss=ss||{});var gamelib,images,createjs,ss;