const arr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const sounds = [
  {
    name: "kick",
    url: "https://www.fesliyanstudios.com/play-mp3/1153",
  },
  {
    name: "hi hat",
    url: "https://www.fesliyanstudios.com/play-mp3/6715",
  },
  {
    name: "door bell",
    url: "https://www.fesliyanstudios.com/play-mp3/5454",
  },
  {
    name: "slap",
    url: "https://www.fesliyanstudios.com/play-mp3/6282",
  },
  {
    name: "cutting",
    url: "https://www.fesliyanstudios.com/play-mp3/583",
  },
  {
    name: "camera",
    url: "https://www.fesliyanstudios.com/play-mp3/1649",
  },
  {
    name: "snare drum",
    url: "https://www.fesliyanstudios.com/play-mp3/6772",
  },
  {
    name: "open hit",
    url: "https://www.fesliyanstudios.com/play-mp3/6712",
  },
  {
    name: "drum sticks",
    url: "https://www.fesliyanstudios.com/play-mp3/6678"
  }
];

const keydownHandler = (key) => {
  for (const index in arr) {
    if (Object.hasOwnProperty.call(arr, index)) {
      if (arr[index] === key) {
        const sound = sounds[index].url;
        const audio = new Audio(sound);
        audio.play();
      }
    }
  }
}

document.onkeydown = function (e) {
  keydownHandler(e.key.toLowerCase());
}