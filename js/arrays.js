// Mảng
const a = "a";
const b = "b";
const c = "c";
const d = "d";
// 2 cách tạo mảng
// array literal
// const students1 = ["evondev", "tuan", "nam", "thanh", "trung"];
// array constructor
const students2 = new Array();
// Ví dụ một mảng
// Mảng phức tạp [0, false, undefined, null, "evondev", ["evondev", false, 1200, []] ]
// Mảng đơn giản [0, false, undefined, null, "evondev"]
// [1,2,3,4,5] ["a","b","c","d"] [false, true, true]
// []: empty array --> mảng rỗng
const students1 = ["evondev", "tuan", "nam", "thanh", "trung"];
// 0 1 2 3 4
// index: vị trí của phần tử(giá trị) trong mảng và nó bắt đầu từ 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng -> students1[index]
console.log(students1[0]);
console.log(students1[5]); // undefined
// Lấy phần tử cuối cùng trong mảng = độ dài của mảng - 1 -> array.length - 1
console.log(students1[students1.length - 1]);
// indexOf -> trả về vị trí của phần tử tìm thấy đầu tiên
console.log("-----array.indexOf-----");
console.log(students1.indexOf("tuan"));
// lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log("-----array.lastIndexOf-----");
console.log(students1.lastIndexOf("tuan"));
// push -> thêm phần tử vào cuối mảng
console.log("-----array.push-----");
console.log(students1.push("javascript"));
console.log(students1);
// unshift -> thêm phần tử vào đầu mảng
console.log("-----array.unshift-----");
console.log(students1.unshift("Frontend"));
// pop -> xoá phần tử cuối cùng trong mảng
console.log(students1);
students1.pop();
console.log(students1);
// shift -> xoá phần tử đầu tiên trong mảng
console.log(students1);
students1.shift();
console.log(students1);
