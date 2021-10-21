
var box1, box2;


// global variables 




function setup() {
  createCanvas(400, 400);
 box1 = new Box(50, 10, 30,30, 2);
 box2 = new Box(100, 70, 40,40, 3);
 box3= new Box(10, 150, 50,50, 3);
   // local variable
 console.log(msg)
}

function draw() {
  background(220);

  box1.display();
  box1.set_speed();
 
  box2.display();
 box2.set_speed();
 box3.display();
 box3.set_speed();

 var msg = "HEllo how are you";
 console.log(msg)



}
