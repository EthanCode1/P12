var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orangeL,redL;
var appleImg,orangeImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  //Add image to apple sprite
  apple.addImage("apple",appleImg);
  //Scale the sprite if required
  apple.scale=0.07;
  //Give the velocity so the apples move downwards
  apple.velocityY = 3;
  //Give lifetime to the apple sprite
  apple.lifetime=150;
}

function createOrange() {
  orangeL = createSprite(random(50,350),40,10,10)
  //Add image to apple sprite
  orangeL.addImage("orange",orangeImg);
  //Scale the sprite if required
  orangeL.scale=0.08;
  //Give the velocity so the apples move downwards
  orangeL.velocityY = 3;
  //Give lifetime to the apple sprite
  orangeL.lifetime=150;
}

function createRed() {
  redL = createSprite(random(50,350),40,10,10)
  //Add image to apple sprite
  redL.addImage("red",redImg);
  //Scale the sprite if required
  redL.scale=0.06;
  //Give the velocity so the apples move downwards
  redL.velocityY = 3;
  //Give lifetime to the apple sprite
  redL.lifetime=150;
}

  

function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      //call createApples function
      createApples();
  }
  else if (select_sprites == 2) {
    createOrange();
  }
  else {
    createRed();
  }

}
  drawSprites();
}