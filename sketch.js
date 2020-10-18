var backgroundimage
var bg
var chorimage
var theif
var score=0;
var invisibleground
function preload (){
backgroundimage=loadImage("bg1.jpg")
chorimage=loadImage("chor.png")
obstacleImage=loadImage("car1.png")
}

function setup(){
createCanvas(500,500);
bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bg.addImage(backgroundimage)
bg.scale=2.5;
bg.velocityX=-8


theif=createSprite(50,400,10,10);
theif.addImage(chorimage);
theif.scale=0.5;
invisibleground=createSprite(250,480,500,10)
invisibleground.visible=false;

}


function draw(){

background("black")
if(bg.x<0){
    bg.x=bg.width/2
}
if(keyDown("space")&theif.y>=390.5){
    theif.velocityY=-13;
}
theif.velocityY=theif.velocityY+0.8;
console.log(theif.y);
theif.collide(invisibleground)
obstacles();
drawSprites();
textSize(22);
fill("red")
text("score= "+score,350,50)
}

function obstacles(){
    if(frameCount%60===0){

    
    var obstacle=createSprite(500,460,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-8
    obstacles.lifetime=100;
}
}








