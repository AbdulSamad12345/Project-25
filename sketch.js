
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var paper1;


function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(500,580,1000,40);
	dustbinObj=new dustbin(800,550);
	paper1=new Paper(100,425,25);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
   
  rectMode(CENTER);
  background("cyan");
 

  groundObject.display();
  
  paper1.display();
  dustbinObj.display();
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:130, y:-145});
	}

}

