// Điều kiện
// if (condition) {
// your code here;
// }
const isRich = true;
const myMoney = 100;
if (!isRich) {
  // !true -> false
  console.log("I will buy a new car");
} else if (myMoney > 1000) {
  console.log("i will give you some money");
} else {
  // console.log("I poor");
}
// prompt, confirm, alert
// alert("Your website has been hacked");
// const yourName = prompt("Vui long nhap vao ten cua ban", "");
// console.log(yourName);
// const isYourMoney = confirm("Day co phai la tien cua ban hay khong?");
// console.log(isYourMoney);
// const 1abc = "sdfs";
// const abc-xyz = "sdfs";
// const new = 123;
// Bài 1: Nhập vào số tuổi và kiểm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại thì không được vô coi
// const yourAge = prompt("Vui lòng nhập vào số tuổi của bạn", "");
// console.log(typeof yourAge); // check typeof variable
// let message = "Xin lỗi bạn không đủ tuổi";
// if (Number(yourAge) >= 18) {
//   message = "Bạn có thể vào rạp nha";
// }
// alert(message);
// Bài 2: Cho 2 số a và b, tìm ra số lớn hơn
const a = 5;
const b = 5;
if (a > b) {
  alert(`Số lớn hơn là số ${a}`);
} else if (a < b) {
  alert(`Số lớn hơn là số ${b}`);
} else {
  alert("Không có số nào lớn hơn số nào cả");
}
