let level, bulletLength, shooting, amtShot, beatLength, levelOne, i
function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(120)
    bulletLength = 0
    shooting = false
    amtShot = 0
    beatLength = 100
    levelOne = {
        "level": [0,1,2,3,4,5],
        "settings": {
            "bpm": 130,
            "song": "Thermodynamix",
            "artist": "dj-Nate"
        },
    }
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
    fill(0)
    textSize(20)
    text(amtShot,10,20)

    rectMode(CENTER)
    rect(750, levelOne.settings.bpm += 1, 20, beatLength)
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
    amtShot++
    shooting = true
}