function setup() {
    createCanvas(650,550);

    

}

var score = 0
var avatarX = 365
var avatarY = 470
var avatarD = 100
var cheeseX = 325
var cheeseY = 250
var cheeseD = 155

function draw() {

  background(70, 140, 0); //so bg is constantly there
 
  //instructions
  fill(98,45,45);
  textSize(22);
  textFont('Segoe Print');
  text("The mouse is hungry. Use WASD to feed him!", 40, 545);

  //score
  fill(78,45,45);
  textSize(32);
  textFont('Segoe Print');
  text(score, 320, 32);

  //bite director  
  fill(78,45,45);
  textSize(32);
  textFont('Segoe Print');
  text("<-- yum yum", cheeseX+90, cheeseY+60);


//wasd controls    
if (keyIsPressed) {
  if(key == "w"){
    avatarY--;
  }
  if(key == "s"){
    avatarY++;
  }
  if(key == "a"){
    avatarX--;
  }
  if(key == "d"){
    avatarX++;
  }
}


// cheese triangle for show
   stroke("yellow");
   strokeWeight(2);    
   fill("yellow");
   triangle(175,150,325,400,475,150);


//cheese circle for dist func
stroke("yellow");
strokeWeight(2);    
fill("yellow");
circle(cheeseX, cheeseY, cheeseD);   

if(dist(avatarX, avatarY, cheeseX, cheeseY)<127.5) {
  fill(70,140,0);
  stroke(70,140,0);
  circle(cheeseX+40, cheeseY+30, 60); //green bite
    fill(130,45,85);
    textSize(50);
    textFont('Ink Free Regular');
    textStyle(BOLD);
    text("You fed the mouse! <:3", 70, 82);
  if (score == 0) {
    score = score + 100;
    

  }
}

//mouse head circle
fill(100);
stroke(100);
circle(avatarX, avatarY, avatarD);


}