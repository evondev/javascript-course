// API là gì ?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");
// fetch

async function displayUser(username) {
  userEl.textContent = "Loading...";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEl.textContent = `${data.login}`;
}
function handleError() {
  console.log("Something wrong with your api");
  userEl.textContent = "No data found";
}
// console.log(displayUser("evondev"));
displayUser("asbc").catch(handleError);
// cors
