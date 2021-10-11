function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i; // 0
    // j: 1
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; // 1 3 -> 3
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
console.log(selectionSort([5, 3, 4, 1, 2]));
// Sắp xếp chèn: Selection sort
// [5,3,4,1,2]
// min = 5; 5 3 4 1 2
// sorted array: 1 | unsorted array: 3 4 5 2
// sorted array: 1 2 | unsorted array: 4 5 3
// sorted array: 1 2 3 | unsorted array: 5 4
// sorted array: 1 2 3 4 | unsorted array: 5
// sorted array: 1 2 3 4 5 | unsorted array []
// [1, 2, 3, 4, 5]
