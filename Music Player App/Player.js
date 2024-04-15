// script.js

// Sample song data
const songs = [
  { id: 1, name: 'Song 1', artist: 'Artist 1', img: 'song1.jpg', genre: 'rock', source: 'song1.mp3' },
  { id: 2, name: 'Song 2', artist: 'Artist 2', img: 'song2.jpg', genre: 'pop', source: 'song2.mp3' },
  { id: 3, name: 'Song 3', artist: 'Artist 3', img: 'song3.jpg', genre: 'jazz', source: 'song3.mp3' },
  // Add more songs as needed
];

// Initial theme
let darkTheme = false;

// Add event listener for volume slider
document.getElementById('volumeSlider').addEventListener('input', adjustVolume);

// Add event listener for theme vector
document.getElementById('themeVector').addEventListener('click', toggleTheme);
// Toggle theme function
function toggleTheme() {
  darkTheme = !darkTheme;
  document.body.classList.toggle('dark-theme', darkTheme);

  const themeVector = document.getElementById('themeVector');
  themeVector.textContent = darkTheme ? '🌚' : '🌞';
}


// Render songs function
function renderSongs(genre) {
  const songList = document.getElementById('songList');
  songList.innerHTML = '';
  songs.filter(song => genre === 'all' || song.genre === genre)
       .forEach(song => {
          const listItem = document.createElement('li');
          listItem.textContent = `${song.name} - ${song.artist}`;
          listItem.addEventListener('click', () => playSong(song));
          songList.appendChild(listItem);
       });
}

// Play selected song function
function playSong(song) {
  const songImage = document.getElementById('songImage');
  const songName = document.getElementById('songName');
  const artistName = document.getElementById('artistName');
  const audioPlayer = document.getElementById('audioPlayer');

  songImage.src = song.img;
  songName.textContent = song.name;
  artistName.textContent = song.artist;
  audioPlayer.src = song.source;
  audioPlayer.play();
}

// Add to playlist function
function addToPlaylist() {
  // Implementation for adding song to playlist goes here
  // You can use localStorage or any other method to store playlist data
  alert('Song added to playlist');
}

// Event listener for the "Create Playlist" button
document.getElementById('createPlaylistBtn').addEventListener('click', createPlaylist);
// Create playlist function
function createPlaylist() {
  const playlistInput = document.getElementById('playlistInput');
    const playlistName = playlistInput.value.trim();

    // Create a new playlist
    const newPlaylist = document.createElement('li');
    newPlaylist.textContent = playlistName;

    // Append the new playlist to the playlist section
    const playlistList = document.getElementById('playlistList');
    playlistList.appendChild(newPlaylist);

    // Clear the input box
    playlistInput.value = '';

    alert('New playlist created: ' + playlistName);
}

// Toggle play/pause function
function togglePlayPause() {
  const audioPlayer = document.getElementById('audioPlayer');
  if (audioPlayer.paused) {
      audioPlayer.play();
  } else {
      audioPlayer.pause();
  }
}

// Previous song function
function prevSong() {
  // Implementation for playing previous song goes here
  alert('Previous song');
}

// Next song function
function nextSong() {
  // Implementation for playing next song goes here
  alert('Next song');
}

// Initial rendering
renderSongs('all');

// Event listeners
document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);
document.getElementById('genreFilter').addEventListener('change', (event) => renderSongs(event.target.value));
document.getElementById('addToPlaylistBtn').addEventListener('click', addToPlaylist);
document.getElementById
