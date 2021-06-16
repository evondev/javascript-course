const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = [
  "#ffa400",
  "#00aefd",
  "#07a787",
  "#ffb86c",
  "#2979ff",
  "#e74c3c",
];
function handleChangeColor() {
  // document.body.setAttribute("style", "background-color: red");
  // Lấy random màu từ mảng colors
  // yourArray[Math.floor(Math.random() * yourArray.length)]
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
