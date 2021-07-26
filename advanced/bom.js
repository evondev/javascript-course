// Browser Object Model: alert, prompt, confirm, window
// 1. Location
console.log(location);
console.log(window.location);
// setTimeout(() => {
//   location.href = "https://evon.dev";
// }, 1000);
let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page", 10));
console.log(params.get("page"));
console.log(params.keys());
for (let it of params.values()) {
  console.log(it);
}
params.delete("page");
// 2. History
console.log(window.history);
// history.back(); // quay lại trang trước đó
// history.forward(); // tới trang kế tiếp
// history.go();
// 3. Navigator
console.log(navigator.userAgent);
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
console.log(deviceType());
