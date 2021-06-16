// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi - dễ
// 2. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian - trung bình
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước` - khó
// 1
function getAge(year = 0) {
  if (typeof year !== "number") return 0;
  // currentYear - year
  const now = new Date();
  const currentYear = now.getFullYear(); // 2021
  return currentYear - year;
}
const yourAge = getAge("ádfsdf");
// console.log(`Năm nay bạn ${yourAge} tuổi`);
// 2
function countdown(minutes = 1) {
  let seconds = minutes * 60; // 60
  let counter = 0;
  const timer = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    // counter += 1;
    if (counter === seconds) {
      clearInterval(timer);
      console.log("Your time is end!");
    }
  }, 1000);
}
// countdown(1);
// counter = 0
// 1 2 3 4 5 6
// 3.
function timeSince(date) {
  // current Time - date
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // in ra số giây
  if (seconds < 0) {
    alert("your time is invalid");
    return;
  }
  let timer = seconds / 31536000; // 0.00002342
  if (timer > 1) {
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400; // 0.0023424
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tháng trước`);
    return;
  }
  timer = seconds / 604800; // 0.023423
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuần trước`);
    return;
  }
  timer = seconds / 86400; // 0.9
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngày trước`);
    return;
  }
  timer = seconds / 3600; // 1.333
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phút trước`);
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giây trước`);
  }
  return;
}
// `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`
// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 1 * 24 * 60 * 60 = 86400
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60
timeSince("Sun May 16 2021 00:30:10 GMT+0700 (Indochina Time)");
