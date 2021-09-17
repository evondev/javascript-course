// https://icanhazdadjoke.com/
const jokeHeding = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}
async function handleClick() {
  jokeWrapper.classList.add("is-loading");
  const data = await getJoke();
  jokeHeding.textContent = data.joke;
  jokeWrapper.classList.remove("is-loading");
}
jokeButton.addEventListener("click", handleClick);
