/**
 *
 *
 */
window.addEventListener("load", function () {
  const images = document.querySelectorAll(".content img");
  images.forEach((item) => item.addEventListener("click", handleZoomImage));
  function handleZoomImage(event) {
    const image = event.target.getAttribute("src");
    const template = `
  <div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  let index = 0;
  document.addEventListener("click", function (e) {
    const lightImage = document.querySelector(".lightbox-image");
    if (!lightImage) return;
    // có lightImage
    let lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    if (e.target.matches(".lightbox")) {
      // remove lightbox out of dom
      e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")) {
      // handle next image
      index = index + 1;
      if (index > images.length - 1) {
        index = 0;
      }
      displayLightImage(lightImage, index);
    } else if (e.target.matches(".lightbox-prev")) {
      // handle prev image
      index = index - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      displayLightImage(lightImage, index);
    }
  });

  function displayLightImage(lightImage, index) {
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
  }
});
