class roof{
    constructor(x,y,width,height){
        var options_={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options_);
        World.add(world,this.body);
        this.height=height
        this.width=width
    }
    display(){
        rectMode(CENTER);
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}