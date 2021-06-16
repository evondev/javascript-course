const now = new Date();
// built-in object
console.log(now);
// Thu May 13 2021 23:43:34 GMT+0700 (Indochina Time)
// Timezone: GMT+0700 (Indochina Time)
// Second: 34
// Minute: 43
// Hour: 23
// Year: 2021
// Month: May
// Day: 13
// Day of the week: Thu
// Timestamp & Epoch time
// Unix time
// timestamp tính ra kết quả là miliseconds
console.log(now.getTime()); // print timestamp 1620924541981
// console.log(new Date(0));
// 4 cách sử dụng new Date
// new Date() -> In ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date(date string) ->
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1620924981606));
console.log(new Date("Thu May 13 2021 23:56:21 GMT+0700 (Indochina Time)"));
console.log(new Date(2021, 5, 1, 23, 23, 23, 23));
// Các hàm get trong Date
const birthday = new Date(1994, 8, 5);
// in ra năm
console.log(birthday.getFullYear()); // 1994
// in ra tháng
// getMonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12(Dec)
console.log(birthday.getMonth()); // 8
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getDate()); //5
// in ra thứ của tuần
// 0-6: 0: chủ nhật, 6: thứ bảy
console.log(birthday.getDay()); // 1
// in ra giờ
console.log(birthday.getHours());
// in ra phút
console.log(birthday.getMinutes());
// in ra giây
console.log(birthday.getSeconds());
// in ra mili giây
console.log(birthday.getMilliseconds());
// in ra timestamp
console.log(birthday.getTime()); // 778698000000
// Các hàm set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(1993);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after update: ${birthday}`);
// UTC
// https://en.wikipedia.org/wiki/Coordinated_Universal_Time
// in ra năm
console.log(birthday.getUTCFullYear());
// in ra tháng
// getMonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12(Dec)
console.log(birthday.getUTCMonth());
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getUTCDate());
// in ra thứ của tuần
// 0-6: 0: chủ nhật, 6: thứ bảy
console.log(birthday.getUTCDay());
// in ra giờ
console.log(birthday.getUTCHours());
// in ra phút
console.log(birthday.getUTCMinutes());
// in ra giây
console.log(birthday.getUTCSeconds());
// in ra mili giây
console.log(birthday.getUTCMilliseconds());
// date string
console.log(now.toDateString()); // Fri May 14 2021
console.log(now.toTimeString()); // 00:22:00 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()); // m/dd/yyyy -> 5/14/2021
// 14/5/2021
console.log(now.toLocaleDateString("vi-VI")); // 14/5/2021
console.log(now.toISOString()); // 2021-05-13T17:24:04.286Z
// 14/05/2021
// input: Fri May 14 2021 00:26:21 GMT+0700 (Indochina Time)
const myTime = new Date("Fri May 14 2021 00:26:21 GMT+0700 (Indochina Time)"); // 14/5/2021
const myYear = myTime.getFullYear(); // 2021
const myMonth = myTime.getMonth() + 1; // 5
const myDate = myTime.getDate(); // 14
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
// setTimeout vs setInterval
// const timer1 = setTimeout(function () {
//   alert("call me after 3 seconds");
// }, 3000);
// clearTimeout(timer1)
const timer = setInterval(function () {
  console.log("call me");
}, 1000);
clearInterval(timer);
