const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: { Accept: "application/json" },
  };
  //   this config is specific to this api

  const res = await fetch("https://icanhazdadjoke.com", config);
  //   fetch the data
  const data = await res.json();
  //   use the data as json ish
  jokeEl.innerHTML = data.joke;
  //   data.xxx can be used in whatever way u want
}

// function generateJoke() {
//     const config = {
//       headers: { Accept: "application/json" },
//     };

//     fetch("https://icanhazdadjoke.com", config)
//       .then((res) => res.json())
//       .then((data) => {
//         jokeEl.innerHTML = data.joke;
//       });
//   }
//   .then version fuuuu
