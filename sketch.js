var fixedRect, movingRect,gameob1,gameob2,gameob3,gameob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameob1=createSprite(100,100,50,50);
  gameob2=createSprite(200,100,50,50);
  gameob3=createSprite(300,100,50,50);
  gameob4=createSprite(400,100,50,50);

  gameob1.shapeColor = "green";
  gameob2.shapeColor = "green";
  gameob3.shapeColor = "green";
  gameob4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,gameob1))
  {
    movingRect.shapeColor = "red";
    gameob2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameob2.shapeColor = "green";
  }
  drawSprites();

}

function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y -ob1.y < ob2.height/2 + ob1.height/2){

      return true
    }
else {
  return false
}
}