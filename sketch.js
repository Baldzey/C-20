var fixedRect, movingRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "black"
  movingRect = createSprite(500,200, 50, 50)
  movingRect.shapeColor = "white"
}

function draw() {
  background("red"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  console.log(movingRect.x);

createEdgeSprites();
if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 && 
 fixedRect.x - movingRect.x < fixedRect.width /2 + movingRect.width / 2 && 
 fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2 && 
 movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 ){

movingRect.shapeColor = "green";
}
else 
movingRect.shapeColor = "white";






  drawSprites();
}