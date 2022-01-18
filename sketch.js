var fixed, moving
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 70, 70);
fixed.shapeColor="red";
moving=createSprite(200,100,50,50);
moving.shapeColor="red";


  
}

function draw() {
  background(255,255,255); 
  moving.x=mouseX
  moving.y=mouseY   
  console.log(fixed.width/2+moving.width/2) ;
  if(moving.x-fixed.x<fixed.width/2+moving.width/2 &&
    fixed.x-moving.x<fixed.width/2+moving.width/2 &&
    moving.y-fixed.y<fixed.height/2+moving.height/2 &&
    fixed.y-moving.y<fixed.height/2+moving.height/2

    ){
    fixed.shapeColor="blue"
    moving.shapeColor="blue"


  }
  else{
    fixed.shapeColor="red"
    moving.shapeColor="red"

  }
  drawSprites();
}