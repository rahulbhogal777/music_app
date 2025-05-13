const songList = [
    {
        id: 1,
        name: "Shopping List",
        genre: "HipHop",
        audio: "https://pagalfree.com/musics/128-Shopping%20List%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Shopping%20List%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg"
    },
    {
        id: 2,
        name: "Ilzaam",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/320-Ilzaam%20-%20Jewel%20Thief%20The%20Heist%20Begins%20320%20Kbps.mp3",
        image: "https://pagalfree.com/images/320Ilzaam%20-%20Jewel%20Thief%20The%20Heist%20Begins%20320%20Kbps.jpg"
    },
    {
        id: 3,
        name: "Jaane Tu",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/128-Jaane%20Tu%20-%20Chhaava%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Jaane%20Tu%20-%20Chhaava%20128%20Kbps.jpg"
    },
    {
        id: 4,
        name: "Asli Hip Hop",
        genre: "HipHop",
        audio: "https://pagalfree.com/musics/128-Asli%20Hip%20Hop%20-%20Gully%20Boy%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Asli%20Hip%20Hop%20-%20Gully%20Boy%20128%20Kbps.jpg"
    },
    {
        id: 5,
        name: "Aayi Nai",
        genre: "Rock",
        audio: "https://pagalfree.com/musics/128-Aayi%20Nai%20-%20Stree%202%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Aayi%20Nai%20-%20Stree%202%20128%20Kbps.jpg"
    },
    {
        id: 6,
        name: "Ishq Mein",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/128-Ishq%20Mein%20-%20Nadaaniyan%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Ishq%20Mein%20-%20Nadaaniyan%20128%20Kbps.jpg"
    },
    {
        id: 7,
        name: "Mere Mehboob Mere Sanam",
        genre: "Rock",
        audio: "https://pagalfree.com/musics/128-Mere%20Mehboob%20Mere%20Sanam%20-%20Bad%20Newz%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Mere%20Mehboob%20Mere%20Sanam%20-%20Bad%20Newz%20128%20Kbps.jpg"
    },
    {
        id: 8,
        name: "Bhool Bhulaiyaa 3",
        genre: "Rock",
        audio: "https://pagalfree.com/musics/128-Bhool%20Bhulaiyaa%203%20-%20Title%20Track%20(Feat.%20Pitbull)%20-%20Bhool%20Bhulaiyaa%203%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Bhool%20Bhulaiyaa%203%20-%20Title%20Track%20(Feat.%20Pitbull)%20-%20Bhool%20Bhulaiyaa%203%20128%20Kbps.jpg"
    },
    {
        id: 9,
        name: "Khudaya",
        genre: "Romantic",
        audio: "https://pagalfree.com/musics/128-Khudaya%20-%20Sarfira%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Khudaya%20-%20Sarfira%20128%20Kbps.jpg"
    },
    {
        id: 10,
        name: "Hauli Hauli",
        genre: "HipHop",
        audio: "https://pagalfree.com/musics/128-Hauli%20Hauli%20-%20Khel%20Khel%20Mein%20128%20Kbps.mp3",
        image: "https://pagalfree.com/images/128Hauli%20Hauli%20-%20Khel%20Khel%20Mein%20128%20Kbps.jpg"
    }
];

const selectGenre = document.querySelector('#genre');
console.log(selectGenre.value.toLowerCase());

const songs = document.querySelector('.songs');

selectGenre.addEventListener("change", function () {
    if (selectGenre.value.toLowerCase() === 'all') {
        songs.innerHTML = '';
        for (let i = 0; i < songList.length; i++){
            const   para = document.createElement('p');
            para.textContent = songList[i].name;
            songs.appendChild(para);
        }
    } 
    if (selectGenre.value.toLowerCase() === 'romantic') {
        songs.innerHTML = '';
        songList.forEach((temp) => {
            const para = document.createElement('p');
            if (temp.genre.toLowerCase() === 'romantic') {
                para.textContent = temp.name;
                songs.appendChild(para);
            }
        })
    }
    if (selectGenre.value.toLowerCase() === 'hiphop') {
        songs.innerHTML = '';
        songList.forEach((temp) => {
            const para = document.createElement('p');
            if (temp.genre.toLowerCase() === 'hiphop') {
                para.textContent = temp.name;
                songs.appendChild(para);
            }
        })
    }
    if (selectGenre.value.toLowerCase() === 'rock') {
        songs.innerHTML = '';
        songList.forEach((temp) => {
            const para = document.createElement('p');
            if (temp.genre.toLowerCase() === 'rock') {
                para.textContent = temp.name;
                songs.appendChild(para);
            }
        })
    }
});

