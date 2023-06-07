let level, bulletLength, shooting, levelOne, i, currentBeat, playSong, songPlayed, speedMultiplier

let menuMode

function preload(){
    levelOne = {
        "settings": {
            "bpm": 80,
            "song": "Idolize",
            "artist": "Creo",
            "path": "../assets/sounds/songs/Idolize.mp3",
            "startTime": 156
        },
        "actions": [
            {"beat": 32, "speedMultiplier": 2},
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
    speedMultiplier = 1
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
    
        if(currentBeat >= 50 && !songPlayed){
            playSong = true
            songPlayed = true
        }

        if(playSong && songPlayed){
            song.play()
            song.jump(levelOne.settings.startTime,song.duration()-levelOne.settings.startTime)
            song.setVolume(0.1)
            playSong = false
            console.log(currentBeat)
        }

        if(currentBeat%50 == 0){
            shooting = true
        }
    
        currentBeat += 11.1833333333
        for(let i = 0; i < 64; i++){
            fill(0)
            if(i == levelOne.actions[0].beat){
                
            }
            rect(740, currentBeat-(500*i/), 760, 200 + currentBeat-(500*i/))
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