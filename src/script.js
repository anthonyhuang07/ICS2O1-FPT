// #region global variables

// declare game variables
let bulletLength, shooting, level, currentBeat, songPlayed, points, rank, percent, totalBeats, end
// declare iterator variables
let i, j
// declare font variables
let chokokutai, kanit
// declare menu variables
let menuMode, completeMode, instructionsMode

// #endregion

function preload() {
    // #region level object: includes all info the level needs
    level = {
        // level settings
        "settings": {
            "bpm": 80,
            "path": "../assets/sounds/songs/Idolize.mp3",
            "background": loadImage("../assets/images/backgrounds/levelOne.jpg"),
            "startTime": 156,
            "speedMultiplier": 2,
            "beatHeight": 200
        },
        // actual level: all the beats
        "beat": [
            // predrop
            0, 2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
            // drop
            66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 83, 85, 87, 89, 91, 93, 95, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 115, 117, 119, 121, 123, 125, 127,
            // drop pt2
            130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 149, 151, 153, 155, 157, 159, 162, 163, 164, 165, 166, 167, 168, 170, 172, 174
        ]
    }
    // #endregion

    // load fonts
    chokokutai = loadFont("../assets/fonts/Chokokutai.ttf")
    kanit = loadFont("../assets/fonts/Kanit.ttf")

    // load sounds
    song = loadSound(level.settings.path);
    hit = loadSound("../assets/sounds/hit.mp3")
}

function setup() {
    // declare basics
    createCanvas(800, 500);
    ellipseMode(CORNERS)
    menuMode = true
}

function draw() {
    if (menuMode) {
        menu()
    } else if (completeMode) {
        complete()
    } else if (instructionsMode){
        instructions()
    } else if (!menuMode && !completeMode && !instructionsMode) {

        // #region draw background
        fill(0)
        tint(127, 255);
        background(level.settings.background)
        tint(255, 255);
        // #endregion

        drawPlayer();

        rectMode(CORNERS)

        // #region top menu
        fill(0)
        stroke(255)
        rect(10, 10, 200, 50)
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
        // #endregion

        // #region play song when beats start falling
        if (currentBeat >= 99 && !songPlayed) {
            song.play()
            song.jump(level.settings.startTime, song.duration() - level.settings.startTime)
            song.setVolume(0.08)
            songPlayed = true
        }
        // #endregion

        // #region beat falling code

        // how fast the beats fall
        currentBeat += (500 * (level.settings.bpm)) / (frameRate()*60)

        for (i = 0; i <= level.beat[level.beat.length-1]; i++) {
            fill(255)

            // checks entire beat array if it matches the current beat number - if yes, draws the beat. this allows for gaps (e.g. notes 145 -> 147)
            for (j = 0; j < level.beat.length; j++) {
                if (i == level.beat[j]) {
                    rect(740, currentBeat - (500 * i / level.settings.speedMultiplier), 760, level.settings.beatHeight + currentBeat - (500 * i / level.settings.speedMultiplier))
                    if (shooting) {
                        if ((currentBeat - (500 * i / level.settings.speedMultiplier)) <= 250 && (currentBeat - (500 * i / level.settings.speedMultiplier) + level.settings.beatHeight) >= 250) {
                            level.beat.splice(j, 1)
                            points+=2
                            hit.play()
                            hit.setVolume(2)
                        }
                    }
                }
            }
            fill(0)
        }
        // #endregion

        // #region when shooting:
        if (shooting) {
            points--
            fill(255)
            // the bullet rectangle
            rect(160 + bulletLength, 246, 800, 254)
            bulletLength = 0
            bulletLength = 800
            bulletLength = 0

            shooting = false
        }
        // #endregion

        // level complete
        if (currentBeat > 45000) {
            completeMode = true
        }

        if (points == -1){
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
    fill(255)
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
    rectMode(CORNERS)
    rect(320, 360, 480, 420)
    noStroke()
    fill(255)
    text("Instructions", 400, 400)

    song.stop()

    // reset variables
    songPlayed = false
    bulletLength = 0
    shooting = false
    currentBeat = -1000
    points = 0
    totalBeats = level.beat.length
    level.beat = [
        // predrop
        0, 2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
        // drop
        66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 83, 85, 87, 89, 91, 93, 95, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 115, 117, 119, 121, 123, 125, 127,
        // drop pt2
        130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 149, 151, 153, 155, 157, 159, 162, 163, 164, 165, 166, 167, 168, 170, 172, 174
    ]
}

function complete() {
    // gets percent accuracy
    percent = Math.round((points / totalBeats) * 100)

    // checks for rank using percentage
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

    if (points == -1){
        percent = "FAILED"
        rank = "F - Failed!"
    }

    // darker bg
    fill(0)
    tint(50, 255);
    background(level.settings.background)
    tint(255, 255);


    fill(255)
    textAlign(CENTER)
    textSize(40)
    text(`Your Score: ${percent}%\nRank: ${rank}`, 400, 250)
    textSize(30)
    stroke(255)
    fill(0)
    rectMode(CORNERS)
    rect(350, 360, 450, 420)
    noStroke()
    fill(255)
    text("Menu", 400, 400)

    song.stop()
}

function instructions() {
    background(0)
    textSize(20)
    text("How to Play:\n\nWelcome to Rhythm Revolver! \nThis is a game where you shoot a gun at falling beats\ntimed to the rhythm of the music.\n\n- Press any key to shoot your gun\n- Shooting a beat will give you one point,\na miss will make you lose one\n- If you go below 0 points, you lose\n- Letting beats pass will not win or lose any points\n- Your accuracy will be determined at the end\n- To play custom beatmaps, consult the README on the GitHub Repo",400,50)
    rect(350, 360, 450, 420)
    stroke(255)
    fill(0)
    textSize(30)
    text("Close", 400, 400)
    noStroke()
    fill(255)
}

function keyPressed() {
    if (menuMode) {
        menuMode = false
    } else {
        shooting = true
    }
}

function mousePressed() {
    if (completeMode && mouseX > 350 && mouseX < 450 && mouseY < 420 && mouseY > 360) {
        menuMode = true
        completeMode = false
    } else if (menuMode && mouseX > 320 && mouseX < 480 && mouseY < 420 && mouseY > 360) {
        instructionsMode = true
        menuMode = false
    } else if (instructionsMode && mouseX > 350 && mouseX < 450 && mouseY < 420 && mouseY > 360){
        menuMode = true
        instructionsMode = false
    }

    if (!menuMode && mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
        menuMode = true
    }
}