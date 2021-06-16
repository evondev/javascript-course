console.log("-----array.slice-----");
// Tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
// slice(): Tạo ra mảng mới y hệt mảng ban đầu
const animals2 = animals.slice();
// ["tiger", "lion", "horse", "elephant"];
console.log(animals2);
// slice(start). start -> vị trí index ở trong mảng
const animals3 = animals.slice(1);
// ["lion", "horse", "elephant"]
console.log(animals3);
// slice(start, end). start là vị trí bắt đầu, end là vị trí kết thúc
// nó sẽ sao chép từ vị trí start tới vị trí end - 1
const animals4 = animals.slice(1, 99);
// ["lion", "horse", "elephant"]
console.log(animals4);
const animals5 = animals.slice(-2);
console.log(animals5);
console.log("-----array.splice-----");
// Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
// const pets2 = pets.splice(2);
// ["bird", "dragon"];
// console.log(pets2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
// const pets3 = pets.splice(0, 4);
// [] empty array: mảng rỗng
// splice(start, deleteCount, item1, item2, itemN): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
const pets3 = pets.splice(0, 2, "dinasour", "pig", false, 100);
// ["dinasour", "cat", "bird", "dragon"];
console.log(pets);
console.log("-----array.sort-----");
// Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 10000000, 5, 09];
// [1, 10000000, 5, 9, 9999]
console.log(random.sort());
// sort(function(a, b))
// function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
// ternary operator: condition ? something : something else
console.log(random3);
console.log("-----array.find-----");
// nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thoả điều kiện nào đó
const numbers = [1, 9999, 10000000, 5, 09];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 100000000000);
// Nếu không tìm thấy thì nó sẽ trả ra kết quả là undefined
console.log(findYourNumber); // 9999
console.log("-----array.findIndex-----");
// nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thoả điều kiện nào đó
const findYourIndex = numbers.findIndex((element) => element < 0);
// Nếu không tìm thấy thì sẽ trả ra kết quả là -1
console.log(findYourIndex);
// Sort bổ sung
// const random = [1, 9999, 10000000, 5, 09];
const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4);
console.log("-----array.map-----");
// duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
// [2, 4, 6, 8, 10]
console.log(listNumberDouble);
console.log("-----array.forEach-----");
// .forEach(callback(value, index, array))
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple);
// Hãy cho biết sự khác nhau giữa forEach và map ?
console.log("-----array.filter-----");
// Dùng để filter(sàng lọc) các phần tử trong mảng thoả điều kiện nào đó
// .filter(callback(value, index, array))
// const listNumber = [1, 2, 3, 4, 5];
const greaterThanThree = listNumber.filter((item) => item > 30);
console.log(greaterThanThree);
console.log("-----array.some-----");
// Trả về true khi thoả 1 điều kiện và ngược lại trả vê false khi không thoả điều kiện nào cả
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);
console.log("-----array.every-----");
// Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai là nó sẽ return false
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);
// true or false
console.log("-----array.reduce-----");
// gom các phần tử trong mảng lại thành 1
// .reduce((a, b) => {}, initialize value);
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);
