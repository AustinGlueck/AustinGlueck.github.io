






function setup() {
createCanvas(500,500);
background(20);
fill(255);


}

function draw() {

  var d = day();
  var h = hour();
  var m = minute();
  var s = second();
  var mi = millis();

//background(20);
//Night Time
if( h <=6 || h >= 20){
background(color(9, 20, 38));
//ellipse(width/2, height/2, 50, 50);
bezier(100.0, 10.0, s + 10, 250.0, 100.0, 300.0, 100, 500);
bezier(200.0, 50, m+50, 250.0, 200.0, 300.0, 200, 450);
bezier(300.0, 100, h +100, 250.0, 300.0, 300.0, 300, 400);
bezier(400.0, 150, d +200, 250.0, 400.0, 300.0, 400, 350);


if (s == 59 )
 {
   fill(random(255), random(100), random(100));
 }
}
//Day Time
if( h >=6 && h <= 20){

background(color(255, 150, 50));
//ellipse(width/2, height/2, 50, 50);
bezier(100.0, 10.0, s + 10, 250.0, 100.0, 300.0, 100, 500);
bezier(200.0, 50, m+50, 250.0, 200.0, 300.0, 200, 450);
bezier(300.0, 100, h +100, 250.0, 300.0, 300.0, 300, 400);
bezier(400.0, 150, d +200, 250.0, 400.0, 300.0, 400, 350);

if (s == 59)
 {
   fill(random(40), random(100), random(255));
 }

}

}
