var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score;

var backgroundImg,background;
var diver, diverImg;

var fishGroup,coinGroup,monsterGroup, fish1, fish2, fish3, fish4, monster1, monster2, coin1;
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
    coinGroup = createGroup();
    monsterGroup = createGroup();

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
     spawnCoin();
     SpawnMonster();

     if(monsterGroup.isTouching(diver)){
        gameState = END;
     }
    }

    else if(gameState === END){
        gameover.visible = true;
        reset.visible = true;

        background.velocityX = 0;
        diver.x = 0;

        fishGroup.setLifetimeEach(-1);
        coinGroup.setLifetimeEach(-1);
        monsterGroup.setLifetimeEach(-1);

        fishGroup.setVelocityXEach(0);
        coinGroup.setVelocityXEach(0);
        monsterMonster.setVelocityXEach(0);

        if(mousePressedOver(reset)){
            restart();
        }

      }


      drawSprites();
}


function spawnFish(){
    if (frameCount % 60 === 0){
        var fish = createSprite(600,Math.round(random(2000,100)),40,10);
        fish.y = Math.round(random(2000,100));
        fish.velocityX = -3;

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: obstacle.addImage(fish1);
                break;
            case 2: obstacle.addImage(fish2);
                break;
            case 3: obstacle.addImage(fish3);
                break;
             case 4: obstacle.addImage(fish4);
                break;
             default: break;
        }
        fish.scale = 0.2;
        fish.lifetime = 500;
        fish.depth = diver.depth;
        fish.depth =diver.depth+1;

        fishGroup.add(fish);
    }
}

function SpawnMonster(){
    if (frameCount % 60 === 0){
        var monster = createSprite(600,Math.round(random(2000,100)),40,10);
        monster.y = Math.round(random(2000,100));
        monster.velocityX = -3;

        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: obstacle.addImage(monster1);
                break;
            case 2: obstacle.addImage(monster2);
                break;
             default: break;
        }
        monster.scale = 0.2;
        monster.lifetime = 500;
        monster.depth = diver.depth;
        monster.depth =diver.depth+1;

        monsterGroup.add(monster);
    }
}

function spawnCoin(){
    if (frameCount % 60 === 0){
        var coin = createSprite(600,Math.round(random(2000,100)),40,10);
        coin.addImage(coin1);
        coin.scale = 0.5;
        coin.velocityX = -3;
        coin.lifetime = 500;

        coin.depth = diver.depth;
        diver.depth = diver.depth+1;

        coinGroup.add(coin);
    }
}


function restart(){
    gameState = PLAY 
    gameover.visible = false;
    reset.visible = false;

    fishGroup.destroyEach();
    coinGroup.destroyEach();
    monsterGroup.destroyEach();

    score = 0;

}