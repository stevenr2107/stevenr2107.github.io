let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); // Links oben
  zBereich.style("z-index",'-1'); //Verschiebung auf der z-Achse
}

function draw() {
  // Ohne background = transparent
  //text("Hallo"+mouseX,30,100)
  noStroke;
  if(mouseX >windowWidth /2){fill(0,250,0,50)}else{
    fill(250,0,250,50)
  }
  if(mouseY >windowHeight/2){fill(0,100,30,50)}else{
    fill(100,200,10,50)
  }
  //fill(255,50);
  circle(mouseX,mouseY,20);
}
