Całość realizowana przy pomocy jsfiddle.net

----------------------------------------------------------------------------------------------------------------------------

HTML:

<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>

-----------------------------------------------------------------------------------------------------------------------------

JAVASCRIPT:

function setup() {

createCanvas(800,600);
noLoop();

}
function draw() {  
background(0);
for(y=0; y<height; y++)
   for(x=0; x<width; x++) {
   set(x, y, color(184, 3, 255));
  }
  updatePixels();

}