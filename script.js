const gifs = [
  'assets/naruto.gif',
  'assets/luffy.gif',
  'assets/goku.gif',
  'assets/gojo.gif',
  'assets/tanjiro.gif'
];

let index = 0;
const gifElement = document.getElementById("anime-gif");

setInterval(() => {
  index = (index + 1) % gifs.length;
  gifElement.src = gifs[index];
}, 5000);

function playWelcome() {
  const audio = document.getElementById("welcomeSound");
  audio.play();
  alert("Welcome, Anime Fan!");
  return false;
}
