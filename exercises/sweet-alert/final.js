window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = ` <div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Congratulations on learning JS</p>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    renderSweetAlert();
    const sweetItem = document.querySelector(".sweet-alert");
    if (sweetItem) {
      setTimeout(function () {
        sweetItem.parentElement.removeChild(sweetItem);
      }, 2000);
    }
  });
});
