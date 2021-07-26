// 1. Bind
const student = {
  firstName: "tran",
  lastName: "anh tuan",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
// $
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const button = $(".button");
button.addEventListener("click", student.fullName.bind(student));
// console.log(selectors(".button"));
function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

// function logErrToday(message) {
//   log("Error", "Today", message);
// }
// partial function
// logErrToday("Server OK!");
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");
// 2. Call and Apply
const person = {
  firstName: "evondev",
  lastName: "Frontend developer"
};
function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}
// function.call(this, arg1, arg2,....)
sayHello.call(person, "hello", "good morning");
// function.apply(this, [arg1, arg2,....])
sayHello.apply(person, ["hi", "good evening"]);
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr);