var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var cachedTexture = canvas;
var animating = true;
var width, height, radius, centerX, centerY;
var raf = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame;
var theta = 0;
var direction = 0;
var time = performance.now();
// console.log(time);
resize();
tick();

var translateX;
var translateY;
var translate0 = 0;
var translate1 = 1;
var rotate0 = .10;
var rotate1 = 0;
var scale0 = 20;
var scale1 = 10;
var sizeX = 100;
var sizeY = 100;







window.addEventListener("resize", resize, false);
document.addEventListener("mousedown", mouseDown, false);

function renderToCache(renderFunction) {
  var buffer = document.createElement('canvas');
  buffer.width = width;
  buffer.height = height;
  renderFunction(buffer.getContext('2d'));
  return buffer;
}


document.addEventListener('mousemove', function(ev) {

  translateX = ev.clientX;
  translateY = ev.clientY;
});

function drawScene() {

  cachedTexture = renderToCache(function(ctx) {



    ctx.globalCompositeOperation = "difference";
    ctx.translate(centerX, centerY);
    ctx.rotate(0.0);
    ctx.translate(-centerX, -centerY);
    ctx.translate(translate0, -translate0);
    ctx.scale(1.00, 1.00);
    ctx.drawImage(cachedTexture, 0, 0);



    // ctx.restore();


    // ctx.save();

    var img = new Image();
    img.src = "../images/default.png";
    ctx.globalCompositeOperation = "normalize";
        ctx.translate(0, 0);
    ctx.drawImage(img,translateX,translateY);

    ctx.restore();
  });

  context.globalCompositeOperation = "source-out";
  context.fillStyle = "rgba(255,255,255,.1)";
  context.fillRect(0, width, height,width);
  context.globalCompositeOperation = "hard-light";
  context.drawImage(cachedTexture, 0, 0);



}



function tick() {
  // var now = performance.now() * 100;
  // if (animating) {
    raf(tick);
    // theta = (now / time) / direction;
    // time = now;
    drawScene();
  // }
  // else raf(tick);
}

function resize(e) {

  width = window.innerWidth;
  height = window.innerHeight;
  centerX = width / 2;
  centerY = height / 2;
  canvas.width = width;
  canvas.height = height;
  if (!animating) drawScene();
}

function mouseDown(e) {



  animating = !animating;
  if (animating) {
    direction = 1;
    time = performance.now() * 1;

  }
}
