
var bgImg,invisibleGround;
var playerRightRunning,player;

var playerLeftRunning;
var playerStandingLeft;
var playerStandingRight;

var bombImage,bombExplodingImage;
var brickImage,coinImage;

var bg2Img,bg3Img,bg4Img;
var backGroundSound,bombExplodingSound;

var bulletFiringSound,healingSound;
var jamingMachineSound,jumpingSound;

var trapSound;
var drone,hangingTrap;
var enemyMachineGun;
var playButton,rock;

var trap1,trap2;
var scientificEnemyGun,scientificTrap;
var smallGround;

var invisibleBrick,brickGroup;

function preload (){

 drone=loadImage("images/drone.png")

 hangingTrap=loadImage("images/hangingTrap.png")

 enemyMachineGun=loadImage("images/machine enemy.png")

 playButton=loadImage("images/playsurvivel.png")

 rock=loadImage("images/rock.png")

 trap1=loadImage("images/trap1.png")

 trap2=loadImage("images/trap2.png")

 scientificEnemyGun=loadImage("images/scie fie enemy.png")

 scientificTrap=loadImage("images/scie-fi.png")

 smallGround=loadImage("images/small ground.png")

 trap2=loadImage("images/trap2.png")

 bombImage=loadImage("images/bomb.png")

 bombExplodingImage=loadImage("images/bombExploding.png")

 brickImage=loadImage("images/brick.png")

 coinImage=loadImage("images/coin.png")

 bgImg=loadImage("images/ground.png")

 playerRightRunning=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png","images/player6.png")

 playerStandingLeft=loadAnimation("images/leftPlayer1.png")

 playerStandingRight=loadAnimation("images/player1.png")

 playerLeftRunning=loadAnimation("images/leftPlayer1.png","images/leftPlayer2.png","images/leftPlayer3.png","images/leftPlayer4.png","images/leftPlayer5.png","images/leftPlayer6.png")

 bulletFiringSound=loadSound("sounds/bulletFiring.mp3")

 healingSound=loadSound("sounds/healing.mp3")

 jamingMachineSound=loadSound("sounds/jamingMachine.mp3")

 jumpingSound=loadSound("sounds/jumpingSound.mp3")

 trapSound=loadSound("sounds/trap.mp3")

 backGroundSound=loadSound("sounds/backGround.mp3")

 bombExplodingSound=loadSound("sounds/bombExplosion.mp3")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  invisibleGround=createSprite(width/2,height-130 , width*8, 50);
  invisibleGround.visible=false

  player=createSprite(width/2-50,height-280,10,10)

  player.addAnimation("running3",playerStandingRight)
  player.addAnimation("running1",playerRightRunning)
  player.addAnimation("running2",playerLeftRunning)
  player.addAnimation("running4",playerStandingLeft)
  
  brickGroup=createGroup()
}

function draw() {
  background(255,255,255); 
  image(bgImg,0,0,width*2,height) 
  camera.x=player.x

  player.collide(invisibleGround)

  if(keyWentUp("left")){
  player.changeAnimation("running4",playerStandingLeft)
  }

  if(keyDown("left")){
    player.x-=16
    player.changeAnimation("running2",playerLeftRunning)
  }

if(keyWentUp("right")){
player.changeAnimation("running3",playerStandingRight)
}

  if(keyDown("right")){
    player.x+=16
    player.changeAnimation("running1",playerRightRunning)
  }

  if(keyDown("space")){
   player.velocityY-=8
  }

  player.velocityY+=3
spawnBricks()
  drawSprites();
}


function spawnBricks() {
  
  if (frameCount % 300 === 0) {
    var brick = createSprite(4000,120,100,40);
    brick.y = Math.round(random(200,500));
     var invisibleBrick=createSprite(brick.x,brick.y,100,28)
    brick.addImage(brickImage);
    brick.velocityX = -5;
    invisibleBrick.velocityX=-5
    brick.lifetime = 1000;
   brickGroup.add(invisibleBrick)
   brickGroup.add(brick)
    invisibleBrick.visible=false
    player.collide(invisibleBrick)
  }
}