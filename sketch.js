

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var batman,batmanImg;
var lightning,lightningImg;
var umbrella;
var drops = [];
var rand;
var maxDrops=100;
function preload(){
    batmanImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    lightningImg = loadAnimation("1.png","2.png","3.png","4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
 createCanvas(700, 800);
 //batman = createSprite(360,690,50,50);
 //batman.addAnimation("batmanWalking",batmanImg); 
 lightning = createSprite(360,50,50,50);
 lightning.addAnimation("lightning",lightningImg);
 umbrella = new Umbrella(200,500);

 //batman.scale = 0.3; 
 lightning.scale = 0.5;
  
 if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,700), random(0,700)));
    }

}
}

function draw(){
    Engine.update(engine);

    background(0);


    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
    drawSprites();
}   

