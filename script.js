let movies = [];

async function loadMovies() {
  const res = await fetch('data/movies.json');
  movies = await res.json();
  showRandomMovie();
}

function showRandomMovie() {
  const movie = movies[Math.floor(Math.random() * movies.length)];

  document.getElementById('background').style.backgroundImage = `url('assets/cinematography/${movie.background}')`;
  document.getElementById('quote').textContent = `"${movie.quote}"`;
  document.getElementById('poster').src = `assets/posters/${movie.poster}`;
  document.getElementById('movie-info').textContent = `${movie.name} (${movie.year})`;

  const soundtrack = document.getElementById('soundtrack');
  soundtrack.src = `assets/soundtracks/${movie.soundtrack}`;
  soundtrack.play();
}

document.getElementById('next').addEventListener('click', showRandomMovie);

loadMovies();