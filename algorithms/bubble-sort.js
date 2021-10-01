function bubbleSort(array) {
  const arr = [...array]; // spread operator
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let num = arr[j];
      let next = arr[j + 1];
      if (num > next) {
        // const temp = arr[j + 1]; // temp: 4
        // arr[j + 1] = arr[j]; // next: 5
        // arr[j] = temp; // num: 4
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
const arr = [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999];
console.log(bubbleSort(arr));
console.log("arr", arr);
// bubble sort: sắp xếp nổi bọt
// [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999]
// [1,4,5,8, 3....]
// [1,4,5,3,8]
// [1,4,3,5,8]
// [1,3,4,5,8]
