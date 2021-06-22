// document.addEventListener("DOMContentLoaded", function () {
//   console.log("loaded");
// });
const button = document.querySelector(".button");
// removeEventListener
// function handleMouseMove(e) {
//   console.log(e.clientX);
// }
// document.addEventListener("mousemove", handleMouseMove);
// button.addEventListener("click", function () {
//   document.removeEventListener("mousemove", handleMouseMove);
// });
function handleClick() {
  console.log("clicked1");
}
function handleClick2() {
  console.log("clicked2");
}
// event handler
// onclick: chấp nhận 1 event handler
// button.onclick = handleClick;
// button.onclick = handleClick2;
// addEventListener: chấp nhận nhiều event handler cùng lúc
// button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2, {
  // chỉ chạy 1 lần duy nhất
  once: true,
});
// onmousemove, onmousedown
// Các sự kiện khác: touchstart, touchmove, touchend, dragstart, dragenter, dragover, dragleave, dragend, drop mà các bạn có thể tự tìm hiểu thêm
