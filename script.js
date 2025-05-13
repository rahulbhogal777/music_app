const songList = [
    {
        name: "Shopping List",
        genre: "HipHop",
        audio: "https://pagalfree.com/musics/128-Shopping%20List%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Shopping%20List%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg"
    },
    {
        name: "Ilzaam",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/320-Ilzaam%20-%20Jewel%20Thief%20The%20Heist%20Begins%20320%20Kbps.mp3",
        image: "https://pagalfree.com/images/320Ilzaam%20-%20Jewel%20Thief%20The%20Heist%20Begins%20320%20Kbps.jpg"
    },
    {
        name: "Jaane Tu",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/128-Jaane%20Tu%20-%20Chhaava%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Jaane%20Tu%20-%20Chhaava%20128%20Kbps.jpg"
    },
    {
        name: "Jaane Tu",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/128-Jaane%20Tu%20-%20Chhaava%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Jaane%20Tu%20-%20Chhaava%20128%20Kbps.jpg"
    }
];

const selectGenre = document.querySelector('#genre');
console.log(selectGenre.value.toLowerCase());

const songs = document.querySelector('.songs');

selectGenre.addEventListener("change", function () {
    if (selectGenre.value.toLowerCase() === 'romantic') {
        songs.innerHTML = '';
        for (let i = 0; i < songList.length; i++){
            const   para = document.createElement('p');
            para.textContent = songList[i].name;
            songs.appendChild(para);
        }
    } 
    if (selectGenre.value.toLowerCase() === 'all') {
        songs.innerHTML = '';
        songList.forEach((temp) => {
            const para = document.createElement('p');
            if (temp.genre.toLowerCase() === 'romantic') {
                para.textContent = temp.name;
                songs.appendChild(para);
            }
        })
    }
});

