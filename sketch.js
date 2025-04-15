let x; let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
 y = random(400);
  x = int(x);
  y = int(y);
}
 


function draw() {
  background(220);
  //circle(x,y,10);
  x = x = random(-2, 2);
  y = y = random(-2, 2)
  
  let distanciaX;
  let distanciaY;
  
 distanciaX = mouseX - x;
distanciaY = mouseY - y;
  let distancia;
  distancia=sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  
  console.log(distancia);
  
  circle(mouseX, mouseY, distancia);
  

  
  if(distancia < 3 ){
     text("Encontrei", 200, 200);
    noLoop();
    }
  
}