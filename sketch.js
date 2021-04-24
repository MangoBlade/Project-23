var helicopterIMG, helicopterSprite, packagesprite,packageIMG;
var packageBody,ground;
var rect,rect1,rect2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	
	rect=createSprite(370,650,200,20);
	rect.shapeColor="red";
	rect = Bodies.rectangle(370, 650, 200, 20 , {isStatic:true} );
 	

	rect1=createSprite(270,620,20,100);
	rect1.shapeColor="red";
	rect1 = Bodies.rectangle(270, 670, 20, 100 , {isStatic:true} );
	;

	rect2=createSprite(470,620,20,100);
	rect2.shapeColor="red";
	rect2 = Bodies.rectangle(470, 620, 20, 100 , {isStatic:true} );


	packagesprite=createSprite(width/2, 80, 10,10);
	packagesprite.addImage(packageIMG)
	packagesprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 World.add(world, rect);
	 World.add(world, rect1);
	 World.add(world, rect2);

	Engine.run(engine);							
	
  
}


function draw() {
		

  rectMode(CENTER);
  background(0);
  packagesprite.x= packageBody.position.x 
  packagesprite.y= packageBody.position.y
 
  drawSprites();
 
}

function keyPressed() {
	

 if (keyCode === 32) {
	 Matter.Body.setStatic(packageBody,false)
	    
  }
}



