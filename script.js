var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//STARS
var stars = [];
var times = Math.floor((Math.random() * 30) + 10);
while(times--) {
  ctx.fillStyle = "white";
  starX = Math.floor((Math.random() * window.innerWidth - 33) + 33);
  starY = Math.floor((Math.random() * 2*(window.innerHeight/3) - 33) + 33);
  ctx.fillRect(starX,starY,3,3);
  
  stars.push([starX,starY,Math.floor((Math.random() * 100) + 1)]);
  
}
//TERAIN GENERATION FUNCTION
//FROM somethinghitme
//URL: http://www.somethinghitme.com/2013/11/11/simple-2d-terrain-with-midpoint-displacement/
function terrain(width, height, displace, roughness) {
    var points = [],
        // Gives us a power of 2 based on our width
        power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

    // Set the initial left point
    points[0] = height / 2 + (Math.random() * displace * 2) - displace;
    // set the initial right point
    points[power] = height / 2 + (Math.random() * displace * 2) - displace;
    displace *= roughness;

    // Increase the number of segments
    for (var i = 1; i < power; i *= 2) {
        // Iterate through each segment calculating the center point
        for (var j = (power / i) / 2; j < power; j += power / i) {
            points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
            points[j] += (Math.random() * displace * 2) - displace
        }
        // reduce our random range
        displace *= roughness;
    }
    return points;
}

var terPoints = terrain(canvas.width, canvas.height, canvas.height / 3, 0.5);

//MOON
var moonX = Math.floor((Math.random() * window.innerWidth - 250) + 250);
var moonY = Math.floor((Math.random() * window.innerHeight/2) + 50);

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var i;
var currentStar;
function render() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  //STARS
  i = stars.length;
  ctx.fillStyle = "white";
  while(i--) {
    currentStar = stars[i];
      ctx.fillRect(currentStar[0]-(currentStar[2]/50),currentStar[1]-(currentStar[2]/50),currentStar[2]/25,currentStar[2]/25);
      currentStar[2]++;
      if(currentStar[2] >= 100) {
        currentStar[2] = 0;
      }
  }
  
  //MOON
  ctx.fillStyle="#e9e9f9"
  ctx.fillRect(moonX,moonY,100,100)
  ctx.fillStyle="#bababa"
  ctx.fillRect(moonX,moonY + 10,10,45) //Strip on left
  ctx.fillRect(moonX + 10,moonY + 20,30,30) //Big Square at center left
  ctx.fillRect(moonX + 30,moonY + 40,20,20) //Medium Square at lower left
  //ctx.fillRect(moonX + 30,moonY + 15,25,25)
  //ctx.fillRect(moonX + 40,moonY + 50,20,10)
  //ctx.fillRect(moonX + 50,moonY + 40,20,10)
  
  //TERRAIN
  //FROM somethinghitme 
  //URL: http://www.somethinghitme.com/2013/11/11/simple-2d-terrain-with-midpoint-displacement/
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, terPoints[0]);
  for (var t = 1; t < terPoints.length; t++) {
      ctx.lineTo(t, terPoints[t] + 100);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

}

//START Animation
(function animloop(){
  requestAnimFrame(animloop);
  render();
})();

