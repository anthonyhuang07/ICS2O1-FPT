# Rhythm Revolver

Anthony Huang's website for the Final Performance Task for the ICS2O1 Grade 10 Computer Studies course - Including a Devlog, and the game itself.

### PLEASE PLAY THIS AT 60HZ. ANY OTHER FRAME RATE WILL BREAK THE GAME

## Creating a Custom Level

1. Open Inspect Element on the game website
2. Head over to the console tab, in the top menu
3. In a text editor: Copy and paste the following:

```js
{
        "settings": {
            "bpm": 80,
            "path": "",
            "background": loadImage(""),
            "startTime": ,
            "speedMultiplier": 
        },
        "beat": []
}
```

You must edit the following properties:

- bpm: the level's BPM. Make sure to look up the BPM of the song you're using.
- path: the path to the song's MP3 file. A YouTube link or anything else will not work, you must have a URL that ends with `.mp3`. If this isn't possible, you may set up your own GitHub repository, download the MP3 file of the song you want, upload it to the repository and copy the link of the MP3 file in that repository.
- background: the path to the background's image URL. You may search up any image, right click on the image and click `"Copy Image Address"`.
- startTime: the time when the song starts playing, in seconds.
- speedMultiplier: multiplies the BPM of your current BPM without affecting the speed at which beats fall. `Example: speedMultiplier of 2 will make the beats fall at Double Time, and 1/2 will make the beats fall at Half Time.`
- beat: this is every beat of the song, seperated with commas. You must start with 0, then work up as you wish. `Example: putting 0,1,2,3,4,5,6,7 with a BPM of 60 will make 8 beats fall in 2 seconds, as the BPM is one hit per second anyways.`

Here's a sample custom level of Thermodynamix by Dj-Nate:

```js
{
        "settings": {
            "bpm": 130,
            "path": "assets/sounds/songs/Thermodynamix.mp3",
            "background": loadImage("https://i.ytimg.com/vi/QUFIGUBrN3M/maxresdefault.jpg"),
            "startTime": 0,
            "speedMultiplier": 1 
        },
        "beat": [0,1,2,3,4,5,6,7]
}
```