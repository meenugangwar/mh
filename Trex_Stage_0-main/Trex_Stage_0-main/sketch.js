
var trex,trex_running ;
var ground,groundImage;
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(40,170,40,70);
  trex.addAnimation("running",trex_running);
  trex.scale=0.6;

  ground = createSprite(300,190,600,20);
}

function draw(){
  background("pink");

  if(keyDown("space")){
    trex.velocityY=-6;
  }
  
  trex.velocityY = trex.velocityY+0.5;

  trex.collide(ground)
  drawSprites();
}
