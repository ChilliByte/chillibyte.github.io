//Begin Levels
levels = [];

function level(w) {
    this.boxes = [];
    this.water = [];
    this.ice = [];
    this.switches = [];
    this.doors = [];
    this.mobs = [];
    this.collectibles = [];
    this.width = w*units;
    this.offset = 0;
    levels.push(this)
}

function Box(x,y,h,w,e) {
    this.x = x*units;
    this.y = y*units;
    this.height = h*units;
    this.width = w*units;
    if(e != undefined) {
        this.waterEdge = true;
    }
}

function Collectible(x,y,w,h,t) {
    this.x = x*units;
    this.y = y*units;
    this.height = h*units;
    this.width = w*units;
    this.type = t;
    this.collected = false;
}

function Mob(x,y,w,h,s,t,xl,yl) {
    this.x = x*units;
    this.y = y*units;
    this.width = w*units;
    this.height = h*units;
    this.speed = s;
    this.type = t;
    this.x1Limit = x1;
    this.x2Limit = x2;
    this.velX = 0;
    this.velY = 0;
    this.collisionDir = "";
    this.grounded = false;
    this.hitPlayer = "";
    this.dead = false;
}

function Switch(x,y) {
    this.x = x*units;
    this.y = y*units;
    this.height = 2*units;
    this.width = units;
    this.isOn = false;
}

function Door(x,y,w,h) {
    this.x = x*units;
    this.y = y*units;
    this.height = h*units;
    this.width = w*units;
    this.isOpen = false;
}

level1 = new level(200);
level2 = new level(200);
level3 = new level(200);
level4 = new level(200);
level5 = new level(200);

//Level1
level1.boxes.push(new Box(-1,0,20,1.1));
level1.boxes.push(new Box(-1,15,5,41));
level1.boxes.push(new Box(40,16,4,40));
level1.boxes.push(new Box(80,17,3,40));
level1.boxes.push(new Box(120,18,2,40));
level1.boxes.push(new Box(160,19,1,40));

level1.switches.push(new Switch(60,14));
level1.doors.push(new Door(80,14,1,2));
// Level 2
level2.boxes = [];
level2.boxes.push({
    x: -10 * units,
    y: 16*units,
    width: 32*units,
    height: 20*units
});
level2.boxes.push({
    x: 22*units,
    y: 13*units,
    width: 30*units,
    height: 40*units
});
level2.water = [];
level2.ice = [];
level2.ice.push({
    x: 5 * units,
    y: 10 * units,
    width: 10*units,
    height: 1*units
});

level2.ice.push({
    x: 25 * units,
    y: 10 * units,
    width: 10*units,
    height: 1*units
});
level2.collectibles = [];
level2.mobs = [];
//Level 3
level3.boxes = [];
level3.boxes.push({
    x: -10 * units,
    y: 13 * units,
    width: 30*units,
    height: 20*units
});
level3.boxes.push({
    x: 15*units,
    y: 10*units,
    width: 10*units,
    height: 20 * units
});
level3.boxes.push({
    x: 25*units,
    y: 14*units,
    width:15*units,
    height: 20*units
});
level3.water = [];
level3.ice = [];
level3.collectibles = [];
level3.collectibles.push({
    x: 26*units,
    y: 13 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level3.collectibles.push({
    x: 30*units,
    y: 13*units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level3.collectibles.push({
    x: 34 * units,
    y: 13 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level3.mobs = [];
// Level 4
level4.boxes = [];
level4.boxes.push({
    x: -10 * units,
    y: 14*units,
    width: 28*units,
    height: 20*units
});
level4.boxes.push({
    x: 19 * units,
    y: 11*units,
    width: 3*units,
    height: units
});
level4.boxes.push({
    x: 18 * units,
    y: 15*units,
    width: 7*units,
    height: 20*units
});
level4.boxes.push({
    x: 28 * units,
    y: 9*units,
    width: 3*units,
    height: units
});
level4.boxes.push({
    x: 25 * units,
    y: 16*units,
    width: 5*units,
    height: 20*units
});
level4.boxes.push({
    x: 37 * units,
    y: 7*units,
    width: 13*units,
    height: units
});
level4.boxes.push({
    x: 30 * units,
    y: 17*units,
    width: 10*units,
    height: 20*units
});
level4.ice = [];
level4.collectibles = [];
level4.collectibles.push({
    x: 11 * units,
    y: 13 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.collectibles.push({
    x: 20.5 * units,
    y: 10 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.collectibles.push({
    x: 29 * units,
    y: 8 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.collectibles.push({
    x: 30 * units,
    y: 8 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.collectibles.push({
    x: 37.5 * units,
    y: 6 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.collectibles.push({
    x: 38.5 * units,
    y: 6 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.collectibles.push({
    x: 39.5 * units,
    y: 6 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level4.mobs = [];
level4.water = [];
//Level5
level5.boxes = [];
level5.boxes.push({
    x: -10 * units,
    y: 17*units,
    width: 14*units,
    height: 20*units
});
level5.boxes.push({
    x: 4*units,
    y: 15*units,
    width: 4 * units,
    height: 20 * units
});
level5.boxes.push({
    x: 8*units,
    y: 13*units,
    width: 4 * units,
    height: 20 * units
});
level5.boxes.push({
    x: 12*units,
    y: 11*units,
    width: 4 * units,
    height: 20 * units
});
level5.boxes.push({
    x: 16*units,
    y: 9*units,
    width: 4 * units,
    height: 20 * units
});
level5.boxes.push({
    x: 20*units,
    y: 7*units,
    width: 20 * units,
    height: 20 * units
});
level5.boxes.push({
    x: -10*units,
    y: 7*units,
    width: 20 * units,
    height: units
});
level4.ice = [];
level5.water = [];
level5.collectibles = [];
level5.collectibles.push({
    x: 8 * units,
    y: 6 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level5.collectibles.push({
    x: 2 * units,
    y: 16 * units,
    type: "coin",
    width: (units/5)*2,
    height: (units/5)*2,
    collected: false
});
level5.mobs = [];
level5.mobs.push({
    x: 28*units,
    y: 6*units,
    width: (units/8)*7,
    height: (units/8)*7,
    speed: 0.3,
    velX: 0,
    velY: 0,
    type: "patrol",
    x1Limit: 22*units,
    x2Limit: 34*units,
    collisionDir: "",
    grounded: false,
    hitPlayer: "",
    dead: false
});
// End Levels
