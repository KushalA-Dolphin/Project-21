var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    surface1 = createSprite (300,580,190,10);
    

    surface2 = createSprite (100,580,190,10);
    

    surface3 = createSprite (500,580,190,10);
    

    surface4 = createSprite (700,580,190,10);
    surface4. shapeColor("red");

    box = createSprite (random(20,780),565,20,20);
    

}

function draw() {
    background(rgb(169,169,169));

    box.display();

    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    
}
