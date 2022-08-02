var gameState = "play"

function preload(){
    bground1 = loadImage("background,png.png");
    coin1 = loadImage("coin.png.png");
    girl1 = loadImage("girl.png.png");
    train1 = loadImage("trainl.png");
    train2 = loadImage("trainm.png");
    train3 = loadImage("trainr.png");
}

function setup() {
    createCanvas(500, 500);
    bg = createSprite(250, 280, 500, 500);
    bg.addImage(bground1); bg.scale=0.5
    
    girl = createSprite(190, 270, 100, 100);
    girl.addImage(girl1);
    girl.scale = 0.7

    trainlGroup = new Group();
    trainmGroup = new Group();
    trainrGroup = new Group();
}

function draw() {
 background(0);

if(gameState === "play"){
    if(keyDown("left_arrow")){
        girl.x = girl.x - 3; 
    }
       
    if(keyDown("right_arrow")){
        girl.x = girl.x + 3; 
    }
       
    if(trainmGroup.isTouching(girl) || trainrGroup.isTouching(girl) || trainlGroup.isTouching(girl) ){
        //trainm.velocityY = 0
        gameState = "end"
    }
       
       
        spawnCoins();
        spawnTrainsm();
        spawnTrainsr();
        spawnTrainsl();
}

else if(gameState === "end"){
    //trainl.velocityY = 0;
    //trainm.velocityY = 0;
    //trainr.velocityY = 0;
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
    trainlGroup.setLifetimeEach(-1);
    trainlGroup.setVelocityXEach(0);
    trainmGroup.setLifetimeEach(-1);
    trainmGroup.setVelocityXEach(0);
    trainrGroup.setLifetimeEach(-1);
    trainrGroup.setVelocityXEach(0);
}
 drawSprites();
}

function spawnTrainsl(){
 if(frameCount % 500 === 0){

 trainl = createSprite(80, 50, 100, 100);
 trainl.addImage(train1);
 trainl.scale = 0.2
 trainl.velocityY = 7
 trainl.lifetime = 150
}
}

function spawnTrainsm(){
if(frameCount % 100 === 0){

 trainm = createSprite(190, 50, 100, 100);
 trainm.addImage(train2);
 trainm.scale = 0.15
 trainm.velocityY = 4
 trainm.lifetime = 150
}
}

function spawnTrainsr(){
if(frameCount % 300 === 0){

 trainr = createSprite(300, 50, 100, 100);
 trainr.addImage(train3);
 trainr.scale = 0.2
 trainr.velocityY = 5
 trainr.lifetime = 150
}
}

function spawnCoins(){
    if(frameCount % 300 === 0){

        coin = createSprite(300, 50, 100, 100);
        coin.addImage(coin1);
        coin.scale = 0.2
        coin.velocityY = 5
        coin.lifetime = 150
        coin.x = Math.round(random(20, 450))
       }  
}