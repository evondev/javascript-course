window.addEventListener("load", function () {
  let productItems = document.querySelectorAll(".filter-product");
  let filterList = document.querySelector(".filter-list");
  const productWidth = productItems[0].offsetWidth;
  const columns = 4;
  const container = filterList.offsetWidth;
  let itemWidth = container / columns;

  function init() {
    let spacing = 0;
    let indexTop = 0;
    for (let i = 0; i < productItems.length; i++) {
      const el = productItems[i];
      const image = el.querySelector("img");
      const overlay = el.querySelector(".filter-inner");
      const imageWidth = image.offsetWidth;
      const imageHeight = image.offsetHeight;
      const ratio = imageHeight / imageWidth;
      el.style = `height:${imageHeight}px; width: ${itemWidth}px`;
      let itemHeight = imageHeight;
      overlay.style = `height: 0; padding-bottom: ${ratio * 100}%`;
      image.style.position = "absolute";
      let index = i;
      let counter = Math.floor(i / columns);
      spacing = Math.floor(i / columns) * 30;
      let top = 0;
      if (index >= columns) {
        index = (index - columns) % columns;
        indexTop = i - columns;
        top =
          productItems[indexTop].offsetTop +
          productItems[indexTop].offsetHeight +
          30;
      }
      const left = index * productWidth;
      el.style = `width:${itemWidth}px;height:${itemHeight}px; position:absolute;left: ${left}px; top: ${top}px; display: block;`;
    }
  }
  init();
});
