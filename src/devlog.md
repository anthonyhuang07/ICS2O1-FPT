# 2023-05-29

- Added basic functionality, adding the gun character, and the shooting mechanic.

# 2023-05-30

- Started working on how the level will be read, by creating an object with all the level information. Still figuring out how to implement it, might be the most difficult part of this game.

# 2023-05-31

- Added music, and still worked on the level object, still struggling and wondering how this thing would work.

# 2023-06-01

- Changed the song, still trying to figure this thing out. Banging my head right now

# 2023-06-02

- Added a basic menu
- Still trying to figure out how to get the beats to fall at the correct speed and beat.

# 2023-06-06

- Changed how the beat array would work
- Still trying to figure out how to get the beats to fall at the correct speed and beat.

# 2023-06-07

- Figured it out w/help of Mr. Klimowski
- Now going to actually start mapping the beatmap

# 2023-06-08

- Figured out how to change tempo (multiplying speed) but am encountering some issues
- Added fonts to the menu
- Refactored redundancy in music playing

# 2023-06-09

- Added a menu bar at the top of the level
- Added a pause button (temporary, returns back to main menu and resets the level)
- Added a background image and some strokes

# 2023-06-13

- Added points
- Changed tiles to white
- Starting the point system
- Trying to figure out an automatic shooting system, to make the point system development process easier

# 2023-06-14

- Added auto shooting system, still kinda off
- Changed revolver design

# 2023-06-15

- Rewrote autoshoot code, removed for loop (useless)

# 2023-06-19

- I HAVE TO REWRITE THE ENTIRE CODE TO MAKE THE BEATS INDIVIDUAL IN THE STUPID ARRAY. THERES LIKE 3 DAYS LEFT...

# 2023-06-20

- Rewrote the entire mapping system, using an array with notes at 160BPM.
- Finished mapping the level
- Added hearts
- Added Accuracy + Rank
- Added end screen - return to menu button
- Improved autoshoot - using modulo of currentBeat instead of time
- Changed Click to play -> press to play
- Currently optimized for 75Hz monitors - will change tomorrow (hopefully)

# 2023-06-21 | FINAL DAY

- Refactored code for currentBeat
- Commented code
- **HITBOXES FINALLY WORK!!!!!!!!!!!!!!!!!!! THE FINAL OBSTACLE IS OVER!!!!!!!!!!!!!**
    - Removes beats on hit
- Removes heart system, in favor of accuracy system. You can only die if your points reach negative, your score will be FAIL
- Scuffed points system - adds 2 each time a good hit, every shot removes one. So there's that.
- Added instructions on "custom" beatmap in README
- Added instructions menu in the menu
- Added custom beatmap system - scuffed and not fully working, but can be used to increase the difficulty of the level instead.
- FINISHED THE GAME!!!!!!!!!!!!!!!!!!!!!!!!
