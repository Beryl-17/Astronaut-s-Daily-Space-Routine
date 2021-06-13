var astronaut;
var sleeping;
var exercise;
var bath;
var eating;
var moving;
var cabinRoom;
var cabinRoomImg;
var brushing;
var drinking;


function preload(){
  cabinRoomImg = loadImage("iss.png");
  moving = loadAnimation("move.png");
  sleeping = loadAnimation("astronautSleeping.png");
  exercise = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eating = loadAnimation("eat1.png","eat2.png");
  brushing = loadAnimation("brush.png");
  drinking = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);
  
  astronaut= createSprite(400, 200, 50, 50);
  astronaut.addAnimation("Astronaut Sleeping",sleeping);
  astronaut.scale = 0.1;
  cabinRoom = createSprite(400,200,500,540);
  cabinRoom.addImage(cabinRoomImg);
  cabinRoom.scale = 0.15;
}

function draw() {
  background(255,255,255); 
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("To Exercise",exercise);
    astronaut.changeAnimation("To Exercise");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("Astronaut Brushing",brushing);
    astronaut.changeAnimation("Astronaut Brushing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Astronaut Eating",eating);
    astronaut.changeAnimation("Astronaut Eating");
    astronaut.y = 240;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = -0.7;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Astronaut Drinking",drinking);
    astronaut.changeAnimation("Astronaut Drinking");
    astronaut.y = 240;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("a")){
    astronaut.addAnimation("Astronaut Sleping",sleeping);
    astronaut.changeAnimation("Astronaut Sleeping",sleeping);
    astronaut.y = 240;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("b")){
    astronaut.addAnimation("Astronaut Bathing",bath);
    astronaut.changeAnimation("Astronaut Bathing",bath);
    astronaut.y = 240;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("Astronaut Moving",moving);
    astronaut.changeAnimation("Astronaut Moving");
    astronaut.y = 240;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = -0.7;
  }
  
  astronaut.depth = cabinRoom.depth;
  astronaut.depth = astronaut.depth + 1;
  
  
  
  drawSprites();
  fill("white") ;
  text("Instructions:", 60, 30);
  fill("white") ;
  text("Letter a = sleeping", 75, 50);
  fill("white") ;
  text("Down Arrow = Exercise", 75, 65);
  fill("white") ;
  text("Left Arrow = Drinking", 75, 80);
  fill("white") ;
  text("Letter b = Bath", 75, 95);
  fill("white") ;
  text("Right Arrow = Eating", 75, 110);
  fill("white") ;
  text("Up Arrow = Brushing", 75, 125);
  fill("white") ;
  text("Letter m = Moving", 75, 140)

}