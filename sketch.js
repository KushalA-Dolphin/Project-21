var canvas;
var music;
var ground1,ground2,ground3,ground4;
var box1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite (100,580,200,20);
    ground1 .shapeColor="red";
    ground2 = createSprite (300,580,200,20);
    ground2 .shapeColor="yellow";
    ground3 = createSprite (500,580,200,20);
    ground3 .shapeColor="green";
    ground4 = createSprite (700,580,200,20);
    ground4 .shapeColor="blue";
    
    //create box sprite and give velocity
   box1=createSprite(random(25,700),random(540,570),40,40);
   box1 .shapeColor="black";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box1.bounceOff(edges);
    if(ground1.isTouching(box1)&& box1.bounceOff(ground1)){
        box1.shapeColor=rgb(0,0,255)
        music.play();
    }
    if(ground2.isTouching(box1)){
        box1.shapeColor=rgb(255,128,0)
        box1.velocityX=0;
        box1.velocityY=0;
        music.play();
    }
    if(ground3.isTouching(box1)&& box1.bounceOff(ground3)){
        box1.shapeColor=rgb(153,0,76);
    }
    if(ground4.isTouching(box1)&& box1.bounceOff(ground4)){
        box1.shapeColor=rgb(0,100,0)
    }
   
   
   
    drawSprites();
    //add condition to check if box touching surface and make it box
}
