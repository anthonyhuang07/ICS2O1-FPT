let level, bulletLength, shooting, levelOne, i, currentBeat

function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(60)
    bulletLength = 0
    shooting = false
    amtShot = 0
    currentBeat = 0
    song = loadSound("../assets/sounds/songs/Thermodynamix.mp3");
    levelOne = {
        "settings": {
            "bpm": 130,
            "song": "Thermodynamix",
            "artist": "dj-Nate",
            "path": "../assets/sounds/songs/Thermodynamix.mp3"
        },
        "actions": [{"beat": 1, "duration": 2.16666666667}]
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

    if(currentBeat == 250){
        song.setVolume(0.1)
        song.play()
    }

    fill(0)
    rect(740, currentBeat, 760, 100 + (currentBeat += 2))
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