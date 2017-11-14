var socket;
var r = 0;
var g = 0;
var b = 0;
function setup() {
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  createCanvas(900, 900);
  background(51);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', function(data) {
      
      console.log("Got: " + data.x + " " + data.y + " " + data.r + " " + data.g + " " + data.b);
      fill(r,g,b);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );
}

function draw() {
  // Nothing
}



function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  sendmouse(mouseX,mouseY, r,g,b);
}

function sendmouse(xpos, ypos, red, green, blue) {
  console.log("sendmouse: " + xpos + " " + ypos + " " + red + " " + green + " " + blue);
  var data = {
    x: xpos,
    y: ypos,
    r: red,
    g: green,
    b: blue
  };
  socket.emit('mouse',data);
}
