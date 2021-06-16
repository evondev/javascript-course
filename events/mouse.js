const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mousemove
// button.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });
// mouseover: nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
// button.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });
// mouseenter: nó sẽ chạy khi rê chuột vào phần tử
// button.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// // mouseleave: nó sẽ chạy khi rê chuột vào phần tử rồi rê ra ngoài
// button.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });
// pageX, pageY, clientX, clientY
document.addEventListener("mousemove", function (event) {
  console.log(`pageY: ${event.pageY}`);
  console.log(`clienY: ${event.clientY}`);
});
// clientY: nó sẽ lấy toạ độ theo viewport
// pageY: nó sẽ lấy toạ độ của document, khi mà có scroll thì nó sẽ thay đổi
// X: Chiều ngang
// Y: Chiều dọc
