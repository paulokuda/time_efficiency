
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;

ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.01;
  ctx.stroke();
  ctx.beginPath();
  // ctx.arc is the circle in the middle of the clock face
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 25; num++){
    ang = num * Math.PI / 12;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  hour=(hour*Math.PI/12) +
  (minute*Math.PI/(6*120))+
  (second*Math.PI/(360*120));
  drawHand(ctx, hour, radius*0.7, radius*0.05);
    //minute
    // minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    // drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    // second=(second*Math.PI/30);
    // drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  console.log("percent: " + pos/(2*Math.PI));
  document.getElementById("time").innerHTML = (Math.round(pos/(2*Math.PI)*100) + "% of the day finished");
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
  console.log("length: " + length);
  drawCompleted(pos);
  // ctx.fillStyle = "blue";
  // ctx.fill();
  // ctx.fill();
}

function drawCompleted(position){
  console.log("position: " + position);
  ctx.beginPath();
  ctx.arc(0, 0, radius, Math.PI/2, 3*Math.PI/2, true);
  ctx.stroke();
  // ctx.fillStyle = "white";
  // ctx.fill();
};
