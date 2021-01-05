var thief, thiefImage, ground, invisibleGround;
var bgImage;
var artifact1, artifact2, artifact3, artifact4;
var laser1, laser2, laser3, laser4, laser5, laserBeam, laserBeam2, laserRectangleImg, laserRectangleImg2, laserRectangleImg3, laserRectangle1, laserRectangle2;

function preload()
{
  thiefImage = loadImage("images/thief.png");
  bgImage = loadImage("images/wallImage.jpg");
  artifact1 = loadImage("images/artifact.png");
  artifact2 = loadImage("images/diamond.png");
  artifact3 = loadImage("images/monaLisa.png");
  artifact4 = loadImage("images/vase.png");
  laserBeam = loadImage("images/laser.png");
  laserBeam2 = loadImage("images/laser2.png");
  laserRectangleImg = loadImage("images/laserRectangle.png");
  laserRectangleImg2 = loadImage("images/laserRectangle2.png");
  laserRectangleImg3 = loadImage("images/laserRectangle3.png");
  laserRectangleImg4 = loadImage("images/laserRectangle4.png");
}

function setup() 
{
  createCanvas(1200,800);
  //creating ground and assigning velocity
  ground = createSprite(600, 780, 1500, 20);
  ground.velocityX = 5;
  //creating invisible ground
  invisibleGround = createSprite(600, 740, 1500, 20);
  invisibleGround.visible = false;
  //creating thief
  thief = createSprite(1200, 730, 50, 50);
  thief.addImage(thiefImage);
  thief.scale = 0.2;
  thief.setCollider("rectangle", 0, 0, 100, 100);
  //spawn the artifacts
  artifacts1 = createSprite(300, 300, 20, 20);
  artifacts1.addImage(artifact1);
  artifacts1.scale = 0.2;
  artifacts2 = createSprite(610, 20, 20, 20);
  artifacts2.addImage(artifact2);
  artifacts2.scale = 0.2;
  artifacts3 = createSprite(1100, 100, 20, 20);
  artifacts3.addImage(artifact3);
  artifacts3.scale = 0.2;
  artifacts4 = createSprite(50, 75, 20, 20);
  artifacts4.addImage(artifact4);
  artifacts4.scale = 0.2;
  //spawn the obstacles 
  laser1 = createSprite(25, 200, 8, 500);
  laser1.addImage(laserBeam2); 
  laserRectangle1 = createSprite(75, 200, 8, 500);
  laserRectangle1.addImage(laserRectangleImg); 
  laserRectangle1.scale = 12;
  //laser1.scale = 0.6;  
  laser2 = createSprite(350, 350, 10, 500);
  laser2.addImage(laserBeam); 
  laser2.scale = 0.6;
  /*laserRectangle2 = createSprite(330, 420, 10, 500);
  laserRectangle2.addImage(laserRectangleImg2);
  laserRectangle2.scale = 6;
  laserRectangle3 = createSprite(350, 360, 10, 500);
  laserRectangle3.addImage(laserRectangleImg3);
  laserRectangle3.scale = 5; */
  laserRectangle4 = createSprite(345, 355, 10, 500);
  laserRectangle4.addImage(laserRectangleImg4);
  laserRectangle4.scale = 0.65;
  laser3 = createSprite(1000, 75, 10, 500);
  laser3.addImage(laserBeam); 
  laser3.scale = 0.6;
  laser4 = createSprite(550, 110, 10, 500);
  laser4.addImage(laserBeam2); 
  //laser4.scale = 0.6;
  laser5 = createSprite(1000, 400, 10, 500);
  laser5.addImage(laserBeam2); 
  laser5.scale = 0.6;
}

function draw() 
{
  background(bgImage);  
  //remaking ground 
  if(ground.x > 700)
  {
    ground.x = ground.width/2;
  }
  //making thief move with arrow keys
  if(keyDown(LEFT_ARROW))
  {
    thief.x = thief.x - 10;
  }
  if(keyDown(RIGHT_ARROW))
  {
    thief.x = thief.x + 10;
  }
  if(keyDown("space"))
  {
    thief.velocityY = -5;
  }
  thief.velocityY = thief.velocityY + 0.5;
  //ending game
  if(thief.isTouching(laserRectangle1))
  {
    textSize(78);
    fill("black");
    text("Game Over", 600, 400);
    thief.velocityX = 0;
    thief.velocityY = 0;    
  }
  if(thief.isTouching(laserRectangle4))
  {
    textSize(78);
    fill("black");
    text("Game Over", 600, 400);
    thief.velocityX = 0;
    thief.velocityY = 0;    
  }
  //making thief collide with ground
  thief.collide(invisibleGround);
  thief.debug = 'true';
  laserRectangle1.debug = 'true';
  laserRectangle4.debug = 'true';
  laserRectangle1.setCollider("rectangle", 0, 0, 150, 150);
  //laser1.debug = 'true';
  //ground.debug = 'true';

  drawSprites();
}
//spawn the artifacts
/*function spawnArtifacts()
{
  if(frameCount % 60 === 0)
  {
    var artifact = createSprite(random(100,600), random(100,600), 20, 20);
    var r = Math.round(random(1,4));
    switch(r)
    {
      case 1 : artifact.addImage(artifact1);
      break;
      case 2 : artifact.addImage(artifact2);
      break;
      case 3 : artifact.addImage(artifact3);
      break;
      case 4 : artifact.addImage(artifact4);
      break; 
      default : break;
    }
    artifact.scale = 0.2;
    if(artifact.isTouching(artifact))
    {
      artifact.x = random(600,700);
      artifact.y = random(600,700);
      console.log("Hello");
    }
  }
}*/

