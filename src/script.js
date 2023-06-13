let bulletLength, shooting, levelOne, currentBeat, songPlayed, currentSpeed, points, i

let chokokutai, kanit

let menuMode

function preload() {
    levelOne = {
        "settings": {
            "bpm": 80,
            "song": "Idolize",
            "artist": "Creo",
            "path": "../assets/sounds/songs/Idolize.mp3",
            "background": loadImage("../assets/images/backgrounds/levelOne.jpg"),
            "startTime": 156
        },
        "actions": [
            { "beat": 16, "speedMultiplier": 2 },
            { "beat": 20, "speedMultiplier": 1 },
            { "beat": 32, "speedMultiplier": 2 },
            { "beat": 34, "speedMultiplier": 1 },
        ]
    }

    chokokutai = loadFont("../assets/fonts/Chokokutai.ttf")
    kanit = loadFont("../assets/fonts/Kanit.ttf")

    song = loadSound(levelOne.settings.path);
}

function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(60)
    menuMode = true
    songPlayed = false
    bulletLength = 0
    shooting = false
    currentBeat = -1500
    currentSpeed = 1
    points = 0
}

function draw() {
    if (menuMode) {
        menu()
    } else if (!menuMode) {
        fill(0)
        tint(127, 255);
        background(levelOne.settings.background)
        tint(255, 255);
        drawPlayer()
        rectMode(CORNERS)
        if (shooting) {
            if(currentBeat > 100 && currentBeat < 100){
                points++
            }
            fill(255)
            rect(125 + bulletLength, 246, 800, 254)
            bulletLength += 800
            shooting = false
            bulletLength = 0
        }

        // top menu
        fill(0)
        stroke(255)
        rect(10,10,600,50)
        fill(255)
        if(mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50){
            fill(200)
        }
        rect(10,10,50,50)
        fill(0)
        noStroke()
        rect(18,15,28,45)
        rect(32,15,42,45)
        fill(255)
        text(points,100,37.5)

        if (currentBeat >= 50 && !songPlayed) {
            song.play()
            song.jump(levelOne.settings.startTime, song.duration() - levelOne.settings.startTime)
            song.setVolume(0.1)
            songPlayed = true
            console.log(currentBeat)
        }

        currentBeat += 11.083833333333
        currentSpeed = 1

        for (i = 0; i < 96; i++) {
            fill(255)
            for (let j = 0; j < levelOne.actions.length; j++) {
                if (i == levelOne.actions[j].beat) {
                    currentSpeed = levelOne.actions[j].speedMultiplier
                }
            }
            rect(740, currentBeat - (500 * i / currentSpeed), 760, 200 + currentBeat - (500 * i / currentSpeed))
            fill(0)
        }
    }
}

function drawPlayer() {
    noStroke()
    rectMode(CORNERS)
    rect(10, 240, 40, 340)
    rectMode(CENTER)
    rect(75, 250, 100, 20)
}

function menu() {
    background(255)
    textAlign(CENTER)
    textSize(75)
    textFont(chokokutai)
    text("Rhythm Revolver", 400, 250)
    textSize(25)
    textFont(kanit)
    text("Click To Play", 400, 300)
}

function keyPressed() {
    shooting = true
}

function mousePressed() {
    if(mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50){
        menuMode = true
        currentBeat = -1500
    } else{
        menuMode = false
    }
}