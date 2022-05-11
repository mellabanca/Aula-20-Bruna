const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var batata;
var travessa;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var batataConfig = {
    restitution: 0.9,
    frictionAir: 0.05
  }
  
  batata = Bodies.circle(100, 10, 20, batataConfig);
  World.add(world,batata);

  var travessaConfig = {
  isStatic: true,
  }

  travessa = Bodies.rectangle(200, 390, 400, 20, travessaConfig);
  World.add(world,travessa);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");
 Engine.update(engine);

 ellipse(batata.position.x, batata.position.y, 20);

 rect(travessa.position.x, travessa.position.y, 400, 20);
  
}

