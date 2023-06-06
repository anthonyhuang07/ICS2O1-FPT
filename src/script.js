let level, bulletLength, shooting, levelOne, i, currentBeat, playSong, songPlayed

let menuMode

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
            {"beat": 1, "duration": 1.66},
        ]
    }

    song = loadSound(levelOne.settings.path);
}

function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(60)
    menuMode = true
    playSong = false
    songPlayed = false
    bulletLength = 0
    shooting = false
    amtShot = 0
    currentBeat = -1500
}

function draw() {
    if(menuMode){
        menu()
    } else if (!menuMode){
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
    
        if(currentBeat >= 0 && !songPlayed){
            playSong = true
            songPlayed = true
        }

        if(playSong && songPlayed){
            song.play()
            song.jump(156,song.duration()-156)
            song.setVolume(0.1)
            playSong = false
        }
    
        for(let i = 0; i < 8; i++){
            fill(0)
            rect(740, currentBeat-(500*i), 760, 75 + (currentBeat += 80/55.5) -(500*i))
        }
    }
}

function drawPlayer() {
    noStroke()
    rectMode(CORNERS)
    rect(10,240,40,340)
    rectMode(CENTER)
    rect(75,250,100,20)
}

function menu(){
    background(255)
    textAlign(CENTER)
    textSize(50)
    text("Rhythm Revolver\n\nClick to Play",400,250)
    if(mouseIsPressed){
        menuMode = false
    }
}

function keyPressed(){
    shooting = true
}