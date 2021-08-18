var backgroundImage,cave2Img,cave3Img,cave4Img,cave5Img,cave6Img;
var protagonist,protagImgWalking,protagImgIdle;
var invisblock1,invisblock2,invisblock3;
var  platform1Img,platform2Img,platform3Img,wall1Img;
var platform1,platform2,platform3,platform4,platform5,platform6,platform7,platform8,platform9,platform10;
var collectible,collectible2,coinImg
var CoinGroup;
var gameState = 0;
var score = 0;
var bRoomChange = false;
var jumpSound,coinSound;

function preload (){

backgroundImage = loadImage("LOST images/Starting Cave.png")
cave2Img = loadImage("LOST images/Icecave2.png")
cave3Img = loadImage("LOST images/Cave3.png")
cave4Img = loadImage("LOST images/Cave 4.png")
cave5Img = loadImage("LOST images/Crystal Cave.gif")
cave6Img = loadImage("LOST images/Glowing Orb Image.png")
protagImgWalking = loadAnimation("LOST images/Main Characterframe1.png","LOST images/Main Characterframe2.png","LOST images/Main Characterframe3.png","LOST images/Main Characterframe4.png","LOST images/Main Characterframe5.png","LOST images/Main Characterframe6.png","LOST images/Main Characterframe7.png","LOST images/Main Characterframe8.png")
protagImgIdle = loadAnimation("LOST images/Main Character.png")
platform1Img = loadImage('LOST images/Platform1.png')
platform2Img = loadImage('LOST images/Platform2.png')
platform3Img = loadImage("LOST images/Platform3.png")
wall1Img = loadImage("LOST images/Wall1.png")
coinImg = loadImage("LOST images/Golden Coin.png")
coinSound = loadSound("LOST images/Coin.mp3")
jumpSound = loadSound("LOST images/jump.mp3")
}











function setup() {
createCanvas(window.innerWidth,window.innerHeight)

protagonist = createSprite(width/2,-200,50,150)
protagonist.addAnimation("Idle", protagImgIdle)
protagonist.addAnimation("Walking", protagImgWalking)
protagonist.scale = 0.4

invisblock1 = createSprite(600,1000,2000,200)
invisblock1.visible = false;
invisblock2 = createSprite(1395,880,370,200)
invisblock2.visible = false ;
invisblock3 = createSprite(1750,750,370,200)
invisblock3.visible = false;

collectible2 = createSprite(200,height+1000,50,50)
collectible2.addImage(coinImg)
collectible2.scale = 0.4
collectible2.visible = false

platform6 = createSprite(width/2,-400,50,50)
platform6.addImage(wall1Img)
platform6.visible = false   

platform7 = createSprite(width/2,-400,50,50)
platform7.addImage(wall1Img)
platform7.visible = false   

platform8 = createSprite(width/2,-400,50,50)
platform8.addImage(wall1Img)
platform8.visible = false   

platform9 = createSprite(width/2,-400,50,50)
platform9.addImage(wall1Img)
platform9.visible = false   

platform10 = createSprite(width/2,-400,50,50)
platform10.addImage(platform2Img)
platform10.visible = false   

platform4 = createSprite(width/2,-400,50,50)
platform4.addImage(platform2Img)
platform4.visible = false   

                                                        //Gamestate 3
platform1 = createSprite(width/2,height+10,50,50)     
platform1.addImage(platform1Img)
platform1.visible = false  

platform2 = createSprite(width/2,height+400,50,100)               
platform2.addImage(platform2Img)                                
platform2.visible = false

platform3 = createSprite(width/2,-400,50,50)
platform3.addImage(platform3Img)
platform3.visible = false

platform4 = createSprite(width/2,-400,50,50)
platform4.addImage(platform2Img)
platform4.visible = false   

platform5 = createSprite(width/2,-400,50,50)
platform5.addImage(platform3Img)
platform5.visible = false 

collectible = createSprite(200,height+500,50,50)
collectible.addImage(coinImg)
collectible.scale = 0.4
collectible.visible = false
                                                        //Gamestate 3

score = 0;

 CoinGroup = new Group;
 CoinGroup.add(collectible);
 CoinGroup.add(collectible2);
}               













function draw() {


protagonist.collide(invisblock1);
protagonist.collide(invisblock2);
protagonist.collide(invisblock3);
//protagonist.collide(platform1);
protagonist.collide(platform2);
protagonist.collide(platform3);
protagonist.collide(platform4);
protagonist.collide(platform5);
protagonist.collide(platform6);
protagonist.collide(platform7);
protagonist.collide(platform8);
protagonist.collide(platform9);
protagonist.collide(platform10);
protagonist.velocityY = protagonist.velocityY + 0.7
protagonist.debug = false
protagonist.setCollider("rectangle",0,0,200,470)

if(protagonist.isTouching(collectible))
{
   collectible.destroy();
   score = score + 1
   coinSound.play();
}

if(protagonist.isTouching(collectible2))
{
   collectible2.destroy();
   coinSound.play();
   score = score + 1
}

console.log(gameState)
if (keyIsDown (LEFT_ARROW))
{
    protagonist.mirrorX(-1)
    protagonist.x-=8;
    protagonist.changeAnimation("Walking",  protagImgWalking)
}
if (keyIsDown (RIGHT_ARROW))
{
   protagonist.x+=8;
   protagonist.mirrorX(1)
   protagonist.changeAnimation("Walking",  protagImgWalking)
}
if (keyIsDown (32))
{
   protagonist.y-=18
   
}

switch(gameState)
{
   case 0:
      background(backgroundImage);
      invisblock1.x = 600;
      invisblock1.y = 1000;
      invisblock2.x = 1395;
      invisblock2.y = 880;
      invisblock3.x = 1690;
      invisblock3.y = 725;
      if(protagonist.x > width)
     {
       gameState+=1
       bRoomChange = true;

      }
      if(protagonist.x < width/70)
      {
        gameState+=5     //gamestate 5
        bRoomChange = true; 
 
       }
     
      break;
   case 1:
      imageMode(CENTER)
      image(cave2Img,width/2,height/2,width,height)
      protagonist.scale = 0.3;
      protagonist.setCollider("rectangle",0,0,200,475)
      if (bRoomChange) 
      {
         protagonist.x = width/2
         bRoomChange = false
      } 
      invisblock1.x = width/2;
      invisblock1.y = 800;
      invisblock2.x = 1395;
      invisblock2.y = 880;
      invisblock3.x = 1690;
      invisblock3.y = 2000

      platform1.y=height+500
      platform1.x=width-500
      platform1.visible = false
      platform1.scale = 0.7

      platform2.y=height+500
      platform2.x=width-150
      platform2.visible = false
      platform2.scale = 1.0
     
      platform3.y=height+500
      platform3.x=width-1200
      platform3.visible = false
      platform3.scale = 0.8

      platform4.y=height+500
      platform4.x=width-750
      platform4.visible = false
      platform4.scale = 0.5

      platform5.y=height+500
      platform5.x= 100
      platform5.visible = false
      platform5.scale = 1.5

      if(protagonist.x > width)
      {
        gameState+=1   //gamestate = 2
        bRoomChange = true;
        protagonist.x = width/70
        protagonist.y = height-800
       }
       if(protagonist.x < width/70)
       {
         gameState+=2     //gamestate 3
         bRoomChange = true; 
  
        }
      
     break;
     

     case 2:
      imageMode(CENTER)
      image(cave4Img,width/2,height/2,width,height)
      protagonist.scale = 0.1;
      invisblock1.width = width;
      invisblock1.x=width/2
      invisblock1.y=height+300
      invisblock1.visible =true
      invisblock2.x=width/2
      invisblock2.y=height+500
      invisblock3.x=width/2
      invisblock3.y=height+500

      platform4.y=height-305
      platform4.x=width-1288
      platform4.visible = true
      platform4.scale = 0.6
      

      platform5.y=height-100
      platform5.x= 247
      platform5.visible = true
      platform5.scale = 1.5

      platform6.y=height-400
      platform6.x=width-1200
      platform6.visible = true
      platform6.scale = 0.5
     

      platform7.y=height-400
      platform7.x=width-1000
      platform7.visible = true
      platform7.scale = 0.3

      platform8.y=height-400
      platform8.x=width-800
      platform8.visible = true
      platform8.scale = 0.2

      platform9.y=height-400
      platform9.x=width-600
      platform9.visible = true
      platform9.scale = 0.1

      platform10.y=height-300
      platform10.x=width-200
      platform10.visible = true
      platform10.scale = 1.5

      protagonist.velocityY = protagonist.velocityY + 0.10

      if(protagonist.x > width-1)
      {
        gameState+=4 //gamestate 0
        protagonist.x = width/70
        bRoomChange = true; 
 
       }




      if (bRoomChange) 
      {
         
         bRoomChange = false
      } 
      break;

     case 3:
      imageMode(CENTER)
      image(cave3Img,width/2,height/2,width,height)
      invisblock1.x=width/2
      invisblock1.y=0
      platform1.y=height-400
      platform1.x=width-500
      platform1.visible = true
      platform1.scale = 0.7

      platform2.y=height-200
      platform2.x=width-150
      platform2.visible = true
      platform2.scale = 1.0
     
      platform3.y=height-300
      platform3.x=width-1200
      platform3.visible = true
      platform3.scale = 0.8

      platform4.y=height-300
      platform4.x=width-750
      platform4.visible = true
      platform4.scale = 0.5

      platform5.y=height-100
      platform5.x= 100
      platform5.visible = true
      platform5.scale = 1.5

      collectible.visible = true
      collectible.y = height-400

      if (bRoomChange) 
      {
         protagonist.x = width
         bRoomChange = false
      } 
      if(protagonist.x > width)
      {
        gameState-=2     //gamestate 3
        bRoomChange = true; 
 
       }
      
     break;

     case 5:
      imageMode(CENTER)
      image(cave5Img,width/2,height/2,width,height)
      invisblock1.y = height-25
      invisblock2.y = height-25
      invisblock3.y = height-25
      collectible2.y = height-300
      collectible2.visible = true
      if (bRoomChange) 
      {
         protagonist.x = width-150
         bRoomChange = false
      } 
     
      if(protagonist.x > width-1)
      {
        gameState-=5 //gamestate 0
        protagonist.x = width/70
        bRoomChange = true; 
 
       }

       break;

       case 6:
      imageMode(CENTER)
      image(cave6Img,width/2,height/2,width,height)
      protagonist.visible = false;
      platform1.visible = false;
      platform2.visible = false;
      platform3.visible = false;
      platform4.visible = false;
      platform5.visible = false;
      platform6.visible = false;
      platform7.visible = false;
      platform8.visible = false;
      platform9.visible = false;
      platform10.visible = false;
      textSize(20)
      fill("white")
      text("You look down a long and far cave.", width/7,height-400)
      text("You see a light emiting from a tunnel to your left.", width/7,height-350)
      text("as you turn the corner you notice a glowing orb of light on a pillar infront of you", width/10,height-300)
      text("and think have I really been lost this whole time?", width/7,height-250)  
      text( score + "/2 Secrets found", width/2, height/2);
      break;
}     

// if(protagonist.x > width)
// {
//   gameState+=11
//  bRoomChange = true;

// }


drawSprites();
}



function keyReleased()
{
   console.log(keyCode)
  if (keyCode === 37)
  {
     protagonist.changeAnimation("Idle",protagImgIdle)
  }

  if (keyCode === 39)
  {
     protagonist.changeAnimation("Idle",protagImgIdle)
  }
}