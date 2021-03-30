class Stone {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            density:12,
            friction:1
        }
      
    
    this.body=Bodies.circle(x,y,r);
     
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("stone.png");
    world.add=(World,this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop(); 
    }
  }