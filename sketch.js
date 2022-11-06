var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score;

var backgroundImg,background;
var diver, diverImg;

var fishGroup1, fishGroup2, fishGroup3, fishGroup4, fishGroup5;
var fishGroup,coinGroup, fish1, fish2, fish3, fish4, monster1, monster2, coin1;
var reset, resetImg, gameover, gameoverImg;

function preload(){
    backgroundImg = loadImage("background.png");
    diverImg = loadImage("diver.png");

    fish1 = loadImage("fish.png");
    fish2 = loadImage("fish2.png");
    fish3 = loadImage("fish3.png");
    fish4 = loadImage("fish4.png");
    monster1 = loadImage("monster.png");
    monster2 = loadImage("monster2.png");
    coin1 = loadImage("coin.png");

    resetImg = loadImage("reset.png");
    gameoverImg = loadImage("gameover.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    background = createSprite(windowWidth-50,windowHeight-500);
    background.addImage("background",backgroundImg);
    background.scale = 5.2
    background.velocityX = -6;

    diver = createSprite(100,500,20,20);
    diver.addImage("diver",diverImg);
    diver.scale = 0.4
    diver.setCollider("rectangle",0,0,diver.width,diver.height);
    diver.debug = false


    gameover = createSprite(1000,300);
    gameover.addImage(gameoverImg);
    gameover.scale = 0.9

    reset = createSprite(1000,500);
    reset.addImage(resetImg)
    reset.scale = 0.8


    fishGroup = createGroup();
    fishGroup1 = createGroup();
    fishGroup2 = createGroup();
    fishGroup3 = createGroup();
    fishGroup4 = createGroup();
    fishGroup5 = createGroup();
    coinGroup = createGroup();

    score = 0
}

function draw() {

    textSize(20);
    stroke("#296C97");
    text("Puntuación: "+ score, 1700,50);

    if(gameState === PLAY){
     reset.visible = false;
     gameover.visible = false;

        if(background.x < 05){
         background.x = width/2;
        }
     diver.y = World.mouseY;

     spawnFish();
     spawnFish1();
     spawnFish2();
     spawnFish3();
     spawnFish4();
     spawnFish5();
     spawnCoin();
     restart();
     drawSprites();

        if(fishGroup4.isTouching(diver)){
            gameState = END;
        }
        if(fishGroup5.isTouching(diver)){
            gameState = END;
        }
        if(coinGroup.isTouching(diver)){
            score = score + 10;
        }

    }
    else if(gameState === END){
        gameover.visible = true;
        reset.visible = true;

        background.velocityX = 0;
        diver.x = 0;

        fishGroup = setLifetimeEach(-1);
        fishGroup1 = setLifetimeEach(-1);
        fishGroup2 = setLifetimeEach(-1);
        fishGroup3 = setLifetimeEach(-1);
        fishGroup4 = setLifetimeEach(-1);
        fishGroup5 = setLifetimeEach(-1);
        coinGroup = setLifetimeEach(-1);

        fishGroup = setVelocityXEach(0);
        fishGroup1 = setVelocityXEach(0);
        fishGroup2 = setVelocityXEach(0);
        fishGroup3 = setVelocityXEach(0);
        fishGroup4 = setVelocityXEach(0);
        fishGroup5 = setVelocityXEach(0);
        coinGroup = setVelocityXEach(0);

      }

      if(mousePressedOver(reset)){
            restart();
      }
}

function restart(){
    gameState = PLAY
    fishGroup = destroyEach();
    fishGroup1 = destroyEach();
    fishGroup2 = destroyEach();
    fishGroup3 = destroyEach();
    fishGroup4 = destroyEach();
    fishGroup5 = destroyEach();
    coinGroup = destroyEach();

    score = 0;

}

function spawnFish(){
    if(frameCount % 190 === 0){
        var fishA = createSprite (2000,(Math.round(random(5,980),10,140)));
        fishA.addImage(fish1);
        fishA.velocityX = -6
        fishA.scale = 0.1;
        fishA.lifetime = 400;
        fishGroup.add(fishA);
    
        }
 }

 function spawnFish1(){
    if(frameCount % 220 === 0){
        var fishB = createSprite (2000,(Math.round(random(5,980),10,140)));
        fishB.addImage(fish2);
        fishB.velocityX = -6
        fishB.scale = 0.12;
        fishB.lifetime = 400;
        fishGroup1.add(fishB);
    
        }
 }

 function spawnFish2(){
    if(frameCount % 160 === 0){
        var fishC = createSprite (2000,(Math.round(random(5,980),10,140)));
        fishC.addImage(fish3);
        fishC.velocityX = -6
        fishC.scale = 0.1;
        fishC.lifetime = 400;
        fishGroup2.add(fishC);
    
        }
 }

 function spawnFish3(){
    if(frameCount % 250 === 0){
        var fishD = createSprite (2000,(Math.round(random(5,980),10,140)));
        fishD.addImage(fish4);
        fishD.velocityX = -6
        fishD.scale = 0.1;
        fishD.lifetime = 400;
        fishGroup3.add(fishD);
    
        }
 }

 function spawnFish4(){
    if(frameCount % 350 === 0){
        var fishE = createSprite (2000,(Math.round(random(8,980),10,140)));
        fishE.addImage(monster1);
        fishE.velocityX = -6
        fishE.scale = 1;
        fishE.lifetime = 400;
        fishGroup4.add(fishE);
    
        }
 }

 function spawnFish5(){
    if(frameCount % 400 === 0){
        var fishF = createSprite (2000,(Math.round(random(5,980),10,140)));
        fishF.addImage(monster2);
        fishF.velocityX = -6
        fishF.scale = 0.4;
        fishF.lifetime = 400;
        fishGroup5.add(fishF);
    
        }
 }

 function spawnCoin(){
    if(frameCount % 150 === 0){
        var Coin = createSprite (2000,(Math.round(random(5,980),10,140)));
        Coin.addImage(coin1);
        Coin.velocityX = -6
        Coin.scale = 0.1;
        Coin.lifetime = 400;
        coinGroup.add(Coin);
    
        }
 }