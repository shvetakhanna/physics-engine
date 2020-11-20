class Ground
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(myworld,this.body);
        this.w=w;
        this.h=h;
    }


show()
{ 
    var pos=this.body.position;
   //fill ('red');
    //rectMode(CENTER);
   // rect(pos.x,pos.y,this.w,this.h);
    var g=createSprite(pos.x,pos.y,this.w,this.h);
    g.shapeColor="red";
    
}
}