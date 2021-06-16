// 1. Viết 1 function kiểm tra value có phải là object hay không ?
// typeof value === "object"
// {} [] null
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
// {}
// plain object -> true else return false
// console.log(isObject({}));
// 2. {a: 1, b: 2} -> [["a", 1], ["b", 2]]
function objectToArray(object) {
  // check nếu ko phải object thì dừng
  if (!isObject(object)) return;
  // nếu là object thì xử lý
  // return Object.entries(object);
  // [a, b]
  // object[key]
  // const value = Object.keys(object).map((key) => [key, object[key]]);
  // return value;
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại trả về false
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(objectToArray({ a: 1, b: 2 }));
// without
// 3. ({ a: 1, b: 2 }, 'b') => { a: 1 }
// rest parameter
function without(object, ...key) {
  // spread operator
  const newObject = { ...object };
  key.forEach((item) => {
    delete newObject[item];
  });
  return newObject;
  // delete object[key];
  // return object;
}
// console.log(without({ a: 1, b: 2 }, "b"));
// 4. { a: 1, b: 2 }, { a: 1, b: 2 } -> true
// 4. { a: 1, b: 2 }, { a: 1, b: 2, c: 3 } -> false
function isEqualObject(obj1, obj2) {
  // check keys length of two objects
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length !== objkey2.length) return false;
  // check values of two object
  // [a, b] -> object[a] || object[b]
  const result = objkey1.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1 }, { a: 3 }));
