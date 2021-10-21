import debounceFunction, { myName, job } from "./utils.js";

window.addEventListener(
  "scroll",
  debounceFunction(function (e) {
    console.log("scroll");
  }, 50)
);
console.log(myName);
console.log(job);
