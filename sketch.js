
  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;

  var myworld,myengine,ball,ground;

  function setup()
  {
    createCanvas(400,400);
    myengine=Engine.create();
    myworld=myengine.world;
    var kall_options={
      restitution:2.0
    }
    //var bround_options={
      //isStatic: true
    //}
    ball=Bodies.circle(200,200,40,kall_options);
    World.add(myworld,ball);
    //ground=Bodies.rectangle(200,380,400,20,bround_options);
    //World.add(myworld,ground);
    ground=new Ground(200,380,400,20);
  }

  function draw()
  {
    background(0);
    Engine.update(myengine);
    //rectMode(CENTER);
    ellipseMode(RADIUS);
    //rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,40,40);
    ground.show();
    drawSprites();
    
  }