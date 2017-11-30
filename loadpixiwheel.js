

function loadRenderDesktop(){
	app = new PIXI.Application(800, 400,{antialias: false, transparent: true, resolution: 1});
  productoAni.appendChild(app.view);
  PIXI.loader
  .add('img//.json')
  .add('img//.json')
  .add('img//.json')
  .add('img//.json')
  .on('progress', function (loader, loadedResource) {
      var num = (Math.round(loader.progress)/2);
      // percentage.innerHTML = num + '%' ;
      console.log(num);
      // if(num>99){
      //   loading.style.opacity = 0;
      //   setTimeout(function(){ loading.style.display = "none" },1000);
      // }
  })
  .load(function(){
    	onAssetsLoadedDesktop(0,126);
	});
}; // fin loadRenderDesktop

function onAssetsLoadedDesktop(fs,fe){
	var j = fs, frames = [];
	var wheelDistance = function(evt){
        if (!evt) evt = event;
        var w = evt.wheelDelta, d = evt.detail;
        if (d){
          if (w) return w/d/40*d>0?1:-1;
          else return -d/3;
        } else return w/120;
      };
      var wheelDirection = function(evt){
        if (!evt) evt = event;
        return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
      };
      frames.push(PIXI.Texture.fromFrame('escritorio_' + fs + '.png'));
      var anim = new PIXI.extras.AnimatedSprite(frames);
      anim.width = app.renderer.width;
      anim.height = app.renderer.height;
      anim.animationSpeed = 0.9;
      anim.loop =  false;
      function showResults(evt){
      	var distance  = wheelDistance(evt);
      	var direction = wheelDirection(evt);
      	if(direction == 1){
      		j--;
      		if(j <= fs) j = fe;
      		frames.push(PIXI.Texture.fromFrame('escritorio_' + j + '.png'));
      		anim.play();
      	}
      	if(direction == -1){
      		j++;
      		if(j >= fe) j = fs;
      		frames.push(PIXI.Texture.fromFrame('escritorio_' + j + '.png'));
      		anim.play();
      	}

        if(j > 0 && j < 126){
          return changeRange = 1;
        }
    }
    if (productoAni.addEventListener){
  			productoAni.addEventListener( 'mousewheel', showResults, false );     // Chrome/Safari/Opera
  			productoAni.addEventListener( 'DOMMouseScroll', showResults, false ); // Firefox

	}else if (test.attachEvent){
		productoAni.attachEvent('onmousewheel',showResults);                  // IE
	}
      app.stage.addChild(anim);
}; // fin onAssetsLoadedDesktop