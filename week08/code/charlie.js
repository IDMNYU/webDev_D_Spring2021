// code by Charlie Tiberio
// https://leg-bone.github.io/

console.log("hello world!");

let xpos = 0;
let ypos = 0;
let xdir = 4;
let ydir = 5;
let mov;
let serial;
let speed = ["jan", "tuesday", "april", 6, false]


function setup() {
  createCanvas(windowWidth, windowHeight);
  mov = loadImage("mov5.png");
  Serial = new p5.SerialPort();
  Serial.list();
  Serial.open("/dev/tty.usbmodem14401");
  Serial.on("data", speedUp);
  
}
function speedUp(){
  let input = Serial.readLine();
  print (input);
}
function draw() {
  background(0);
 // ellipse (xpos,ypos, ,20);
  image (mov, xpos, ypos, 60, 60);
  xpos = xpos + xdir;
  ypos = ypos + ydir;
  if(xpos > width - 60 || xpos < 0){
    xdir = -xdir;
  }
    if(ypos > height - 60 || ypos < 0){
    ydir = -ydir;
  }
}