var hr; 
var mn;
var sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);

  
}

function draw() {
  background(255,255,255);  
  
  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);

 var scAngle = map(sc, 0, 60, 0, 360);
 var mnAngle = map(mn, 0, 60, 0, 360);
 var hrAngle = map(hr %12, 0, 12, 0, 360);

 
 
 push();
 rotate(hrAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,0,100);
 pop();

 push();
 rotate(mnAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,0,100);
 pop();

 push();
 rotate(scAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,0,100);
 pop();

 strokeWeight(10);
 stroke(255,0,0);
 noFill();
 arc(0,0,300,300,90,hrAngle);
 
 stroke(0,255,0);
 strokeWeight(10);
 noFill();
 arc(0,0,280,280,90,mnAngle);

 stroke(0,0,255);
 strokeWeight(10);
 noFill();
 arc(0,0,260,260,90,scAngle);
}