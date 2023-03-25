// 1. function
function showInformation() {
  // showInformation execution context
  // backpack
  const myName = "evondev";
  function getName() {
    // getName execution context
    return myName;
  }
  return getName;
}
const info = showInformation();
// console.log("info:", info);
console.log(info()); // evondev
