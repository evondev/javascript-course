// global scope: var i;
for (let i = 1; i < 6; i++) {
  //  empty
  setTimeout(function () {
    console.log(i);
  }, 1000);
  // function timer() {
  //   var k = i;
  //   setTimeout(function () {
  //     console.log(k);
  //   }, 1000);
  // }
  // timer();
}
console.log(i);
console.log("The loop is done!");
// ES6
// Explanation
/**
 * Web APIs: setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("The loop is done!") running -> callstack is empty
  Event Queue: console.log(i)
 */
// const button = document.querySelector("button");
function doSomething() {
  doSomethingElse();
  // some other code
}
// Web APIs
// button.addEventListener("click", function () {
//   console.log("Button was clicked");
// });
function doSomethingElse() {
  // some code of doSomethingElse
}
// doSomething();
// Callstack
/**
 * Empty
 * Empty -> doSomething() -> doSomethingElse()
 * Empty -> doSomething()
 * Empty
 */
// Web APIs: Interacting DOM(click, hover, keyup...), request server, timer(setTimeout, setInterval)
// Event Queue
// Event loop
// Single thread
// Synchronous
// Scope: global scope, block scope
// Single thread vs Synchronous
// unique scope
function doSomething1() {
  var a = "javascript";
  console.log(a);
}
function doSomething2() {
  var a = "react";
  console.log(a);
}
function doSomething3() {
  var a = "typescript";
  console.log(a);
}
// doSomething1();
// doSomething2();
// doSomething3();
