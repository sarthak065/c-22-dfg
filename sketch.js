
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var arrow;
var top_wall;
var newwall;
var ball1
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  arrow=createImg("up.png")
 arrow.position(20,30);
 arrow.size(40,40);
 arrow.mouseClicked(apply);
  ground =new Ground(200,390,400,20);
 



 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);
  //newwall= new Ground(150,300,50,70)
  
 ball1=new  ball(200,40,30);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  

  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  //newwall.show();
  ball1.show();
  Engine.update(engine);
}
function apply(){
  Matter.Body.applyForce(ball1, { x: 0, y: 0 }, { x: 0.05, y: 0 })

}

