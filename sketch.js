var allSnow = [];
var sound; 
var fft; 
var spectrum; 

function preload(){

    song = loadSound("music.mp3")
    
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    fft = new p5.FFT(0, 32);
    song.play();
}


class SnowBalls{

    constructor(xPosition, yPosition, direction, velocity, size){
        this.xPosition = xPosition; 
        this.yPosition = yPosition; 
        this.direction = direction; 
        this.velocity = velocity;
        this.size = size;
    }

    

    move(){
        this.xPosition = this.xPosition + Math.cos(this.direction)*this.velocity*this.size/10* map(spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4], 0, 255, 0, 1);
        this.yPosition = this.yPosition + Math.sin(this.direction)*this.velocity*this.size/10* map(spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4], 0, 255, 0, 1);

        
    }

    display(){
        ellipse(this.xPosition, this.yPosition, this.size, this.size);
    }


}

function draw() {
    background(30);
    noStroke();

    spectrum = fft.analyze();
    for(var i = 0; i < 5; i++){
        allSnow.push(new SnowBalls(window.innerWidth/2, window.innerHeight/2, Math.random()*2*Math.PI, 3, Math.random()*5+1));
    }

    for(var i = 0; i<allSnow.length; i++){
        allSnow[i].move();
    }
    fill(255);
    for(var i = 0; i<allSnow.length; i++){
        allSnow[i].display();
    }

    
    fill(0);

   
        
        //rect(window.innerWidth/2-window.innerWidth/34* Math.pow((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0.2)-window.innerWidth/10, window.innerHeight/2-window.innerHeight/34 * Math.pow((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5+1, 0.2) - window.innerHeight/10, Math.pow((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5+1, 0.2)*window.innerWidth/17+window.innerWidth/5, Math.pow((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0.2)*window.innerHeight/17 + window.innerWidth/5, 10);
        rect(window.innerWidth/2-window.innerWidth/40-map((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0, 255, 0, 50)*window.innerWidth/500, window.innerHeight/2-window.innerHeight/40-map((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0, 255, 0, 50)*window.innerHeight/500, window.innerWidth/20+2*map((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0, 255, 0, 50)*window.innerWidth/500, window.innerHeight/20+2*map((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0, 255, 0, 50)*window.innerHeight/500, 10)
        
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(map((spectrum[0]+spectrum[1]+spectrum[2]+spectrum[3]+spectrum[4])/5, 0, 255, 0, 50)*window.innerWidth/700);
        textFont("Courier");
        text("ZERO", window.innerWidth/2, window.innerHeight/2);
    
}