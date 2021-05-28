const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimage
var punk
var engine, world;
var flag=0

function preload() {
  
bgimage=loadImage("Images/wall1.png")


}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(0,displayHeight,3000,250)
    punk= new Punk(300,260,100,100)
    block1= new Block(400,500,100,100)
}   

function draw(){
    background(bgimage);
    Engine.update(engine);
        
        
    
    ground.display()
    punk.display() 
    block1.display() 
}


function keyPressed(){
    flag=0
if(keyCode==="W" ){
    Matter.Body.setVelocity(punk.body,{x:0,y:-5})
    flag=1
}

if(keyCode==="A" ){
    Matter.Body.setVelocity(punk.body,{x:-5,y:0})
    flag=1
}

if(keyCode==="D"){
    Matter.Body.setVelocity(punk.body,{x:5,y:0})
    flag=1
}




}

