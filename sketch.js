var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2 , 650 , width, 10, {isStatic:true} );
 	World.add(world, ground);

	 boxPotion=width/2-100;
	 boxY=610;

	 boxLeftSprite=createSprite(boxPotion, boxY, 20, 100);
	 boxLeftSprite.shapeColor="red";

	 boxLeftBody = Bodies.rectangle(boxPotion+20, boxY, 20, 100,{isStatic:true});
	 World.add(world, boxLeftBody);

	 boxBase=createSprite(boxPotion+100, boxY+40, 200, 20);
	 boxBase.shapeColor="red";

	 boxBottomBody = Bodies.rectangle(boxPotion+100, boxY+40-25, 200, 20,{isStatic:true});
	 World.add(world, boxBottomBody);

     boxLeftSprite=createSprite(boxPotion+200, boxY, 20, 100);
	 boxBase.shapeColor="red";

	 boxRightBody = Bodies.rectangle(boxPotion+200-20, boxY, 20, 100,{isStatic:true});
	 World.add(world, boxRightBody);

	//  boxRightSprite=createSprite(boxPotion+200, boxY, 20, 100);
	//  boxBase.shapeColor="red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
}



