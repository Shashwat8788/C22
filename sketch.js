const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
var myengine,myworld,ground,ball,ball2;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options = {
    isStatic:true,
    friction:0.5
  }
  ground = Bodies.rectangle(400,380,50,50,options);
  World.add(myworld,ground);
  console.log(ground);

  ball = Bodies.circle(width/2,height/2,20,{restitution:1.2});
  World.add(myworld,ball);

  ball2 = Bodies.circle(200,height/2,20,{restitution:0.5,friction:0.5});
  World.add(myworld,ball2);
  
}

function draw() {
  Engine.update(myengine);

  background(0);

  var pos = ground.position;
  var bpos = ball.position;
  var bpos2 = ball2.position;
  
  rectMode(CENTER);
  rect(pos.x,pos.y,width,50);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(bpos.x,bpos.y,40,40);

  fill("blue");
  ellipse(bpos2.x,bpos2.y,50,50);

}