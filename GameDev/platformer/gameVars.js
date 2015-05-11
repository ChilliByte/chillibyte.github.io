var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight,
    tilesX = 40,
    tilesY = 20,
    debug = false,
    units = Math.floor(width / tilesX),
    player = {
        x: 10,
        y: 0,
        width: (units/3*2),
        height: 2*units,
        speed: Math.floor(units/8),
        velX: 0.02,
        velY: 0,
        collected: 0,
        jumping: false,
        grounded: false,
        char: 1,
        lastDir: "l"
    },
    keys = [],
    friction = 0.8,
    projectiles = [],
    gravity = 0.3,
    gravityDown = true,
    char1Sheet,
    mobDir = "right",
    frame = false;


canvas.width = units * tilesX;
canvas.height = units * tilesY;
ctx.imageSmoothingEnabled = false;

console.log("Dimensions:");
console.log("Screen Height:" + height);
console.log("Screen Width:" + width);
console.log("Canvas Height:" + canvas.height);
console.log("Canvas Width:" + canvas.width);
console.log("Tile Width:" + canvas.width / tilesX);
console.log("Tile Height:" + canvas.height / tilesY);
