





function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

}

function draw() {
  background(1,23,102);  

    // variables for time
  var hr = hour();
  var min = minute();
  var sec = second();

    

   
    // map the angles
   var secAngle = map(sec,1,60,0,360);
   var hrAngle = map(hr,1,12,0,360);
   var minAngle = map(min,1,60,0,360); 

   var redShades = color(255,random(0,255),random(255));
  //  var blueShades = color();
    // draw the lines
    translate(width/2,height/2);

    // arc for seconds
    strokeWeight(5);
    stroke(redShades);
    noFill();
    arc(0,0,330,330,0,secAngle);
    // second hand purple one
    push();
    rotate(secAngle);
    strokeWeight(5);
    stroke(redShades);
    line(0,0,150,70);
    pop();

    
  // arcfor hour
    strokeWeight(7);
    stroke(255,0,0);
    noFill();
    arc(0,0,430,430,0,hrAngle);
    // hr hand the red one 
    push();
    rotate(hrAngle);
    strokeWeight(7);
    stroke(255,0,0);
    line(0,0,100,0);
    pop();

// arc for minutes
    strokeWeight(10);
    stroke(8,247,254);
    noFill();
    arc(0,0,400,400,0,minAngle);
    // minute hand the blue one
    push();
    rotate(minAngle);
    strokeWeight(10);
    stroke(8,247,254);
    line(0,0,100,50);
    pop();
  
    
    drawSprites();
}