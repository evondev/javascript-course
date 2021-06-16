const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  // khoảng cách của scrollbar so với phía trên khi scroll
  const scrollTop = window.pageYOffset;
  // chiều cao của document bao gồm scrollbar document.documentElement.scrollHeight
  // chiều cao của document ko bao gồm scrollbar document.documentElement.clientHeight
  //  Tính ra chiều cao của scrollbar
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});
