class Ground 
{
 constructor (x,y,w,h)
{
    let options = {
              isStatic :true 
};
        this.body=Bodies.rectangle(x,y,w,h ,options );
        this.w=w;
        this.h=h; 
        this.x=x; 
        this.y=y;
        World.add(world,this.body);
    }

 display()
{
    var groundPos = this.body.position;
    push();

    translate(groundPos.x,groundPos.y);


    rectMode(CENTER);
    stroke("pink");
    strokeWeight(4)
    fill("225,225,0");
    fill("pink")
    rect(0, 0, this.w, this.h);
    pop();

}




}