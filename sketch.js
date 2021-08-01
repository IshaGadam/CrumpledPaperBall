
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var left;
var right;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(500,450,1000,10)
	left = new Ground(900,375,10,140)
	right = new Ground(600,375,10,140)


	var options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

    fill("white")
	ball = Bodies.circle(60,250,20,options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  ellipse(ball.position.x,ball.position.y,20)

  ground.display();
  left.display();
  right.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:70,y:-80})
	}
}



