var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var engine, world;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var ground;
var score = 0;
var count = 0;
var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 text("10",35, 750);
 text("10",110, 750);
 text("10",190, 750);
 text("10",275, 750);
 text("5",350, 750);
 text("5",425, 750);
 text("5",515, 750);
 text("15",590, 750);
 text("15",670, 750);
 text("15",756, 750);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null){
    particle.display();
    if(particle.y>760&&particle.position.x<300){
      
        score=score+10;
        particle=null;
        if(count>=5)gameState="end";
      }
  }
  }
  if(particle!=null){
    particle.display();
    if(particle.position.y>760){
      if(particle.position.x>301&&particle.position.x<600){
        score=score+5;
        particle=null;
        if(count>=5)gameState="end";
      }
  }
  }
  if(particle!=null){
    particle.display();
    if(particle.position.y>760){
      if(particle.position.x>601&&particle.position.x<900){
        score=score+15;
        particle=null;
        if(count>=5)gameState="end";
      }
    }
  }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   mousePressed();


function mousePressed() {
  if(gameState!=="end") {
    count++;
    particle=new Particle(mouseX, 10, 10, 10)
  }
}