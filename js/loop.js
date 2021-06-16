// Vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (let i = 0; i < numbers.length; i++) {
  body code
}
*/
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`The index is ${i}`);
// }
/*
length: 5
i = 0;
i < 5 -> true
i++ -> 1
result: 0

i = 1;
1 < 5 -> true
i++ -> 2
result: 1

i = 2;
2 < 5 -> true
i++ -> 3
result: 2

i = 3;
3 < 5 -> true
i++ -> 4
result: 3

i = 4;
4 < 5 -> true
i++ -> 5
result: 4

i = 5;
5 < 5 -> false
loop end
*/
// for (let i = 0; i < numbers.length; i = i + 2) {
//   console.log(`The index is ${i}`);
// }
// i++ -> i = i + 1
// numbers[0]
// numbers[numbers.length - 1]
for (let i = 0; i < numbers.length; i++) {
  // console.log(`The index is ${i}`);
  // Nếu giá trị là 8 thì dừng vòng lặp
  // console.log(`The value ${numbers[i]}`);
  // if (numbers[i] === 8) {
  //   break;
  // }
  // Nếu giá trị là 8 thì bỏ qua giá trị đó
  if (numbers[i] === 8) {
    continue;
  }
  // console.log(`The value ${numbers[i]}`);
}
// nested loop
// [[1,2,3,4,5], [1,2,3,4,5]]
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`The value ${numbers[i]}`);
  for (let j = numbers.length - 1; j >= 0; j--) {
    console.log(j);
  }
}
/*
// infinite loop
for (let i = 0; 2 > i; i--) {

}
*/
// if (2 > 1)
// let i = numbers.length - 1 -> lấy vị trí cuối cùng của mảng
// i >= 0 -> điều kiện index lớn hơn hoặc bằng 0
// i-- -> i = i - 1
// 1. sao chép mảng dùng vòng lặp for
let copyArr = [];
//1 2 3 4
// push(value)
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);
// 2. Đảo ngược từ "i love" -> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);
// while và do while
// while(condition: điều kiện) {
// body code
// }
let number = 1;
while (number < 10) {
  // console.log("number is " + number);
  // điều kiện để dừng
  number = number + 1;
  // number+=1;
  // number++;
}
/*
do {

} while(condition: điều kiện)
*/
// let number2 = 1;
// do {
//   number2++;
//   console.log("number is " + number2);
// } while (number2 < 10);
// for of
// for (value of array){}
let a = [];
for (let value of numbers) {
  value += 10;
  a.push(value);
}
for (let c of "evondev") {
  console.log(c);
}
// console.log(a);
