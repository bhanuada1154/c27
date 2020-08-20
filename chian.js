class Chian{
    constructor (bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness: 0.4,
        }
        this.chian=Matter.Constraint.create(options)
        World.add(world,this.chian)
    }
    display(){
        line(this.chian.bodyA.position.x,this.chian.bodyA.position.y,this.chian.bodyB.position.x,this.chian.bodyB.position.y);
    }
}