window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handleHoverImage);
  const imageWrapper = document.querySelector(".image-wrapper");
  let imageWraperWidth = imageWrapper.offsetWidth;
  let imageWraperHeight = imageWrapper.offsetHeight;
  const image = document.querySelector(".image");
  function handleHoverImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width: auto; height: auto; max-height: unset";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let spaceX = (imageWidth / 2 - imageWraperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWraperHeight) * 2;
    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;
    let ratioX = imageWidth / imageWraperWidth / 2;
    let ratioY = imageHeight / imageWraperHeight / 2;
    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioY;
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none;`;
  }
  imageCover.addEventListener("mouseleave", handleLeaveImage);
  function handleLeaveImage() {
    image.style = "";
  }
});
