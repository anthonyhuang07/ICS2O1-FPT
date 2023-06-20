let bulletLength, shooting, levelOne, currentBeat, songPlayed, points, i, j, time

let chokokutai, kanit

let menuMode

const floor10 = (value, exp) => decimalAdjust("floor", value, exp);

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
        "beat": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,33,34,35,36,37,38,39,40,41,42,43,44,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
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
    currentBeat = -1000
    currentSpeed = 1
    points = 0
    time = 0
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
            fill(255)
            rect(160 + bulletLength, 246, 800, 254)                                                     
            bulletLength += 800
            bulletLength = 0
            points++
            shooting = false
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

        for (i = 0; i < 88; i++) {
            fill(255)
            for (j = 0; j < levelOne.beat.length; j++){
                if(i == levelOne.beat[j]){
                    rect(740, currentBeat - (500 * i), 760, 200 + currentBeat - (500 * i))
                }
            }
            fill(0)
        }

        time+= 1/(60/(80/60))
        console.log(time)

        if(String(floor10(time, -1)).length == 1 || String(floor10(time, -1)).length == 2){
            console.log(floor10(time, -1))
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

function decimalAdjust(type, value, exp) {
    type = String(type);
    exp = Number(exp);
    value = Number(value);
    if (exp === 0) {
      return Math[type](value);
    }
    const [magnitude, exponent = 0] = value.toString().split("e");
    const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
    const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
    return Number(`${newMagnitude}e${+newExponent + exp}`);
  }