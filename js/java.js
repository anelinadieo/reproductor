const songList = document.getElementById('songList');
const audioPlayer = document.getElementById('audioPlayer');
const songDetails = document.getElementById('songDetails');
const searchInput = document.getElementById('searchInput');

const songs = [
    { title: 'Kiss - I Was Made For Lovin You', 
      src: 'audio/Kiss - I Was Made For Lovin You.mp3' 
    },
    { title: 'Jósean Log - Alguien Como Tú', 
      src: 'audio/Jósean Log - Alguien Como Tú.mp3' 
    },
    { title: 'Oasis - Wonderwall  (Official Video)', 
      src: 'audio/Oasis - Wonderwall  (Official Video).mp3' 
    },
    { title: 'TOY LOKAZO - ke será de mí (Video Oficial)', 
      src: 'audio/TOY LOKAZO - ke será de mí (Video Oficial).mp3' 
    },
    { title: 'Mago de Oz - La Danza Del Fuego', 
      src: 'audio/Mago de Oz - La Danza Del Fuego.mp3' 
    }
];

function displaySongList(songsToDisplay = songs) {
    songList.innerHTML = '';
    songsToDisplay.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.addEventListener('click', () => playSong(index));
        songList.appendChild(listItem);
    });
}

function playSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    audioPlayer.play();
    songDetails.textContent = `Reproduciendo: ${song.title}`;
}

function searchSongs() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(searchTerm));
    displaySongList(filteredSongs);
    
}

displaySongList();

searchInput.addEventListener('input', searchSongs);
