const fetch = require("node-fetch");

async function getJoke() {
  let joke = new Promise((resolve, reject) => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => console.log(data.value));
  });
  let result = await joke;
  console.log(result);
}

getJoke();
