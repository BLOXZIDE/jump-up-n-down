
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bird
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  
  //components
  ground = new Ground(width/2,height*0.88,width,10)
  L1 = new Lodge(width-900,height*0.75,25,100)
  L2 = new Lodge(width-800,height*0.65,300,25)
  L3 = new Lodge(width-700,height*0.75,25,100)
  L4 = new Lodge(width-900,height*0.50,25,100)
  L5 = new Lodge(width-800,height*0.49,300,25)
  L6 = new Lodge(width-700,height*0.50,25,100)
  L7 = new Lodge(width-900,height*0.38,25,100)
  L8 = new Lodge(width-800,height*0.36,300,25)
  L9 = new Lodge(width-700,height*0.38,25,100)
  
  //bird
  bird = new Player(width-1400,height*0.75,50,50)
  

  rectMode(CENTER)
}


function draw() 
{
  background("black");

 console.log(bird.body.position.y)
  
  Engine.update(engine);
  
  

  
  
  ground.show()
  L1.show()
  L2.show()
  L3.show()
  L4.show()
  L5.show()
  L6.show()
  L7.show()
  L8.show()
  L9.show()

  bird.show()
}

