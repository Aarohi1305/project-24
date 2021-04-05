class Rubber{
	constructor(x,y,r)
	{
	var options ={
		restitution : 0.3,
		friction : 5,
		density : 1
	}	

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop()
	}

}