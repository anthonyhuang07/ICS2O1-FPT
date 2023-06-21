let bulletLength, shooting, levelOne, currentBeat, songPlayed, points, hearts, rank, percent

let i, j

let chokokutai, kanit

let menuMode, completeMode

function preload() {
    levelOne = {
        "settings": {
            "bpm": 160,
            "song": "Idolize",
            "artist": "Creo",
            "path": "../assets/sounds/songs/Idolize.mp3",
            "background": loadImage("../assets/images/backgrounds/levelOne.jpg"),
            "startTime": 156
        },
        "beat": [
            // predrop
            0, 2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
            // drop
            66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 83, 85, 87, 89, 91, 93, 95, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 115, 117, 119, 121, 123, 125, 127,
            // drop pt2
            130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 149, 151, 153, 155, 157, 159, 162, 163, 164, 165, 166, 167, 168, 170, 172, 174
        ]
    }

    chokokutai = loadFont("../assets/fonts/Chokokutai.ttf")
    kanit = loadFont("../assets/fonts/Kanit.ttf")

    song = loadSound(levelOne.settings.path);
}

function setup() {
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    frameRate(75)
    menuMode = true
}

function draw() {
    if (menuMode) {
        menu()
    } else if (completeMode) {
        complete()
    } else if (!menuMode && !completeMode) {
        fill(0)
        tint(127, 255);
        background(levelOne.settings.background)
        tint(255, 255);
        drawPlayer()
        rectMode(CORNERS)
        fill(255)

        if (shooting) {
            rect(160 + bulletLength, 246, 800, 254)
            bulletLength = 0
            bulletLength = 800
            bulletLength = 0
            points++
            shooting = false
        }

        // top menu
        fill(0)
        stroke(255)
        rect(10, 10, 600, 50)
        fill(255)
        if (mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
            fill(200)
        }
        rect(10, 10, 50, 50)
        fill(0)
        noStroke()
        rect(18, 15, 28, 45)
        rect(32, 15, 42, 45)
        fill(255)
        text(`${points} Points`, 120, 37.5)
        text(`${hearts} Hearts`, 540, 37.5)

        if (currentBeat >= 50 && !songPlayed) {
            song.play()
            song.jump(levelOne.settings.startTime, song.duration() - levelOne.settings.startTime)
            song.setVolume(0.1)
            songPlayed = true
        }

        /* if (100 + (currentBeat % 250) < 205 && 100 + (currentBeat % 250) > 195) {
            console.log("Current Beat: " + currentBeat + " | Modulo: " + (100 + (currentBeat % 250)))
            shooting = true
        } */

        currentBeat += 9 //11.083833333333

        for (i = 0; i < 176; i++) {
            fill(255)
            for (j = 0; j < levelOne.beat.length; j++) {
                if (i == levelOne.beat[j]) {
                    rect(740, currentBeat - (500 * i / 2), 760, 200 + currentBeat - (500 * i / 2))
                }
            }
            fill(0)
        }

        if (currentBeat > 45000) {
            completeMode = true
        }
    }
}

function drawPlayer() {
    noStroke()
    rectMode(CORNERS)
    fill(color("#261519"))
    rect(10, 240, 40, 330)
    rectMode(CENTER)
    fill(color("#B9B9B9"))
    rect(84, 249, 150, 20)
}

function menu() {
    fill(0)
    background(255)
    textAlign(CENTER)
    textSize(75)
    textFont(chokokutai)
    text("Rhythm Revolver", 400, 250)
    textSize(25)
    textFont(kanit)
    text("Press Any Key To Play", 400, 300)

    song.stop()

    songPlayed = false
    bulletLength = 0
    shooting = false
    currentBeat = -1000
    points = 0
    hearts = 5
}

function complete() {
    percent = Math.round((points / levelOne.beat.length) * 100)
    switch (true) {
        case percent >= 100:
            rank = "SS - Pure Perfect!"
            break;
        case percent >= 95:
            rank = "S - Awesome!"
            break;
        case percent >= 90:
            rank = "A - Great!"
            break;
        case percent >= 80:
            rank = "B - Good!"
            break;
        case percent >= 70:
            rank = "C - Average!"
            break;
        case percent < 70:
            rank = "D - Bad!"
    }

    fill(0)
    tint(50, 255);
    background(levelOne.settings.background)
    tint(255, 255);

    fill(255)
    textAlign(CENTER)
    textSize(40)
    text(`Your Score: ${percent}%\nRank: ${rank}`, 400, 250)
    textSize(30)
    stroke(255)
    fill(0)
    rectMode(CORNERS)
    rect(350,360,450,420)
    noStroke()
    fill(255)
    text("Menu",400,400)

    song.stop()
}

function keyPressed() {
    if (menuMode){
        menuMode = false
    } else{
        shooting = true
    }
}

function mousePressed() {
    if(completeMode && mouseX > 350 && mouseX < 450 && mouseY < 420 && mouseY > 360){
        console.log("sd")
        menuMode = true
        completeMode = false
    }

    if (!menuMode && mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
        menuMode = true
        currentBeat = -1500
    }
}