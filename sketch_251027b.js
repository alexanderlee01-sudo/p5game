var score = 0;
var level = 1;

function preload() {
  img = loadImage('assets/image.png');
}

function setup() {
  createCanvas(1280, 720);
  textSize(32)
}


function draw() {
  background(score*random(-1,1), score*random(-1,1), score*random(-1,1));
  image(img, width/2-((width*0.8)/2), height*0.3, width*0.5);
  fill(score*random(-1,1), score*random(-1,1), score*random(-1,1));
  text(('score:' + score), width*0.1, height*0.1);
  fill(score*random(-1,1), score*random(-1,1), score*random(-1,1));
  text(('level:' + level), width*0.1, height*0.1+32);
  
  
  if (score < 300) {
  levelone()
  } else if (score > 300 && score < 900) {
  leveltwo()
  } else if (score > 900 && score < 2000) {
  levelthree()
  } else if (score > 2000 && score < 5000) {
  levelfour()
  } else if (score > 5000 && score < 10000) {
  levelfive()
  } else if (score > 10000 && score < 100000) {
  levelsix()
  }
  
  if (mouseIsPressed === true) {
  score = score + 2
  } else {
  score = score - (score*0.01)
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
