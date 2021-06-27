var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
if (keyDown("up")){
  background("red")
}
if (keyDown("down")){
  background("blue")
}
if (keyDown("left")){
  background("darkgreen")
}
if (keyDown("right")){
  background("yellow")
}
drawSprites ();


}



