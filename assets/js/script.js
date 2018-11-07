var c = document.getElementById("monCanvas");
 var ctx = c.getContext("2d");
 // cône de glace
 ctx.beginPath();
 ctx.moveTo(10,80);
 ctx.lineTo(60,180);
 ctx.lineTo(120,80);
 ctx.fillStyle="orange";
 ctx.fill();
// boule de glace
ctx.beginPath();
ctx.moveTo(10,80);
ctx.quadraticCurveTo(65,-30,120,80);
ctx.fillStyle="maroon";
ctx.fill();
