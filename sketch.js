const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,box3,pig2,log1,log2,log3,log4,b;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log2=new log (810,180,300,PI/2);
    box1 = new Box(700,320);
    box2 = new Box(920,320);
    ground = new Ground(600,height,1200,20);
    pig1= new pig (810,350);
    box3=new Box (700,240);
    pig2= new pig (810,220);
    box4=new Box(920,240);
    log1=new log (810,260,300,PI/2);
    log3=new log (760,140,150,PI/7);
    log4=new log (870,140,150,PI/-7);
    b= new bird (100,100);
}

function draw()
{
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
     
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    b.display();
}