// function (hàm)
// Khai báo function
// Cú pháp(Syntax): function functionName(parameters, parameters){
// Your code here
// }
// parameters:  tham số
// Đề bài là viết hàm tính tổng 2 số a và b
console.log(sum(500, 1000));
function sum(a = 0, b = 0) {
  // console.log("is it working?");
  const total = a + b;
  return total;
  // return
  // return value
  // Không có return thì kết quả của hàm trả về là undefined
}
// function sum(parameter = defaultValue){}
// sum() : invoke function
// invoke function sum(arguments) Đối số
// Lưu function vào 1 biến rồi gọi sau này
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
// add(500, 1000);
const sum2 = add; // gán function add cho biến sum2 nhưng chưa được gọi
// sum2(300, 400);
// Tham số là function
// Tính trung bình của a và b -> (a + b) / 2
// fn: function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, sum2);
console.log(`result ${result}`);
// Function declaration
// Anonymous function(function expression)
// Không bị hoisting
const logName = function () {
  console.log("your name");
};
logName();
// IIFE -> immmediately invoked function execution
(function () {
  console.log("this is IIFE function");
})();
// Scope
// Global scope, function scope
let myName = "evondev"; // global scope
function logYourName() {
  let myName2 = myName; // function scope
  console.log(myName2);
}
logYourName();
// var message;
// let message;
if (2 > 1) {
  // block scope
  let message = "Hello evondev";
  // const message = "Hello evondev";
  // global scope
  // hoisted
  message = "Hello Tuan";
}
// alert(message);
// Lexical scope
let aNewName = "Evondev"; // global scope
function sayHello() {
  let message5 = "Hi"; // block scope
  console.log(`${message5} ${aNewName}`);
}
// sayHello();
// Closure
// Function con có thể truy xuất scope của function cha
// parent function
// function sayHello2() {
//   let message = "Hi";
//   // inner function
//   function sayHi() {
//     console.log(message);
//   }
//   return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello3(message) {
  return function hiYourName(name) {
    console.log(`${message} ${name}`);
  };
}
let hello = sayHello3("Welcome to javascript");
hello(" Closure");
// Welcome to javascript Closure
function anotherFunction() {
  let otherMessage = "hello";
  function sayHi() {
    console.log(otherMessage);
  }
  return sayHi;
}
let callFunc = anotherFunction(); // otherMessage is no longer accessible
callFunc(); // hello
// Arrow function: anonymous function
// ECMAScript
// Normal function: anonymous function
const square = function (x) {
  return x * x;
};
square(5); // 25
// Arrow function
const square = () => {
  // if else
  return 1000;
};
// rút gọn khi return
const square2 = (x) => x * x;
/*
Arrow function khi xử lý nhiều dòng
const square = () => {
  handle code
  return;
}
*/
