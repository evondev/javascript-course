// Số nguyên: 1 2 3 999 33 444
// Số thập phân: 3,4 5,8 -> 3.4, 5.8
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); // 5
console.log(parseFloat(number2)); // 4.8
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3)); // 10
// Math.floor(value) -> Làm tròn xuống ví dụ: 4.3 -> 4
console.log(Math.floor(4.3));
// Math.ceil(value) -> Làm tròn lên ví dụ: 4.3 -> 5
console.log(Math.ceil(4.3)); // 5
// Math.round(value) -> Làm tròn gần nhất
console.log(Math.round(4.5)); // 4.5 -> 5, dưới 4.5 -> 4
// toFixed(number) ví dụ: 0.33333 -> 0.33
// toFixed(2) *
console.log(parseFloat((1 / 3).toFixed(2)));
console.log(Math.ceil(Math.random() * 10));
// Math.max(1,3, -5, 100); -> trả ra con số lớn nhất
console.log(`Max: ${Math.max(1, 2, 3)}`);
// Math.min(1,3, -5, 100); -> trả ra con số nhỏ nhất
console.log(`Min: ${Math.min(1, 2, 3)}`);
// Math.pow(number1, number2); Math.pow(3, 2) -> 3^2 -> 9
console.log(Math.pow(3, 2));
// isNaN(value) vs Number.isNaN(value)
// NaN -> Not a Number
console.log(isNaN("this is a string")); // true
console.log(isNaN("12345")); // -> isNaN(12345) -> false
console.log(Number.isNaN("12343")); // false
console.log(Number.isNaN(NaN)); // true
