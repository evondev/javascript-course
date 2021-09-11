function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
// await wait(2000);
// function expression
async function run() {
  console.log("starting");
  await wait(2000);
  console.log("running");
  await wait(1000);
  console.log("ending");
}
// run();
// arrow function
const fn = async () => {};
const student = {
  fullname: async function () {},
  async calcAge() {},
  yearly: async () => {},
};

function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
async function allTimer() {
  const timer1 = makeTimer(1000, "first time");
  const timer2 = makeTimer(2000, "second time");
  const [a, b] = await Promise.all([timer1, timer2]);
  console.log(a, b);
  // console.log(timer1);
  // console.log(timer2);
  // const timer3 = makeTimer(3000, "third time");
}
// allTimer();
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
function handleError(err) {
  console.log(err);
}
async function go() {
  const dev1 = await isFrontendDev(["html"]);
  console.log(dev1);
  return dev1;
}
// console.log(go());
go().catch(handleError);
