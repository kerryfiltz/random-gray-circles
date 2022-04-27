function setup() {
  createCanvas(460, 460);
  frameRate(1);
}

function draw() {
  background(220);
  var step = 20
  
  for(var x=20; x < width-20; x=x+step) {
    for(var y=20; y < width-20; y=y+step) {
      var locRan = random();
      var sizeRan = random(0.5,2);
      
      line(x,y,x,y+step)
      line(x,y,x+step,y)
      line(x+step,y,x+step,y+step)
      line(x,y+step,x+step,y+step)
      
      if(locRan < 0.25) {
        ellipse(x,y,sizeRan*10,sizeRan*10)
      } else if(locRan < 0.5) {
        ellipse(x+step,y,sizeRan*10,sizeRan*10)
      } else if(locRan < 0.75) {
        ellipse(x+step,y+step,sizeRan*10,sizeRan*10)
      } else {
        ellipse(x,y+step,sizeRan*10,sizeRan*10)
      }
      
    }
  }
}