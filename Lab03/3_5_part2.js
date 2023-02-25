HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 03.01</title>
</head>
<body>
<p style="line-height: 18px; font-size: 18px;  font-family: times,monospace;">
    <script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
    <script src="script.js"></script>
</p>
</body>
</html>


JavaScript:

function preload() {

}


function setup() {

    createCanvas(512, 512);
    background(255);

    var x0 = -1;
    var y0 = -1;
    var x1 = -1;
    var y1 = -1;
}

function mousePressed() {

    x0 = mouseX;
    y0 = mouseY;
}

function mouseDragged() {

    x1 = mouseX;
    y1 = mouseY;
    background(255);
    noStroke();
    fill('red');
    ellipse(x0 - 3, y0 - 3, 6);
    fill('green');
    ellipse(x1 - 3, y1 - 3, 6);
}

function mouseReleased() {

    background(255);
    loadPixels();
    draw_line();
    updatePixels();
}

function set_pixel(x, y, c) {

    idx = (y * 512 + x) * 4;
    pixels[idx] = -c;
    pixels[idx + 1] = c;
    pixels[idx + 2] = 0;
    pixels[idx + 3] = 255;
}

function draw_line() {

    dx = x1 - x0;
    dy = y1 - y0;

    y = 0;
    while (y < 512) {
    
        x = 0;
        
        while (x < 512) {
        
            Dxy = 2 * dy * (x - x0) - 2 * dx * (y - y0);
            set_pixel(x, y, Dxy);
            x++;
        }
        
        y++;
        
    }
}