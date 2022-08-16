const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  // for each object in array i created btn then added class btn to it and
  // added text inside by ids name and then dropped them in div by html id buttons
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  //   cool play() can be used if its a audiofile

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
    // stops the audio if its a audio file
  });
}
