const songList = [
  {
    id: 1,
    name: "Shopping List",
    artist: "Leo Greal, Yo Yo Honey Singh",
    genre: "HipHop",
    audio:
      "https://pagalfree.com/musics/128-Shopping%20List%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Shopping%20List%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
  },
  {
    id: 2,
    name: "Ilzaam ",
    artist: "Arjun, King",
    genre: "Romantic",
    audio:
      "https://pagalfree.com/musics/320-Ilzaam%20-%20Jewel%20Thief%20The%20Heist%20Begins%20320%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/320Ilzaam%20-%20Jewel%20Thief%20The%20Heist%20Begins%20320%20Kbps.jpg",
  },
  {
    id: 3,
    name: "Jaane Tu",
    artist: "Arijit Singh",
    genre: "Romantic",
    audio:
      "https://pagalfree.com/musics/128-Jaane%20Tu%20-%20Chhaava%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Jaane%20Tu%20-%20Chhaava%20128%20Kbps.jpg",
  },
  {
    id: 4,
    name: "Asli Hip Hop",
    artist: "Divine, Naezy",
    genre: "HipHop",
    audio:
      "https://pagalfree.com/musics/128-Asli%20Hip%20Hop%20-%20Gully%20Boy%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Asli%20Hip%20Hop%20-%20Gully%20Boy%20128%20Kbps.jpg",
  },
  {
    id: 5,
    name: "Aayi Nai",
    artist: "Sachin-Jigar",
    genre: "Rock",
    audio:
      "https://pagalfree.com/musics/128-Aayi%20Nai%20-%20Stree%202%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Aayi%20Nai%20-%20Stree%202%20128%20Kbps.jpg",
  },
  {
    id: 6,
    name: "Ishq Mein",
    artist: "sachin-jigar",
    genre: "Romantic",
    audio:
      "https://pagalfree.com/musics/128-Ishq%20Mein%20-%20Nadaaniyan%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Ishq%20Mein%20-%20Nadaaniyan%20128%20Kbps.jpg",
  },
  {
    id: 7,
    name: "Mere Mehboob Mere Sanam",
    artist: "Lijo George",
    genre: "Rock",
    audio:
      "https://pagalfree.com/musics/128-Mere%20Mehboob%20Mere%20Sanam%20-%20Bad%20Newz%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Mere%20Mehboob%20Mere%20Sanam%20-%20Bad%20Newz%20128%20Kbps.jpg",
  },
  {
    id: 8,
    name: "Bhool Bhulaiyaa 3",
    artist: "Dhrruv, Diljit, Tanishk",
    genre: "Rock",
    audio:
      "https://pagalfree.com/musics/128-Bhool%20Bhulaiyaa%203%20-%20Title%20Track%20(Feat.%20Pitbull)%20-%20Bhool%20Bhulaiyaa%203%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Bhool%20Bhulaiyaa%203%20-%20Title%20Track%20(Feat.%20Pitbull)%20-%20Bhool%20Bhulaiyaa%203%20128%20Kbps.jpg",
  },
  {
    id: 9,
    name: "Khudaya",
    artist: "Sagar, Neeti",
    genre: "Romantic",
    audio:
      "https://pagalfree.com/musics/128-Khudaya%20-%20Sarfira%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Khudaya%20-%20Sarfira%20128%20Kbps.jpg",
  },
  {
    id: 10,
    name: "Hauli Hauli",
    artist: "Guru Randhawa, Yo Yo Honey Singh",
    genre: "HipHop",
    audio:
      "https://pagalfree.com/musics/128-Hauli%20Hauli%20-%20Khel%20Khel%20Mein%20128%20Kbps.mp3",
    image:
      "https://pagalfree.com/images/128Hauli%20Hauli%20-%20Khel%20Khel%20Mein%20128%20Kbps.jpg",
  },
];

const selectGenre = document.querySelector("#genre");
const songs = document.querySelector(".songs");
const audio = document.querySelector(".audio-player");
const checkbox = document.querySelector("#check");
const body = document.querySelector("body");
const genre = document.querySelector(".genre");
const playList = document.querySelector(".playlist");
const songPoster = document.querySelector(".song-poster");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const addList = document.querySelector(".addList");
const hr = document.querySelector("hr");
const search = document.querySelector("#search");
const createPlaylist = document.querySelector("#add-playlist");
const currentList = document.querySelector(".currentList");

function renderList(filterList) {
  songs.innerHTML = "";
  filterList.forEach((temp) => {
    songs.innerHTML += `
    <p class="song">${temp.name}</p>`;
  });
}

renderList(songList);

selectGenre.addEventListener("change", function () {
  const select = selectGenre.value.toLowerCase();
  if (select === "all") {
    renderList(songList);
  } else {
    const filtered = songList.filter((temp) => {
      return temp.genre.toLowerCase() === select;
    });
    renderList(filtered);
  }
});

// Function to update the song details in the audio player
function updateSong(song) {
  const songName = song.textContent.toLowerCase();
  const selectedSong = songList.find(
    (temp) => temp.name.toLowerCase() === songName
  );
  audio.querySelector("img").src = selectedSong.image;
  audio.querySelector("h1").textContent = selectedSong.name;
  audio.querySelector("p").textContent = selectedSong.artist;
  audio.querySelector("audio").querySelector("source").src = selectedSong.audio;
  audio.querySelector("audio").load();
  audio.querySelector("audio").play();
}

// Add event listener to the songs list
songs.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "p") {
    updateSong(event.target);
  }
});

function getID() {
  const name = audio.querySelector("h1").textContent.toLowerCase();
  const currentSong = songList.find((song) => {
    return song.name.toLowerCase() === name;
  });
  return currentSong.id;
}

function updateSongById(id) {
  const currentSong = songList.find((song) => {
    return song.id === id;
  });
  audio.querySelector("img").src = currentSong.image;
  audio.querySelector("h1").textContent = currentSong.name;
  audio.querySelector("p").textContent = currentSong.artist;
  audio.querySelector("audio").querySelector("source").src = currentSong.audio;
  audio.querySelector("audio").load();
  audio.querySelector("audio").play();
}

prev.addEventListener("click", () => {
  const id = getID();
  if (id > 1) {
    updateSongById(id - 1);
  } else {
    updateSongById(songList[songList.length - 1].id);
  }
});

next.addEventListener('click', () => {
  const id = getID();
  if (id < 10) {
    updateSongById(id + 1);
  } else {
    updateSongById(1);
  }
});

createPlaylist.addEventListener("click", (event) => {
  if(search.value.trim() === "") {
    alert("Please enter a song name to add to the playlist.");
    return;
  } else {
    event.preventDefault();
    const songName = search.value.trim();
    const newList = document.createElement("p");
    const newdiv = document.createElement("div");
    newList.innerText = songName;
    addList.appendChild(newList);
    currentList.appendChild(newdiv);
    newdiv.className = songName;
  }
})


checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    genre.style.backgroundColor = "rgba(121, 119, 119, 0.61)";
    audio.style.backgroundColor = "rgba(121, 119, 119, 0.61)";
    playList.style.backgroundColor = "rgba(121, 119, 119, 0.61)";
    songs.style.color = "black";
    songPoster.style.backgroundColor = "black";
    hr.style.borderBottom = "2px double white";
  } else {
    body.style.backgroundColor = "rgb(223, 218, 218)";
    body.style.color = "black";
    genre.style.backgroundColor = "skyblue";
    audio.style.backgroundColor = "skyblue";
    playList.style.backgroundColor = "skyblue";
    songPoster.style.backgroundColor = "rgb(36, 147, 180)";
    hr.style.borderBottom = "2px double black";
  }
});
