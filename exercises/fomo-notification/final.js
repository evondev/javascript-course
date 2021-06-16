// function tạo ra thông báo
function createNotification(title = "Welcome to notification") {
  const template = ` <div class="noti">
  <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
  <div class="noti-content">
    <h3 class="noti-title">${title}</h3>
    <p class="noti-desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi, dicta quae.
    </p>
  </div>
</div>`;
  // insertAdjacentHTML để chèn vào body
  document.body.insertAdjacentHTML("afterbegin", template);
}
const randomData = [
  "Welcome to javascript course",
  "Welcome to this tutorial",
  "Today is a good day",
];
let lastTitle;

const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  // Lấy random title từ mảng randomData
  // Công thức random trong mảng bất kỳ: array[Math.floor(Math.random() * array.length)]
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 5000);
