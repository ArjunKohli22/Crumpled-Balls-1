
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var options= {
isStatic:false,
restitution:0.3,
friction:0.5,
density=1.2,
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

function keyPressed(){
If (keyCode===UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.Body.position,{x:85,y:-85})

}
}

}



