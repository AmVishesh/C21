var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 50);
  movingRect=createSprite(400,800,80,80);
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
  //movingRect.velocityY= -5
  //fixedRect.velocityY= +5
  obj1= createSprite(700,400,50,30);
  obj1.velocityY=-5
  obj2= createSprite(700,100,50,30);
  obj2.velocityY=5

}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  bounceOff(obj1,obj2);
  if(isTouching(fixedRect,movingRect)){
   fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}
