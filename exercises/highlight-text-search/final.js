window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handleHighlight);
  // input nó sẽ lấy value(Giá trị) mỗi khi chúng ta gõ
  function handleHighlight(e) {
    let filter = e.target.value;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      if (index >= 0 && text.toLowerCase().includes(filter)) {
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      } else {
        item.innerHTML = text;
      }
    });
  }
});
