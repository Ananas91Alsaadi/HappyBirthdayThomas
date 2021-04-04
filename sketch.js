// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;
let  BS=0;
var s;

function preload() {
  m=loadSound("Brilliant Fireworks - Whistling.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
  m.play();
}

function  windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {

  colorMode(RGB);
  background(30, 30, 70,25);
  
  if(BS<50){
     s=true;
     }
    if(BS>60){
          s=false;

     }
  if(s){
     BS++;
     }else{BS--}


  
  
  
  
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
textAlign(CENTER);
    textSize(BS);
  text("HAPPY BIRTHDAY!!!",width/2,100);
    text("THOMAS",width/2,200);


}
