var PIXEL_RATIO = (function () {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1,
    pr = dpr / bsr;
  return pr < 2 ? 2 : pr;
})();

function setTimeoutOnWindow(callback) {
  return window.setTimeout(callback, 1000 / 60);
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    setTimeoutOnWindow
  );
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (
    window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
    window.clearTimeout
  );
}

function Ball(radius, color) {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.color = color;
  this.mass = 1;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.lineWidth = 1;
}


var createHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.querySelector('.canvas');
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

Ball.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);

  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.strokeStyle = '#2df2a8';
  context.beginPath();
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }
  context.restore();
};

Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};

function createParticle(cw, ch) {
  size = Math.random() * 3 + 1;
  particle = new Ball(size, 'rgba(0, 0, 0, 1)');
  particle.x = Math.random() * cw;
  particle.y = Math.random() * ch;
  particle.vx = Math.random() * 4 - 1;
  particle.vy = Math.random() * 4 - 1;
  particle.mass = size;
  return particle;
}


(function() {
  var canvas = createHiDPICanvas(window.innerWidth, window.innerHeight),
    context = canvas.getContext('2d'),
    particles = [],
    numParticles = window.innerHeight / 20,
    minDist = window.innerWidth / 5,
    springAmount = 0.00005;

  for (var size, particle, i = 0; i < numParticles; i++) {
    var particle = createParticle(canvas.width, canvas.height);
    particles.push(particle);
  }

  function spring(partA, partB) {
    var dx = partB.x - partA.x,
      dy = partB.y - partA.y,
      dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < minDist) {
      var alpha = 1 - dist / minDist;
      context.strokeStyle = 'rgba(0, 255, 255, ' + alpha + ')';
      context.beginPath();
      context.moveTo(partA.x, partA.y);
      context.lineTo(partB.x, partB.y);
      context.stroke();

      var ax = dx * springAmount,
        ay = dy * springAmount;
      partA.vx += ax / partA.mass;
      partA.vy += ay / partA.mass;
      partB.vx -= ax / partB.mass;
      partB.vy -= ay / partB.mass;
    }
  }

  function move(partA, i) {
    partA.x += partA.vx;
    partA.y += partA.vy;
    if (partA.x > canvas.width) {
      partA.x = 0;
    } else if (partA.x < 0) {
      partA.x = canvas.width;
    }
    if (partA.y > canvas.height) {
      partA.y = 0;
    } else if (partA.y < 0) {
      partA.y = canvas.height;
    }
    for (var partB, j = i + 1; j < numParticles; j++) {
      partB = particles[j];
      spring(partA, partB);
    }
  }

  function draw(particle) {
    particle.draw(context);
  }

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas);

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'white';
    context.textAlign = "center";

    var lineheight = 45;
    var introContent = [
      'Mayowa Falade',
      'Software Developer'
    ]

    var x = canvas.width / 4;
    var y = canvas.height / 4;

    for (var i = 0; i < introContent.length; i++) {
      context.font = 25 / (i + 0.8) + "px Verdana";
      context.fillText(introContent[i], x, y + (i * lineheight));
    }

    particles.forEach(move);
    particles.forEach(draw);
  }());
})();
