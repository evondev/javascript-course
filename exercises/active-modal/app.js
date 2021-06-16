/*
 */
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, corporis neque! Molestias voluptates commodi doloremque eius, aut tempore et tenetur expedita totam molestiae maxime culpa nihil sapiente quos rerum error?";
modalContent.appendChild(modalDesc);
document.body.appendChild(modal);
// const template = `<div class="modal">
// <div class="modal-content">
// <i class="fa fa-times modal-close"></i>
// <div class="modal-desc">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
//   iure veniam reiciendis, accusamus dolorum exercitationem voluptates?
//   Eos a recusandae consectetur non eveniet quam, id atque? Atque ex
//   impedit quam eveniet!
// </div>
// <div class="modal-action">
//   <button class="modal-submit">Confirm</button>
//   <button class="modal-cancel">Cancel</button>
// </div>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
const modalWrapper = document.querySelector(".modal");
if (modalWrapper) {
  setTimeout(function () {
    modalWrapper.classList.add("is-show");
  }, 3000);
}
