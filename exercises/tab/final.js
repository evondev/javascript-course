window.addEventListener("load", function () {
  const tabs = document.querySelectorAll(".tab-item");
  const tabsContent = document.querySelectorAll(".tab-content");

  function handleChangeTab(e) {
    const tabId = e.target.dataset.tab;
    tabs.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    tabsContent.forEach((el) => {
      el.classList.remove("active");
      if (el.getAttribute("data-tab") === tabId) {
        el.classList.add("active");
      }
    });
  }

  tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
});
