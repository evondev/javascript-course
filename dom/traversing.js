// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove();
// 2. nextElementSibling: tìm tới phần tử kế tiếp vs previousElementSibling: tìm tới phần tử đứng sau nó
// a b c
const nextSpan =
  span.nextElementSibling.nextElementSibling.parentElement.nextElementSibling
    .previousElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 3. childNodes: trả về 1 mảng  các node bên trong bao gồm textNodes vs children: trả về các node không bao gồm textNodes
console.log(span.childNodes); // text <strong> text
console.log(span.children[1]);
// 4. firstChild vs firstElementChild
console.log(span.firstChild); // text
console.log(span.firstElementChild); // <strong>
// 5. lastChild vs lastElementChild
console.log(span.lastChild); // text
console.log(span.lastElementChild); // <strong>
// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
