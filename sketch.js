
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  if(keyIsDown(UP_ARROW)){
    background("red");
    
  }
  if(keyIsDown(DOWN_ARROW)){
    background("green");
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("blue");
    
  }
}




