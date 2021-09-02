/**
 * status: pending
 * status: resolve
 * status: reject
 */
// new Promise(function(resolve, reject))
// let buyIphone = true;
// let willBuyIphone = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (buyIphone) {
//       resolve("Oh yeah I have new Iphone");
//       console.log("OK");
//     } else {
//       reject("Oh no, I dont have new Iphone");
//       console.log("not OK");
//     }
//   }, 5000);
// });
// console.log(willBuyIphone);
// .then(onFullfilled, onRejected)
function makePromise(buyIphone) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (buyIphone) {
        resolve("Oh yeah I have new Iphone");
      } else {
        reject("Oh no, I dont have new Iphone");
      }
    }, 5000);
  });
}
// onFullfilled -> resolve
// onRejected -> reject
// let haveIphone = makePromise(false);
// haveIphone
//   .then(
//     (success) => {
//       console.log(success);
//       // console.log("Im still happy");
//     }
//     // undefined,
//     // (reason) => console.log(reason)
//   )
//   .catch((error) => {
//     console.log(error);
//     // console.log("Im still happy");
//   })
//   .finally(() => {
//     console.log("Im still happy");
//   });
// catch
// Exercise
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("1. run the first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("2. run the second time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("3. run the third time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });
// setTimeout(() => {
//   console.log("run the first time");
//   setTimeout(() => {
//     console.log("run the second time");
//     setTimeout(() => {
//       console.log("run the third time");
//       setTimeout(() => {
//         console.log("run the fourth time");
//         setTimeout(() => {
//           console.log("run the fifth time");
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000)
// Promise.all
// Trả về resolve khi tất cả promises truyền vào đều resolve
// Trả về rejected khi có 1 cái promise nào đó bị reject
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
  // console.log(data);
});
// Promise.race
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
  // console.log(data);
});
// Promise.allSettled
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
const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//   console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//   console.log(data);
// });
const devRace = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
});
// try catch
function isFrontendDev2(languages) {
  if (!languages.includes("html")) {
    throw new Error("You are not Frontend developer");
  }
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
try {
  isFrontendDev2(["css"])
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.log("Oh noooooooooo");
} finally {
  console.log("demo");
}
