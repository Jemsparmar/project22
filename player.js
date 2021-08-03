class Player
{
    constructor(x,y) {
		this.x = x;
		this.y= y;
		this.spt=createSprite(this.x, this.y, 50,50);
		this.spt.shapeColor="orange";

    }
move(x,y){
this.spt.x+=x*grid;
this.spt.y+=y*grid;
}
   
    
		
}