# Rhythm Revolver

Anthony Huang's website for the Final Performance Task for the ICS2O1 Grade 10 Computer Studies course - Including a Devlog, and the game itself.

Goal of the game: Try to get the highest accuracy possible!

## Creating a Custom Level

### NOTE: Adding different songs won't work at the moment. Instead, to make the default level more challenging, you may just simply remap the current map or change the speed multiplier and change the beat height. BPM change will also not work.

1. Open Inspect Element on the game website
2. Head over to the console tab, in the top menu
3. In a text editor: Copy and paste the following:

```js
{
    "settings": {
        "bpm": 80,
        "path": "../assets/sounds/songs/Idolize.mp3",
        "background": loadImage("../assets/images/backgrounds/levelOne.jpg"),
        "startTime": ,
        "speedMultiplier": 
        "beatHeight": 200
    },
    "beat": []
}
```

You must edit the following properties:

- ~~bpm: the level's BPM. Make sure to look up the BPM of the song you're using.~~
- ~~path: the path to the song's MP3 file. A YouTube link or anything else will not work, you must have a URL that ends with `.mp3`. If this isn't possible, you may set up your own GitHub repository, download the MP3 file of the song you want, upload it to the repository and copy the link of the MP3 file in that repository.~~
- ~~background: the path to the background's image URL. You may search up any image, right click on the image and click `"Copy Image Address"`.~~
- startTime: the time when the song starts playing, in seconds.
- speedMultiplier: multiplies the BPM of your current BPM without affecting the speed at which beats fall. `Example: speedMultiplier of 2 will make the beats fall at Double Time, and 1/2 will make the beats fall at Half Time.`
- beatHeight: the height of a single beat. The smaller the value, the smaller the hitbox the beat will be, making it harder to hit.
- beat: this is every beat of the song, seperated with commas. You must start with 0, then work up as you wish. `Example: putting 0,1,2,3,4,5,6,7 with a BPM of 60 will make 8 beats fall in 2 seconds, as the BPM is one hit per second anyways.`

4. With your finalized settings and beatmap, go back to the console, type `level = ` followed by pasting the contents of your text file. 
5. Press enter

Note: If you decide to change the BPM, make sure to set 

### DEFAULT VALUES:

```js
{
    "settings": {
        "bpm": 80,
        "path": "../assets/sounds/songs/Idolize.mp3",
        "background": loadImage("../assets/images/backgrounds/levelOne.jpg"),
        "startTime": 156,
        "speedMultiplier": 2,
        "beatHeight": 200
    },
    "beat": [
        0, 2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
        66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 83, 85, 87, 89, 91, 93, 95, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 115, 117, 119, 121, 123, 125, 127,
        130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 149, 151, 153, 155, 157, 159, 162, 163, 164, 165, 166, 167, 168, 170, 172, 174
    ]
}
```