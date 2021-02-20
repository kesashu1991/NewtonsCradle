
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
 var bob1,bob2,bob3,bob4,bob5;
 var rooff;
 var rope1, rope2, rope3, rope4, rope5;
 var bg

function preload()
{
	bg=loadImage("background.jpg")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rooff=new roof(380,150,550,30)
  bob1= new bob(200,400,40,20)
  bob2=new bob(300,400,40,20)
  bob3=new bob(400,400,40,20)
  bob4=new bob(500,400,40,20)
  bob5=new bob(600,400,40,20)

  rope1=new rope(bob1.body,rooff.body,-30*6,0);
  rope2=new rope(bob2.body,rooff.body,-30*2.7,0);
  rope3=new rope(bob3.body,rooff.body,-0,0);
  rope4=new rope(bob4.body,rooff.body,30*4,0);
  rope5=new rope(bob5.body,rooff.body,30*7,0);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rooff.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  textSize(20)

  
  text("PRESS ARROW TO START",250,100);
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
  }

  if (keyCode === LEFT_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-200,y:-195});
  }

  if (keyCode === RIGHT_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-200,y:-195});
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-200,y:-195});
  }

  if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-200,y:-195});
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-200,y:-195});
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-200,y:-195});
  }
}




