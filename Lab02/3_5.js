<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
<script type="text/javascript">
function preload() {
 img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
 img_h = createImage(256, 256);
 img_s = createImage(256, 256);
 img_v = createImage(256, 256);
 
}
function setup() {
 createCanvas(512,512);
 img.resize(256, 256);
 
 img.loadPixels();
 img_h.loadPixels();
 img_s.loadPixels();
 img_v.loadPixels();
 
 
 for(x=0;x<img.width;x++)
   for(y=0;y<img.height;y++) {     
     pos=4*(y*img.width+x);
     
		r=img.pixels[pos]/255;
		g=img.pixels[pos+1]/255;
		b=img.pixels[pos+2]/255;
		
    cmax = Math.max(r,g,b);
		cmin = Math.min(r,g,b);
		v=cmax;
    
    mx=(pos/4)%256;//indeks kolumny wewnątrz wiersza
		my=(pos/4)/256;//indeks wiersza

    
    img_v.set(mx,my,255*v);
    
     
 }
 
 img_h.updatePixels();
 img_s.updatePixels();
 img_v.updatePixels();
 


 image(img_h, 0, 0);
 image(img_s, 256, 0);
 image(img_v, 0, 256);
 image(img, 256, 256);
 
}
</script>