class Punk extends BaseClass{
  constructor(x, y, width, height){
    super(x,y,width,height)
    this.image = loadImage("images/punk.png")
  }
}
// class Punk{
//   constructor(x, y, width, height) {
//       var options = {
//           'restitution':0.8,
//           'friction':1.0
         
//       }

//       this.image = loadImage("images/punk.png");
//       this.body = Bodies.rectangle(x, y, width, height, options);
//       this.width = width;
//       this.height = height;
//       World.add(world, this.body);
//     }
//     display(){
//         var angle = this.body.angle;
//         push();
//         translate(this.body.position.x, this.body.position.y);
//         rotate(angle);
//         imageMode(CENTER);
//         image(this.image, 0, 0, this.width, this.height);
//         pop();
//       }
// }