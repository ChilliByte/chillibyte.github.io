var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var h = 900;
var w = 1600;
canvas.height = h;
canvas.width = w;
var gravity = 0.3;
var currentLevel;
function setLevel() {
  currentLevel = worldMap[player.worldY][player.worldX];
};
canvas.addEventListener("mousedown", getPosition, false);
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// usage:
// instead of setInterval(render, 16) ....
function render() {
  if(player !== undefined) {
    ctx.clearRect(0,0,w,h);
    setLevel();
    player.velY += gravity;
    checkCollisions();
    drawSpecials();
    player.x += player.velX;
    player.y += player.velY;
    updateValues();
    updateHUD();
    ctx.drawSvg(document.getElementById("svg").outerHTML,player.x,player.y,player.w,player.h);
    drawArrows();
    if(Math.random() < (1/150)) {
      player.velY -= 5;
      if(player.x < 800) {
        player.velX += 5;
      } else {
        player.velX -= 5; 
      }
    }
  }
}
(function animloop(){
  requestAnimFrame(animloop);
  render();
})();
function checkCollisions() {
  i = currentLevel.boxes.length
    while (i--) {
        ctx.fillStyle = "#ffdd00";
        ctx.fillRect(currentLevel.boxes[i].x, currentLevel.boxes[i].y, currentLevel.boxes[i].w, currentLevel.boxes[i].h);
        var dir = colCheck(player,currentLevel.boxes[i]);
        if (dir === "l" || dir === "r") {
            player.velX = 0;
        } else if (dir === "b" || dir === "t") {
            player.velY *= -0.3;
            player.velX = 0;
            player.jumping = false;
        }
    }
}
function drawSpecials() {
  i = currentLevel.specialBoxes.length;
    while (i--) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(currentLevel.specialBoxes[i].x, currentLevel.specialBoxes[i].y, currentLevel.specialBoxes[i].w, currentLevel.specialBoxes[i].h);
    }
}
