class Iron{
	constructor(x,y,r)
	{
	// assign options to the Iron ball
    var options = {
		'restitution':0.8,
		'friction':3,
		'density':30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("Silver");
			fill("Silver");
			//draw the ellipse here to display the Iron ball
            
			pop()
	}

}