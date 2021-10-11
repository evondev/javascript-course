// quick sort: Sắp xếp nhanh
// arr = [3,7,9,0,1,5,4,2]
// pivot arr[0]
// 0 1 2 pivot 7 9 5 4
// pivot: 0
// pivot 1 2
// pivot: 1
// 2
// 0 1 2
// 7 9 5 4
// pivot: 7
// 5 4 pivot(7) 9
// pivot: 5
// 4 pivot(5)
// 4 5 7 9
// 0 1 2 pivot(3) 4 5 7 9
/**
 *
 *
 */
function quickSort(arr) {
  const list = [...arr];
  if (list.length < 2) return list;
  const pivot = list[0];
  const smaller = list.filter((item) => item < pivot);
  const bigger = list.filter((item) => item > pivot);
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
const array = [3, 7, 9, 0, 1, 5, 4, 2];
// const sortedArray = [...array].sort((a, b) => a - b);
console.log(sortedArray);
console.log(quickSort(array));
