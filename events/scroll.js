// 1. Sự kiện scroll
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    console.log("scroll");
  }, 50)
);
// 2. debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// 3. window.pageYOffset: khoảng cách scroll của window theo chiều dọc so với phía trên cùng
//  và window.pageXOffset:  khoảng cách scroll của window theo chiều ngang so với phía bên trái
// 4. scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth,
// scrollHeight: trả về chiều cao của element bao gồm padding, nhưng không có border
// scrollWidth: trả về chiều rộng của element bao gồm padding, nhưng không có border
const boxed = document.querySelector(".boxed");
// boxed.addEventListener("scroll", function () {
//   console.log(boxed.scrollTop);
//   console.log(boxed.scrollLeft);
// });
// scroll(x, y)
// 5. scrollWidth vs offsetWidth
// boxed.offsetWidth -> 200
// boxed.scrollWidth -> 200
// 6. scrollIntoView(): scroll tới phạm vi mà có thể thấy nó
