class Paper{
    constructor(x,y,r){
        
       var options={
          
           'restitution':0.3,
           'friction':0.5,
           'density':7

       }

       this.x=x;
       this.y=y;
       this.r=r;
       this.image=loadImage("paper3.png.png");
       this.body=Bodies.circle(x, y, (r-20/2), options)
       World.add(world, this.body);
    }

        display()
	{
			var paperpos=this.body.position;	
			var angle=this.body.angle

			push()
			translate(paperpos.x, paperpos.y);
            rotate(angle)
			rectMode(CENTER)
            fill("black");

			imageMode(CENTER);
            image(this.image,0,0,50,50)
		
            // ellipse(this.body.position.x, this.body.position.y, this.r)
			pop()
	}
    }

