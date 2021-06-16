// 1. selector.getAttribute("attribute") -> lấy ra giá trị của attribute selector
// selector: 1 cái
// attribute -> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
// li.getAttribute("class");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
console.log(li);
// if(link) {
// }
// 2. selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));
// 3. selector.removeAttribute("attribute") -> xoá attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("styles");
// 4. selector.hasAttribute("attribute") -> kiểm tra selector có attribute nào đó hay không, nếu có -> true ngược không có trả về false
console.log(p.hasAttribute("class")); // false
console.log(p.hasAttribute("id")); // true
if (p.hasAttribute("id")) {
  // do something here
}
