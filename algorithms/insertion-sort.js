function insertionSort(arr) {
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    // i = 2
    const current = array[i]; // 4
    let j; // undefined
    // j: 2-1 = 1
    // array[j] = 3
    // 3 > 5
    // array[j] = 5 > current: 4
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      // array[2] = 5
    }
    array[j + 1] = current; // 5
  }
  return array;
}

let data = [3, 5, 4]; // [3, 4, 5]
console.log(insertionSort(data));
console.log("data", data);
// [3, 5, 4]
// [3, 5, 5]
// [3, 4, 5]
// Insertion sort: sắp xếp chèn
// [5, 3, 6, 1, 4]
// [3, 5, 6, 1, 4]
// [1, 3, 5, 6, 4]
// [1, 3, 4, 5, 6]
