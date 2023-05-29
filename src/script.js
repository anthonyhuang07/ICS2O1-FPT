let level, bulletLength, shooting
function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(120)
    level = [1, 2, 3]
    bulletLength = 0
    shooting = false
}

function draw() {
    background(200)
    drawPlayer()
    rectMode(CORNERS)
    if (shooting) {
        fill(255)
        rect(125+bulletLength,245,800,255)
        bulletLength += 500
        if (bulletLength >= 800){
            shooting = false
            bulletLength = 0
        }
    }
}

function drawPlayer() {
    fill(255,119,0)
    noStroke()
    rectMode(CORNERS)
    rect(10,240,40,340)
    rectMode(CENTER)
    rect(75,250,100,20)
}

function keyPressed(){
    shooting = true
}