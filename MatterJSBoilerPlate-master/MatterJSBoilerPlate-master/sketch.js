var BoyImage, mangoImage,stoneImage,treeImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mangobody1,mangobody2,mangobody3,mangobody4,mangobody5
var treebody,stonebody
function preload()
{
	BoyImage=loadImage("boy.png")
	mangoImage=loadImage("mango.png")
	stoneImage=loadImage("stone.png")
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 treebody= new Tree(700,100,);
 treebody=addImage(treeImage);
 mangobody1= new Mango (700,110);
	mangobody2=new Mango(710,100);
	mangobody3=new Mango(700,115);
	mangobody4= new Mango(710,115);
	mangobody5= new Mango(720,100);
	stonebody=new Stone (250,200);
	Engine.run(engine);
   detectCollision(stonebody,mangobody1);
   detectCollision(stonebody,mangobody2);
   detectCollision(stonebody,mangobody3);
   detectCollision(stonebody,mangobody4);
   detectCollision(stonebody,mangobody5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 mangobody1.display();
 mangobody2.display();
 mangobody3.display();
 mangobody4.display();
 mangobody5.display();
}

function detectCollision(){
	MangoBodyPosition=Mango.body.position 
	StoneBodyPosition=Stone.body.position
 var distance= dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y);
 if(distance<=Mango.r+Stone.r)
 {
	 matter.body.setStatic(Mango.body,false);
 }
}

