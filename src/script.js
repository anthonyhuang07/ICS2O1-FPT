let level, bulletLength, shooting, levelOne, i, currentBeat

function preload(){
    levelOne = {
        "settings": {
            "bpm": 80,
            "song": "Idolize",
            "artist": "Creo",
            "path": "../assets/sounds/songs/Idolize.mp3",
            "startTime": 100
        },
        "actions": [
            {"beat": 1, "duration": 1.33},
            {"beat": 2, "duration": 1.33},
            {"beat": 3, "duration": 1.33},
            {"beat": 4, "duration": 1.33}
        ]
    }

    song = loadSound(levelOne.settings.path);
}
function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(60)
    bulletLength = 0
    shooting = false
    amtShot = 0
    currentBeat = 0
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
    text(currentBeat,20,20)

    if(currentBeat == 192){
        song.play()
        song.jump(156,song.duration()-156)
        song.setVolume(0.1)
    }

    fill(0)
    rect(740, currentBeat, 760, 50 + (currentBeat += 6))
    rect(740, currentBeat-500, 760, 50 + (currentBeat += 6) -500)
    rect(740, currentBeat-1000, 760, 50 + (currentBeat += 6) -1000)
    rect(740, currentBeat-1500, 760, 50 + (currentBeat += 6) -1500)
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