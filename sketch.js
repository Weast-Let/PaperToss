
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobj,paperSprite;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new paper(300,300);

	Engine.run(engine);
  
}

var thrown = false;

function draw() {
  rectMode(CENTER);
  background(230);

	if(keyCode === UP_ARROW && thrown === false){
	 var force = Matter.Vector.create(15,-20);
	 Matter.Body.setVelocity(paperobj.body, force);
	 thrown = true;
	}


  groundObject.display();
  dustbinObj.display();
  paperobj.display();

}

