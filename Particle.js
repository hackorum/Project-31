class Particle {
    constructor(x, y, r, c) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.c = c;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(this.c);
        ellipse(pos.x,pos.y,this.r);
    }
}