const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Rubber1;
var Rubber2;
var stone1;
var stone2;
var Iron1;
var Iron2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Rubber1 = new Rubber(100,200,200)
    Rubber2 = new Rubber(200,300,300)
    Stone1 = new Stone(150,340,300)
    Stone2 = new Stone(150,350,320)
    Iron1 = new Iron(350,330,300)
    Iron2 = new Iron(250,300,300)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Rubber1.display();
    Rubber2.display();
    Stone1.display();
    Stone2.display();
    Iron1.display();
    Iron2.display();

 
}