// 1. keydown: Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.which);
  // ascii MDN
  // e.key: key nhập vào
  // if (e.key === "Enter") {
  //   console.log("You hit Enter!");
  // } else {
  //   console.log(e.key);
  // }
  // console.log(e.key);
  // if (e.key === "Home") {
  //   console.log("working");
  // }
});
// 2. keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  // console.log(e.key);
  // e.preventDefault();
});
// 3. keypress: sự kiện này xảy ra khi các bạn nhấn phím
// keypress sẽ ignore các phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
input.addEventListener("keypress", function (e) {
  // console.log(e.key);
  // if (e.key === "Home") {
  //   console.log("working");
  // }
});
// Thứ tự ưu tiên keydown -> keypress -> keyup
// 4. change: xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function (e) {
  // console.log("working");
});
// 5. focus
input.addEventListener("focus", function (e) {
  // console.log("input is focusing");
});
// 6. blur
input.addEventListener("blur", function (e) {
  // console.log("input is blur");
});
// 7. submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("please enter your username");
    return;
  }
  if (!password) {
    alert("please enter your password");
    return;
  }
  if (password.length <= 3) {
    alert("too short");
    return;
  }

  // this, e.target
  // console.log(this);
  // console.log(e.target);
  // this.elements
  // console.log(this.elements);
  // console.log(this.elements["username"]);
  // console.log(this.elements["username"].value);
  // const username = this.elements["username"].value;
  // const gender = this.elements["gender"].value;
  // const hobby = this.querySelectorAll(`input[name="hobby"]`);
  // console.log(hobby);
  // let hobbyValues = [];
  // [...hobby].forEach((item) => hobbyValues.push(item.value));
  // console.log(hobbyValues);
  // stuck -> bị bí
});
// Validation
// email: abc@gmail.com abc
// Regular expression
