var car ;
var wall;
//var distanceX, distanceY;

function setup() {
  createCanvas(800,400);
 car= createSprite(400, 200, 40, 20);
 car.velocityX = -1;
  wall= createSprite(300,200,20,100);
 wall.velocityX = 1.5;
  car.shapeColor ="green";

  wall.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  
 //car.y = mouseY;
 //car.x = mouseX;
 // console.log(ball1.y-ball2.y);
 //distanceX = (ball1.width+ball2.width)/2;
 //distanceY = (car.height+ball2.height)/2;
//collison(car,wall);
/* if(touching(car,wall)){
 car.shapeColor ="pink";
  wall.shapeColor = "red";

 }
 //  if(ball1.x-ball2.x <(ball1.width+ball2.width)/2 && wall.x-ball1.x <(ball1.width+ball2.width)/2 &&car.y-ball2.y<(ball1.height+ball2.height)/2 && wall.y-ball1.y<(ball1.height+ball2.height)/2){
 
  else {
   car.shapeColor ="green";
    wall.shapeColor = "blue";
  }
  */
  //Bounceoff(car,wall);
  Bounce(car,wall);
  drawSprites();
}

function touching(object1,object2){

  if( object1.x- object2.x <( object1.width+ object2.width)/2 &&  object2.x- object1.x <( object1.width+ object2.width)/2 &&  object1.y- object2.y<( object1.height+ object2.height)/2 &&  object2.y- object1.y<( object1.height+ object2.height)/2){
 return true;

  }
else{
return false; 
}

}
function collison(object1,object2){

  if( object1.x- object2.x <( object1.width+ object2.width)/2 &&  object2.x- object1.x <( object1.width+ object2.width)/2 &&  object1.y- object2.y<( object1.height+ object2.height)/2 &&  object2.y- object1.y<( object1.height+ object2.height)/2){
// return true;
 object1.setVelocity(0,0);
  }
else{
return false; 
}
}
function Bounceoff(object1,object2){

if(object1.x- object2.x <( object1.width+ object2.width)/2 &&  object2.x- object1.x <( object1.width+ object2.width)/2){
    // return true;
    object1.velocityX = (-1)*object1.velocityX;
  }
  if(object1.y- object2.y<( object1.height+ object2.height)/2 &&  object2.y- object1.y<( object1.height+ object2.height)/2){
object1.velocityY =(-1)*object1.velocityY; 
  }
  else{
    return false;
  }
}
 function Bounce(object1,object2){
  if(object1.x- object2.x <( object1.width+ object2.width)/2 &&  object2.x- object1.x <( object1.width+ object2.width)/2){
    // return true;
    temp= object1.velocityX; 
    object1.velocityX=object2.velocityX;
     object2.velocityX = temp;
  }
  if(object1.y- object2.y<( object1.height+ object2.height)/2 &&  object2.y- object1.y<( object1.height+ object2.height)/2){
 temp= object1.velocityY;
  object1.velocityY = object2.velocityY;
   object2.velocityY=temp;
}
  else{
    return false;
  }
 

 }