"4.5"; // 4.5 parseFloat
"4"; // 4 parseInt
// Number(value) -> number
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abcdef"));
// NaN: Not a Number
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN
// falsy values
console.log(Number(true)); // 1
// String(value) -> string
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String(false)); // "false"
console.log(String(true)); // "true"
// Boolean(value) -> true or false
console.log(`Boolean of zero: ${Boolean(0)}`); // false
console.log(`Boolean of "": ${Boolean("")}`); // false
console.log(`Boolean of null: ${Boolean(null)}`); // false
console.log(`Boolean of undefined: ${Boolean(undefined)}`); // false
console.log(`Boolean of NaN: ${Boolean(NaN)}`); // false
console.log(`Boolean of false: ${Boolean(false)}`); // false
console.log(`Boolean of text tuan: ${Boolean("tuan")}`); // true
// type coercion
// + - * /
// weird
console.log(1 + 2);
console.log(10 + 10);
console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
// 10 -> "10" + "10" ->  "1010"
// console.log(String(10) + "10")
console.log("10" - 10); // 0 Number("10") - 10
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("" - 1); // Number("") -> 0 -> 0 - 1 = -1
console.log(false - true); // -1
console.log(null + 10); // 10
// Toán tử so sánh > < >= <=
console.log(5 > 7); // false
console.log(50 > 7); // true
console.log(50 < 7); // false
console.log(6 >= 6); // true
console.log(6 <= 6); // true
// Toán tử logic cơ bản: && || !
console.log(5 > 7 && 8 > 3); // false
console.log(5 > 7 || 8 > 3); // false || true -> true
const amIWrong = true;
console.log(!amIWrong); // false
// #Boolean &&
// false && true -> false
// true && false -> false
// false && false -> false
// true && true -> true
// #Boolean ||
// false || true -> true
// true || false -> true
// true || true -> true
// false || false -> false
// == loose equality vs === strict equality
console.log("=== vs ==");
console.log(10 == "10"); // "10" == "10"
console.log(true == 1); // Number(true) = 1 -> 1 == 1 -> true
console.log(1 == "01"); // Number("01") -> 1 -> 1 == 1 -> true
console.log(null == ""); // "null" != "" -> false
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(true == "true"); // false
// !==
