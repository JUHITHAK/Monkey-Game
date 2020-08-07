var bananaImg,BananaGroup,backgroundImg,invisibleground,backgroundj;
var obstacleImg,ObstacleGroup;
var monkey,runningmonkey;
var score = 0;

function preload(){
  
  bananaImg = loadImage("banana.png");
  backgroundImg = loadAnimation("jungle.png");
  obstacleImg = loadImage("stone.png");
  runningmonkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}


function setup() {
  
  createCanvas(400, 400);
  
  backgroundj = createSprite(200,200,0,0);
  backgroundj.addAnimation("background", backgroundImg);
  backgroundj.scale=2;
  backgroundj.x = backgroundj.width/2;
     
  backgroundj.velocityX = -3;
    
  monkey = createSprite(40,280,20,50);
  monkey.addAnimation("running",runningmonkey);
  monkey.scale = 0.08;
  
  invisibleground = createSprite(40,305,800,3);
  invisibleground.visible = false;
  
  BananaGroup = new Group();
  ObstacleGroup = new Group();
  
  
}

function draw() {
  background(150);
  //background(backgroundImg);
  if(backgroundj.x<0){
  backgroundj.x = backgroundj.width/2; 
  } 
  
  
  if(keyDown("space") && monkey.y >=270){
      monkey.velocityY = -12 ;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(invisibleground);
  
  if(monkey.isTouching(BananaGroup)){
    score = score +2
    BananaGroup.destroyEach();
    
  }
  
  if(monkey.isTouching(ObstacleGroup)){
    monkey.scale = 0.08;
  }
   
  spawnBanana();
  spawnObstacle();
     
  drawSprites();
  
  textSize(20);
  fill("white");
  text("Score:"+ score,260,100);
}




  

function spawnBanana(){
 if(World.frameCount % 80=== 0 ) {
  var banana = createSprite(325,180,10,40) ;
  banana.addImage(bananaImg);
   
   switch (score){
    case 10: monkey.scale = 0.08;
    case 20: monkey.scale = 0.09;
    case 30: monkey.scale = 0.1;
    case 40: monkey.scale = 0.11;
       break;
       default: break;
   }
   
  banana.velocityX = -4;
  banana.scale = 0.05;
  banana.lifetime = 100;
  banana.depth = monkey.depth;
  BananaGroup.add(banana);
  
 } 
}

function spawnObstacle(){
 if(World.frameCount % 80=== 0 ) {
  var obstacle = createSprite(400,285,10,40) ;
  obstacle.addImage(obstacleImg);
  obstacle.velocityX = -6;
  obstacle.scale = 0.12;
  obstacle.lifetime = 100;
  ObstacleGroup.add(obstacle);
 }
}








