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
   var dx = x - (width/2);
	 var dy = y - (height/2);

   var d = sqrt(dx*dx+dy*dy);
   set(x, y, color(d, d, ((x/width) + (y/height)) * 256));
  }
  updatePixels();

}