// Song data: Add image, name, and file path
const songs = {
    "espresso": {
        name: "Espresso",
        src: "Espresso.mp3",
        img: "espresso.png"
    },
    "millionaire": {
        name: "Millionaire",
        src: "millionaire.mp3",
        img: "millionaire.png"
    },
    "ajjKi": {
        name: "Ajj Ki Raat",
        src: "songs/ajjKiRaat.mp3",
        img: "ajj ki raat.png"
    },
    "samjho-naa": {
        name: "Samjho Naa",
        src: "Chaleya.mp3",
        img: "samjho Naa.png"
    },
    "stay": {
        name: "Stay",
        src: "Stay.mp3",
        img: "stay.png"
    },
    "end-of": {
        name: "End Of Beginning",
        src: "End Of Beginning.mp3",
        img: "end of the beginning.png"
    },
    "senorita": {
        name: "Senorita",
        src: "Senorita.mp3",
        img: "senorita.jpeg"
    },
    "paint": {
        name: "Paint the Town Red",
        src: "songs/paintTheTownRed.mp3",
        img: "paint the town red.png"
    }
};

// Create an audio element
let audio = new Audio();

// Function to show and update the music player
function showMusicPlayer(song) {
    const player = document.getElementById("musicPlayer");
    const songImage = player.querySelector("img");
    const songName = player.querySelector(".details span");
    const playPauseBtn = player.querySelector(".playPause");

    // Update player content
    songImage.src = song.img;
    songName.textContent = song.name;
    audio.src = song.src;
    audio.play();

    // Show the music player
    player.style.display = "flex";

    // Handle play/pause
    playPauseBtn.textContent = "Pause";
    playPauseBtn.onclick = () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "Play";
        }
    };
}

// Attach click event listeners to each image
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        const className = img.className;
        const song = songs[className];
        if (song) {
            showMusicPlayer(song);
        } else {
            console.log("Song not found for class:", className);
        }
    });
});


// Song data for search functionality
const songsList = [
    { name: "Espresso", class: "espresso" },
    { name: "Millionaire", class: "millionaire" },
    { name: "Ajj Ki Raat", class: "ajjKi" },
    { name: "Samjho Naa", class: "samjho-naa" },
    { name: "Stay", class: "stay" },
    { name: "End of the Beginning", class: "end-of" },
    { name: "Senorita", class: "senorita" },
    { name: "Paint the Town Red", class: "paint" }
];

// Function to filter and display songs based on search input
function searchSongs() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const allImages = document.querySelectorAll("img");

    // Reset visibility of all images
    allImages.forEach(img => {
        img.style.display = "none";
    });

    // Filter and display matching songs
    songsList.forEach(song => {
        if (song.name.toLowerCase().includes(searchInput)) {
            const songImg = document.querySelector(`.${song.class}`);
            if (songImg) songImg.style.display = "inline";
        }
    });
}

// Attach event listener to the search input
document.getElementById("search").addEventListener("input", searchSongs);

if (!searchInput) allImages.forEach(img => (img.style.display = "inline"));