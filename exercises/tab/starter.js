const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // console.log(event.target);
  // Xoá hết tất cả class active ở các tab-item
  [...tabItems].forEach((item) => item.classList.remove("active"));
  // sau đó add class active vào tab hiện tại
  event.target.classList.add("active");
  const tabNumber = event.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  // [...tabContents][tabNumber - 1].classList.add("active");
}
