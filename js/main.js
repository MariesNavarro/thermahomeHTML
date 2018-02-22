function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
var checkBowser = false;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkBowser = true;

var mapImg = _('#mapImg');
  var countLoading = 0;


function menuDesk(c){
    var subProd = _('.subProductosDesk'),
        subCasos = _('.subCasosDesk'),
        btnSubMenu = __('.subMenuDesktopBtn');
  switch (c) {
    case 'showProd':
      subProd.classList.remove('hideSubDesk');
      subProd.classList.add('showSubDesk');
      subCasos.classList.remove('showSubDesk');
      subCasos.classList.add('hideSubDesk');
      btnSubMenu[0].setAttribute('onclick', 'menuDesk("hideSubs")');
    break;
    case 'showCasos':
      subProd.classList.remove('showSubDesk');
      subProd.classList.add('hideSubDesk');
      subCasos.classList.remove('hideSubDesk');
      subCasos.classList.add('showSubDesk');
      btnSubMenu[1].setAttribute('onclick', 'menuDesk("hideSubs")');
    break;
    case 'hideSubs':
      subProd.classList.remove('showSubDesk');
      subProd.classList.add('hideSubDesk');
      subCasos.classList.remove('showSubDesk');
      subCasos.classList.add('hideSubDesk');
      btnSubMenu[0].setAttribute('onclick', 'menuDesk("showProd")');
      btnSubMenu[1].setAttribute('onclick', 'menuDesk("showCasos")');
    break;
  }
}

function menuMobile(c){
  var mainMobile = _('.mainMobile'),
      subProd = _('.subProductosMobile')
      subCasos = _('.subCasosMobile');
  switch (c) {
  case 'menuMain':
    mainMobile.classList.remove('hideInner');
    mainMobile.classList.add('showInner');
  break;
  case 'menuSubProd':
    subProd.classList.remove('hideInner');
    subProd.classList.add('showInner');
  break;
  case 'menuSubProdOut':
    subProd.classList.remove('showInner');
    subProd.classList.add('hideInner');
  break;
  case 'menuSubCasos':
    subCasos.classList.remove('hideInner');
    subCasos.classList.add('showInner');
  break;
  case 'menuSubCasosOut':
    subCasos.classList.remove('showInner');
    subCasos.classList.add('hideInner');
  break;
  case 'menuOut':
    mainMobile.classList.remove('showInner');
    mainMobile.classList.add('hideInner');
    subProd.classList.remove('showInner');
    subProd.classList.add('hideInner');
    subCasos.classList.remove('showInner');
    subCasos.classList.add('hideInner');
  break;
  }
}

function setButtonPhone(c){
  var ph = __('.telefonoDom');
  switch (c) {
    case 'mobile':
      for (var i = 0; i < ph.length; i++) {
        ph[i].setAttribute('href', 'tel:5575860896');
      }
    break;
    case 'desktop':
      for (var i = 0; i < ph.length; i++) {
        ph[i].setAttribute('onclick', 'popPhone("open")');
      }
    break;
  }
}

function contactoNuevo(c){
  var ph = __('.telefonoDomLl');
  switch (c) {
    case 'mobile':
      for (var i = 0; i < ph.length; i++) {
        ph[i].setAttribute('href', 'tel:5575860896');
      }
    break;
    case 'desktop':
      for (var i = 0; i < ph.length; i++) {
        ph[i].setAttribute('onclick', 'popPhone("open")');
      }
    break;
  }
}


function popPhone(c) {
  var telPopW = _('#telPopW');
  switch (c) {
    case 'open':
    telPopW.style.display = "block";
    setTimeout(function(){
      telPopW.style.opacity = "1";
    },500);
    break;
    case 'close':
      telPopW.style.opacity = "0";
      setTimeout(function(){
        telPopW.style.display = "none";
      },500);
    break;
  }
}

function overMenuMain(c){
  var line = _('#iconMenuWrap>.transform');
  switch (c) {
    case 'over':
      line.classList.remove('resetMain');
      line.classList.add('transforMain');
    break;
    case 'out':
      line.classList.remove('transforMain');
      line.classList.add('resetMain');
    break;
  }
}

function overMenuClose(c, t){
  var rotA = t.children[0],
      rotB = t.children[1];
  switch (c) {
  case 'over':
    rotA.classList.remove('rotccw');
    rotA.classList.add('rotcw');
    rotB.classList.remove('rotcw');
    rotB.classList.add('rotccw');
  break;
  case 'out':
    rotA.classList.remove('rotcw');
    rotA.classList.add('rotccw');
    rotB.classList.remove('rotccw');
    rotB.classList.add('rotcw');
  break;
  }
}

var heightFrame;
function videoSetHeight(){
  var wrap = _('#coverVideo'),
      wWrap = wrap.offsetWidth,
      iframe = _('#coverVideo>iframe')
      wF = iframe.getAttribute('width'),
      hF = iframe.getAttribute('height');
  iframe.setAttribute('data-ratio', hF/wF);
  var ratio = iframe.getAttribute('data-ratio');
  setTimeout(function(){
    iframe.setAttribute('width', wWrap);
    heightFrame = ratio * wWrap;
    iframe.setAttribute('height', heightFrame);
  },300);
}



var heightFramePop;
function videoSetHeightPop(){
  var wrapPop = _('#popCasosAplicados>div'),
      wWrapPop = wrapPop.offsetWidth,
      iframePop = _('#popCasosAplicados>div>iframe')
      wFPop = iframePop.getAttribute('width'),
      hFPop = iframePop.getAttribute('height');
  iframePop.setAttribute('data-ratio', hFPop/wFPop);
  var ratioPop = iframePop.getAttribute('data-ratio');
  setTimeout(function(){
    iframePop.setAttribute('width', wWrapPop);
    heightFramePop = ratioPop * wWrapPop;
    iframePop.setAttribute('height', heightFramePop);
  },300);
}


function popVideoAplicado(c){
  var w = _('#popCasosAplicados'),
      i = _('#popCasosAplicados>div>iframe');
  switch (c) {
    case 'open':

      w.classList.remove("hidePop");
      w.classList.add("flexPop");
      setTimeout(function(){
          w.style.opacity = "1";
          videoSetHeightPop();
          setTimeout(function(){
            i.style.opacity = "1";
          },500);
      },300);
    break;
    case 'close':
    w.style.opacity = "0";
    setTimeout(function(){
      w.classList.remove("flexPop");
      w.classList.add("hidePop");
      i.style.opacity = "0";
    },500);
    break;
  }
}

var togglePMobile = false;
function openProductosMobile(){
  var ul = _('#productosMobile>ul');
  togglePMobile = !togglePMobile;
  if(togglePMobile){
    ul.style.height = "auto";
  } else {

    ul.style.height = "0";
  }
}

function overIcons(c, i, t){
    t.setAttribute('src', 'img/icons/' + i + c + '.svg');
}

function setAniSvg(){
  getLenSvg(svgborder, 0);
  getLenSvg(svgborder, 1);
  getLenSvg(svgborder, 7);
  for(var i = 0; i<svgOpacity.length; i++){
    svgborder[svgOpacity[i]].style.opacity = "0";
  }
  function getLenSvg(e,i){
    var l = e[i].getTotalLength();
    e[i].style.strokeDasharray = l + ' ' + l;
    e[i].style.strokeDashoffset = l;
  }
}

function playAniSvg() {
  resetLenSvg(svgborder ,0);
  resetLenSvg(svgborder ,1);
  resetLenSvg(svgborder ,7)
  function resetLenSvg(e,i){
    e[i].style.strokeDashoffset = 0;
  }
  setTimeout(function(){
    for(var i = 0; i<svgOpacity.length; i++){
      svgborder[svgOpacity[i]].style.opacity = "1";
    }
  },1000);
}

function getCoords (){
  for(var i =0; i<points.length; i++){
     var coords = points[i].coords.split(",");
     var x1 = parseInt(coords[0]);
     var y1 = parseInt(coords[1]);
     var x2 = parseInt(coords[2]);
     var y2 = parseInt(coords[3]);
     area[i].style.left = (x2 - x1)/2 + x1 +"px";
     area[i].style.top = (y2 - y1)/2 + y1 +"px";
   }
}

function overSliderRange(c){
  var iphoneMap = _('#iphoneMap');
  switch (c) {
    case 'over':
      iphoneMap.style.opacity = "1";
    break;
    case 'out':
      iphoneMap.style.opacity = "0";
    break;
  }
}

function overIconNtw(e,u,c){
  e.setAttribute('src', 'img/icons/' + u + c + '.svg');
}

function overAplicado(t, u, c){
  var e = _(t);
  e.setAttribute('src', 'img/icons/' + u + c + '.svg');
}

var countntw = 0;
function sliderNTWFun(c){
  var s = __('.slide'),
      len = s.length-1,
      current = _('#currentSlider'),
      length = _('#lengthSlider').innerHTML = len+1;
  reset();
  switch (c) {
    case 'prev':
      countntw--;
      if(countntw < 0) countntw = len;
      s[countntw].style.opacity = "1";
      current.innerHTML = countntw + 1;
    break;
    case 'next':
      countntw++;
      if(countntw > len) countntw = 0;
      s[countntw].style.opacity = "1";
      current.innerHTML = countntw + 1;
    break;
  }
  function reset(){
    for (var i = 0; i < len+1; i++) {
      s[i].style.opacity = "0";
    }
  }
}

var swipeBullet = 0;
function swipeTransform(el,d) {
  sliderNTWFun(d);
}

function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;
  var max_x = 40;
  var min_y = 40;
  var max_y = 50;
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
  var t = e.touches[0];
  swipe_det.sX = t.screenX;
  swipe_det.sY = t.screenY;
  },false);

  ele.addEventListener('touchmove',function(e){
  e.preventDefault();
  var t = e.touches[0];
  swipe_det.eX = t.screenX;
  swipe_det.eY = t.screenY;
  },false);

  ele.addEventListener('touchend',function(e){
  if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
  if(swipe_det.eX > swipe_det.sX) direc = "next";
  else direc = "prev";
  }
  if (direc != "") {
    if(typeof func == 'function') func(el,direc);
  }
  direc = "";
  },false);
}

var app, wrapPixi = _('#coverVideo');

/* PRODUCTO PIXI */
//Thermafloor
function loadRenderThermafloor(){
  loadingProducts();
  wrapPixi.style.width = "600px";
  wrapPixi.style.height = "400px";
  wrapPixi.style.backgroundImage = "url('img/producto-thermafloor.png')";
};
//Thermadeck
function loadRenderThermadeck(){
  loadingProducts();
  wrapPixi.style.width = "600px";
  wrapPixi.style.height = "400px";
  wrapPixi.style.backgroundImage = "url('img/producto-thermadeck.png')";
};

//Thermawall
function loadRenderThermawall(){
  loadingProducts();
  wrapPixi.style.width = "600px";
  wrapPixi.style.height = "400px";
  wrapPixi.style.backgroundImage = "url('img/producto-thermawall.png')";
};

function loadingProducts(){
  var w = _('#loading');
  setTimeout(function(){
    w.style.opacity = "0";
    setTimeout(function(){
      w.style.display = "none";
    },600);
  },800);
}

function onLoadedDesktopDeck(fs,fe){
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
      frames.push(PIXI.Texture.fromFrame('thermadeck' + fs + '.png'));
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
      		frames.push(PIXI.Texture.fromFrame('thermadeck' + j + '.png'));
      		anim.play();
      	}
      	if(direction == -1){
      		j++;
      		if(j >= fe) j = fs;
      		frames.push(PIXI.Texture.fromFrame('thermadeck' + j + '.png'));
      		anim.play();
      	}

        if(j > 0 && j < 126){
          return changeRange = 1;
        }
    }
    if (wrapPixi.addEventListener){
  			wrapPixi.addEventListener( 'mousewheel', showResults, false );
  			wrapPixi.addEventListener( 'DOMMouseScroll', showResults, false );

	}else if (test.attachEvent){
		wrapPixi.attachEvent('onmousewheel',showResults);
	}
      app.stage.addChild(anim);
};

function onLoadedDesktopWall(fs,fe){
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
      frames.push(PIXI.Texture.fromFrame('thermawall' + fs + '.png'));
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
      		frames.push(PIXI.Texture.fromFrame('thermawall' + j + '.png'));
      		anim.play();
      	}
      	if(direction == -1){
      		j++;
      		if(j >= fe) j = fs;
      		frames.push(PIXI.Texture.fromFrame('thermawall' + j + '.png'));
      		anim.play();
      	}

        if(j > 0 && j < 126){
          return changeRange = 1;
        }
    }
    if (wrapPixi.addEventListener){
  			wrapPixi.addEventListener( 'mousewheel', showResults, false );
  			wrapPixi.addEventListener( 'DOMMouseScroll', showResults, false );

	}else if (test.attachEvent){
		wrapPixi.attachEvent('onmousewheel',showResults);
	}
      app.stage.addChild(anim);
};

function onLoadedDesktopFloor(fs,fe){
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
      frames.push(PIXI.Texture.fromFrame('thermafloor' + fs + '.png'));
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
      		frames.push(PIXI.Texture.fromFrame('thermafloor' + j + '.png'));
      		anim.play();
      	}
      	if(direction == -1){
      		j++;
      		if(j >= fe) j = fs;
      		frames.push(PIXI.Texture.fromFrame('thermafloor' + j + '.png'));
      		anim.play();
      	}

        if(j > 0 && j < 126){
          return changeRange = 1;
        }
    }
    if (wrapPixi.addEventListener){
  			wrapPixi.addEventListener( 'mousewheel', showResults, false );
  			wrapPixi.addEventListener( 'DOMMouseScroll', showResults, false );

	}else if (test.attachEvent){
		wrapPixi.attachEvent('onmousewheel',showResults);
	}
      app.stage.addChild(anim);
};

function infoPopTermostatos(c){
  var w = _('.maintermostato>.infoPop');
  switch (c) {
    case 'open':
      w.style.display = "block";
      setTimeout(function(){
        w.style.opacity = "1";
      },300);
    break;
    case 'close':
      w.style.opacity = "0";
      setTimeout(function(){
        w.style.display = "none";
      },300);
    break;
  }
}



var countSliderTermo = 0;
function sliderTermostato(d,el){
  if(d === 'prev' || el === 'next'){
    countSliderTermo--;
    if(countSliderTermo < 0) countSliderTermo = 2;
    slider(countSliderTermo);
  }
  if(d === 'next' || el === 'prev'){
    countSliderTermo++;
    if(countSliderTermo > 2) countSliderTermo = 0;
    slider(countSliderTermo);
  }
  function slider(c){
    var h1Termo = _('.infoTermo>h1'),
        imgTermo = _('.termostatoImg'),
        popDatos = __('.textDatos'),
        beneficios = __('.textBeneficios'),
        indexTermo = _('#currentTherma');
      switch (c) {
        case 0:
          indexTermo.innerHTML = "1";
          h1Termo.innerHTML = "Duowei DW-H902 (Incluido en instalaciones)";
          imgTermo.style.backgroundImage = 'url("img/termostatos/termo1.jpg")';
          for (var i = 0; i < 5; i++) {
            beneficios[i].innerHTML = infoJson.b1[i].b;
          }
          for (var i = 0; i < 9; i++) {
            popDatos[i].innerHTML = infoJson.pop1[i].p;
          }
        break;
        case 1:
          indexTermo.innerHTML = "2";
          h1Termo.innerHTML = "WIFI: Saswell T13FHL-7 (Costo adicional)";
          imgTermo.style.backgroundImage = 'url("img/termostatos/termo2.jpg")';
          for (var i = 0; i < 5; i++) {
            beneficios[i].innerHTML = infoJson.b2[i].b;
          }
          for (var i = 0; i < 9; i++) {
            popDatos[i].innerHTML = infoJson.pop2[i].p;
          }
        break;
        case 2:
          indexTermo.innerHTML = "3";
          h1Termo.innerHTML = "WIFI: Elsonic RT-002 WIFI (Costo adicional)";
          imgTermo.style.backgroundImage = 'url("img/termostatos/termo3.jpg")';
          for (var i = 0; i < 5; i++) {
            beneficios[i].innerHTML = infoJson.b3[i].b;
          }
          for (var i = 0; i < 9; i++) {
            popDatos[i].innerHTML = infoJson.pop3[i].p;
          }
        break;
      } //switch
  }//slider
}

function loadInfoJson(){
  var req;
  if(window.XMLHttpRequest){
  	req = new XMLHttpRequest();
  } else {
  	req = new ActiveObject("Microsoft.XMLHTTP");
  }
  req.open('GET', 'js/info.json');
  req.onreadystatechange = function (){
    if((req.status === 200) && (req.readyState === 4)){
      infoJson = JSON.parse(req.responseText);
    }
  }
  req.send();
}


function loadTermostato(){
  var w = _('#loading');
  setTimeout(function(){
    w.style.opacity = "0";
    setTimeout(function(){
      w.style.display = "none";
    },600);
  },5000);
}

function circleButtonCalidos(c, dis, url){
  var nombreMat = _('.calidos>h4');
  var disponibilidad = _('.calidos>h5');
  var current = _('.calidos>.currentCircle');
  current.setAttribute('src', 'img/ntw/circle/current/'+url+'.jpg');
  nombreMat.innerHTML = c;
  disponibilidad.innerHTML = dis;
}

function circleButtonFrios(c, dis, url){
  var nombreMat = _('.frios>h4');
  var disponibilidad = _('.frios>h5');
  var current = _('.frios>.currentCircle');
  current.setAttribute('src', 'img/ntw/circle/current/'+url+'.jpg');
  nombreMat.innerHTML = c;
  disponibilidad.innerHTML = dis;
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


function renderProductoMobDelete(){
  document.getElementById("iframeMobileProducto").remove();
}
function renderProductoMob(url){
  var w = _('#coverVideo>iframe');
  w.setAttribute('src', url);
  w.setAttribute('onload', 'vimeoProductoFinished()');
}

function vimeoProductoFinished(){
  var w = _('#loading');
  setTimeout(function(){
    w.style.opacity = "0";
    setTimeout(function(){
      w.style.display = "none";
    },600);
  },3000);
}

function popVimeoProducto(c){
  var w = _('#popRenderMobile');
  switch (c) {
    case 'open':
      w.classList.remove('hidePop');
      w.classList.add('flexPop');
      w.style.opacity = "1";
    break;
    case 'close':
    break;
  }
}


function faqAcc(t){
  var info = t.children[2];
  var infoState = info.getAttribute('data-state');
  var sign = t.children[0].children[0];

  if(infoState === 'close'){
    if(checkBowser){
      info.style.height = "280px";
    } else {
      info.style.height = "200px";
    }
    sign.innerHTML = "-";
    info.setAttribute('data-state', 'open');
  } else{
    info.style.height = "0";
    sign.innerHTML = "+";
    info.setAttribute('data-state', 'close');
  }
}
