//Katharine LoScalzo
//27 October 2016
//when the ball hits the side of the screen, play sound

var ballHit;
var xPos;
var yPos;
var xDirect;
var yDirect;
var xVelo;
var yVelo;

function preload() {
    ballHit = loadSound("assets/ball.wav");
}

function setup() {
    createCanvas(700, 700);
    background(190, 10, 70);

    xPos = 1;
    yPos = 1;
    xDirect = 1;
    yDirect = 1;
    xVelo = 7;
    yVelo = 7;
}

function draw() {
    background(190, 10, 70);
    fill(0, 255, 0);
    ellipse(xPos, yPos, 100, 100);

    xPos = xPos + xVelo;
    yPos = yPos + yVelo;


    if (xPos >= width || xPos <= 0) {
        ballHit.play();
        xVelo = xVelo * xDirect;
        xDirect = -xDirect;
    }

    if (yPos >= height || yPos <= 0) {
        ballHit.play();
        yVelo = yVelo * yDirect;
        yDirect = -yDirect;
    }

}
