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