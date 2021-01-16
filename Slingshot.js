class Slingshot{
    constructor(bodyA, point1){
        var options = {
            bodyA: bodyA,
            pointB: point1,
            stiffness: 0.04,
            length: 50
        }
        // slSt = slingshot
        
        this.slSt = Constraint.create(options);
        this.point = point1;
        World.add(world, this.slSt);
    }

    fly(){
        this.slSt.bodyA = null;   
}


    display(){
       if(this.slSt.bodyA)
       {var bodyA = this.slSt.bodyA.position;
        var pointB = this.point;
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    } 
    }
    
}