const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
const activeStr = "is-active";
function handleClickAccordion(e) {
  // console.log(e.target);
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  // scrollHeight: chiều cao của phần tử bao gồm padding
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }

  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
  // console.log(icon);
}
