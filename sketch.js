const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup(){
  var canvas=createCanvas(400,400);

 engine=Engine.create();
 world=engine.world;

 var object_options={
   isStatic:true
 }
 
 ground=Bodies.rectangle(200,390,200,20,object_options);
 World.add(world,ground);
 var ball_options={
   restitution:0.5
 }
 ball=Bodies.rectangle(200,100,20,20,ball_options);
 World.add(world,ball);
//console.log(object);
//console.log(object.position.x);
//console.log(object.position.y);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
    rect(ball.position.x,ball.position.y,20,20);
                                                      
} 
