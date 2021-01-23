class block{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.block=Constraint.create(options)
		World.add(world,this.block)
	}

	attach(body){
		this.block.bodyA=body;
	}

	fly()
	{
		this.block.bodyA=null;
	}

	display()
	{
		if(this.block.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}