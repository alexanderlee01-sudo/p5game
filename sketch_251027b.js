var score = 0;
var level = 1;

function preload() {
  img = loadImage('assets/image.png');
}

function setup() {
  createCanvas(500, 500);
  textSize(32)
}


function draw() {
  background(255);
  image(img, 0, height*0.3, width*0.8, height*0.8);
  text(('score:' + score), width*0.1, height*0.1);
  text(('level:' + level), width*0.1, height*0.1+32);
  
  
  if (score < 300) {
  levelone()
  } else if (score > 300 && score < 900) {
  leveltwo()
  } else if (score > 900 && score < 5000) {
  levelthree()
  } else if (score > 5000 && score < 20000) {
  levelfour()
  } else if (score > 20000 && score < 100000) {
  levelfive()
  } else if (score > 100000 && score < 100000000) {
  levelsix()
  }
  
  if (mouseIsPressed === true) {
  score = score + 2
  } else {
  score = score - 10
  }
  
  if (score < 0) {
  score = 0
  }
  
}

function levelone() {
level = 1
}

function leveltwo() {
level = 2
}

function levelthree() {
level = 3
}

function levelfour() {
level = 4
}

function levelfive() {
level = 5
}

function levelsix() {
level = 6
}
