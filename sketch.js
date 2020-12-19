var monkey , monkey_running
var banana ,bananaImage,bananaGroup
var obstacle, obstacleImage, obstacleGroup
var food,foodGroup;
var score
var gameState="PLAY";
var gamestate="END";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

  monkey=createSprite(80,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  console.log(ground.x);
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
}

function draw(){
   background(255);
  
  if(gameState==="PLAY"){
    if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-5;
  
  
  }
    monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  }
  
  if(obstacleGroup.isTouching(monkey)){
      monkey.velocityX=0;
      ground.velocityX=0;
      food.velocityX=0;
      obstacle.velocityX=0;
      gameState="END";
  }
      
      if(gameState==="END"){
     textSize(30);
     stroke("yellow");
     text("gameover",200,200);
     
  }
    
  
  spawnfood();
  spawnobstacle();
  
  
      drawSprites();
}
  
  function spawnobstacle(){
 if (frameCount % 140 === 0){
   var obstacle = createSprite(200,325);
   obstacle.addImage(obstacleImage);
   obstacle.x=Math.round(random(120,400));
   obstacleGroup.add(obstacle);
   obstacle.scale=0.1;
   obstacle.velocityX = -4;
 } 
  } 
  
  function spawnfood(){
    if(frameCount%90===0){
      var banana=createSprite(400,150);
      banana.addImage(bananaImage);
      banana.x=Math.round(random(120,400));
      foodGroup.add(banana);
      banana.scale=0.1;
      banana.velocityX=-4;
    }
  }
