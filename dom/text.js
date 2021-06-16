// 1. textContent -> lấy ra nội dung(only text) bao gồm text trong html tag(nếu có) của selector
const spinner = document.querySelector("#spinner");
// Thay đổi text content
// 2. innerText
console.log(spinner.textContent);
console.log(spinner.innerText);
// spinner.textContent = `<div class="demo">hello html</div>`;
// 3. innerHTML -> lấy ra nội dung của selector bao gồm cả HTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello html</div>`;
// parse
