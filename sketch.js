var canvas;
var music;
var box1,box2,box3,box4;
var ball;
 var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(0,580,360,30);
box1.shapeColor="blue";
box2=createSprite(295,580,200,30);
box2.shapeColor="black";
box3=createSprite(515,580,200,30);
box3.shapeColor="pink";
box4=createSprite(740,580,220,30);
box4.shapeColor="purple";
ball=createSprite(random(20,750),20,40,40);
ball.velocityX=6;
ball.velocityY=7;
edges=createEdgeSprites();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

ball.bounceOff(edges);
if(box1.isTouching(ball)&&ball.bounceOff(box1)){
    ball.shapeColor="blue"

}
if(box2.isTouching(ball)){
    ball.shapeColor="black"
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();

}
if(box3.isTouching(ball)&&ball.bounceOff(box3)){
    ball.shapeColor="pink"
    music.play();

}
if(box4.isTouching(ball)&&ball.bounceOff(box4)){
    ball.shapeColor="purple"

}

    //add condition to check if box touching surface and make it box
    drawSprites()
}
