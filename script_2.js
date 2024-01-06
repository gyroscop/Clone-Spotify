let audioElement = new Audio("../songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songIndex = 0;
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
  {
    songName: "Aahe Baa Nahe | Zubeen Garg",
    filePath: "../songs/1.mp3",
    coverPath: "../covers/1.jpg",
  },
  {
    songName: "Husn | Anuv Jain",
    filePath: "../songs/2.mp3",
    coverPath: "../covers/2.jpg",
  },
  {
    songName: "Halo | Beyonce",
    filePath: "../songs/3.mp3",
    coverPath: "../covers/3.jpg",
  },
  {
    songName: "Summar of 69 | Bryan Adams",
    filePath: "../songs/4.mp3",
    coverPath: "../covers/4.jpg",
  },
  {
    songName: "Pasoori | Coke Studio",
    filePath: "../songs/5.mp3",
    coverPath: "../covers/5.jpg",
  },
  {
    songName: "Hotel California | The Eagles",
    filePath: "../songs/2.mp3",
    coverPath: "../covers/6.jpg",
  },
  {
    songName: "Eyes Closed | Ed Shreen",
    filePath: "../songs/2.mp3",
    coverPath: "../covers/7.jpg",
  },
  {
    songName: "Naacho Naacho | RRR",
    filePath: "../songs/2.mp3",
    coverPath: "../covers/8.jpg",
  },
  {
    songName: "Tokari | Papon",
    filePath: "../songs/2.mp3",
    coverPath: "../covers/9.jpg",
  },
  {
    songName: "Timi Nacha Na | Wangden Sherpa",
    filePath: "../songs/4.mp3",
    coverPath: "../covers/10.jpg",
  },
];

songItems.forEach((elements, i) => {
  elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
  elements.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause events
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  console.log(progress);
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  songItemPlay.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

songItemPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    // makeAllPlay();
    // e.target.classList.remove("fa-circle-play");
    // e.target.classList.add("fa-circle-pause");
    // audioElement.play();

    if (audioElement.paused || audioElement.currentTime <= 0) {
      songIndex = parseInt(e.target.id);
      makeAllPlay();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `../songs/${songIndex + 1}.mp3`;
      // audioElement.currentTime=0;
      audioElement.play();
      masterSongName.innerText = songs[songIndex].songName;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
    } else {
      makeAllPlay();
      audioElement.pause();
      e.target.classList.remove("fa-circle-pause");
      e.target.classList.add("fa-circle-play");
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
      gif.style.opacity = 0;
    }
  });
});

previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `../songs/${songIndex + 1}.mp3`;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});

next.addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `../songs/${songIndex + 1}.mp3`;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});
