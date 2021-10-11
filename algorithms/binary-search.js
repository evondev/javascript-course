// arr [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59]
// low = 0; high = arr.length - 1; value= 37
// mid = 23; value = 37 -> 37 > 23
// [29,31,37,41,43,47,53,59]
// value = 37; mid = 41 -> 41 > 37
// [29,31,37]
// mid = 31, value = 37
// value = 37 -> found
function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1; // 15-10
  while (low <= high) {
    // 8 < 15
    // 8 < 11
    // 9 < 11
    const midIndex = Math.floor((low + high) / 2); // 7-11-9-10
    const midValue = list[midIndex]; // 23-41-31-37
    if (midValue === item) return midIndex;

    if (midValue > item) {
      // 23 < 37
      // 41 > 37
      high = midIndex - 1;
    } else {
      // 31 < 37
      low = midIndex + 1; // 8-9
    }
  }
  return null;
}
console.log(
  binarySearch([1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 37)
);
