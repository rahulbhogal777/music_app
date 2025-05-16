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

for (let i = 0; i < songList.length; i++) {
  songs.innerHTML += `
    <P class="song${songList[i].id}">${songList[i].name}</P>`;
}

selectGenre.addEventListener("change", function () {
  if (selectGenre.value.toLowerCase() === "all") {
    songs.innerHTML = "";
    for (let i = 0; i < songList.length; i++) {
      songs.innerHTML += `
    <P class="song${songList[i].id}">${songList[i].name}</P>`;
    }
  }
  if (selectGenre.value.toLowerCase() === "romantic") {
    songs.innerHTML = "";
    for (let i = 0; i < songList.length; i++) {
      if (songList[i].genre.toLowerCase() === "romantic") {
        songs.innerHTML += `
    <P class="song${songList[i].id}">${songList[i].name}</P>`;
      }
    }
  }
  if (selectGenre.value.toLowerCase() === "hiphop") {
    songs.innerHTML = "";
    songList.forEach((temp) => {
      if (temp.genre.toLowerCase() === "hiphop") {
        songs.innerHTML += `
    <P class="song${temp.id}">${temp.name}</P>`;
      }
    });
  }
  if (selectGenre.value.toLowerCase() === "rock") {
    songs.innerHTML = "";
    songList.forEach((temp) => {
      if (temp.genre.toLowerCase() === "rock") {
        songs.innerHTML += `
    <P class="song${temp.id}">${temp.name}</P>`;
      }
    });
  }
});

const audio = document.querySelector(".audio-player");

console.log(audio.querySelector("audio").querySelector("source").src);


const song2 = document.querySelector(".song2");
song2.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song2.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song1  = document.querySelector(".song1");
song1.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song1.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song3 = document.querySelector(".song3");
song3.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song3.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song4 = document.querySelector(".song4");
song4.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song4.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song5 = document.querySelector(".song5");
song5.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song5.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song6 = document.querySelector(".song6");
song6.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song6.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song7 = document.querySelector(".song7");
song7.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song7.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song8 = document.querySelector(".song8");
song8.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song8.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song9 = document.querySelector(".song9");
song9.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song9.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

const song10 = document.querySelector(".song10");
song10.addEventListener("click", function () {
  songList.forEach((temp) => {
    if (temp.name.toLowerCase() === song10.textContent.toLowerCase()) {
      audio.querySelector("img").src = temp.image;
      audio.querySelector("h1").textContent = temp.name;
      audio.querySelector("p").textContent = temp.artist;
      audio.querySelector("audio").querySelector("source").src = temp.audio;
      audio.querySelector("audio").load();
      audio.querySelector("audio").play();
    }
  });
});

 



