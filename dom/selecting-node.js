// 1. DOM là gì ?
// Document Object Model
// DOM attribute
// DOM node
// 2. Selecting nodes
// 2.1 document.querySelector("selector") -> trả về 1 node nếu tồn tại selector đó, ngược lại nó sẽ trả về null
// selectors: .header, p, body, #heading,
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
// 2.2 document.querySelectorAll("selector") -> trả về một NodeList chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng forEach
// nó giống array là có thể loop nhưng ko sử dụng được các phương thức như push, pop, shift,
const multiNodes = document.querySelectorAll(".item");
// for (let i = 0; i < multiNodes.length; i++) {
//   console.log(multiNodes[i]);
// }
// console.log(multiNodes);
// 2.3 document.getElementsByClassName("className") -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
const classNodes = document.getElementsByClassName("item");
// 2.4 document.getElementsByTagName("tagName") -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
const tagNodes = document.getElementsByTagName("li");
// 2.5 document.getElementById("id") -> trả về 1 node
// const idNode = document.getElementById("spinners");
const idNode = document.querySelector("#spinner");
// Hay dùng nhất document.querySelector(tag, class, id), document.querySelectorAll(tag, class)
console.log(idNode);
