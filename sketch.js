function setup() {
  createCanvas(400, 400);
  richtung = 1;
  x = 0;
  y = 0;
}

function draw() {
  background(220);
  circle(x, y, 50);
  fill(3, 50, 110);
  if (x >= 400) {
    richtung = 1;
  }
  if (x <= 0) {
    richtung = 0;
  }
  if (richtung == 1) {
    x--;
  }
  if (richtung == 0) {
    x++;
  }
  if (y >= 400) {
    richtung = 1;
  }
  if (y <= 0) {
    richtung = 0;
  }
  if (richtung == 1) {
    y -= 5;
  }
  if (richtung == 0) {
    y += 5;
  }
}
