
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,Paper,leftpart,basepart,rightpart;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	dustbin = new Dustbin(720, 390, 100, 10);
	Paper = new paper(100, 300, 10);

	ground = new Ground(400, 680, 800, 20);
  
	 leftpart = new Dustbin(550, 620, 20, 100);
     basepart = new Dustbin(635, 660, 150, 20);
	 rightpart = new Dustbin(720, 620, 20, 100);

	 Engine.run(engine);
}
	

function draw() {
	


	rectMode(CENTER);
    background(0);

  Engine.update(engine);
  
  

	Paper.display();
	dustbin.display();
	
	leftpart.display();
	rightpart.display();
	basepart.display();
	ground.display();


	drawSprites(); 
	
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(Paper.body, Paper.body.position, 
		   {x:13, y: -15})
	}

  }


