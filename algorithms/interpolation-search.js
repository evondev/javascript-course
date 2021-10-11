function interpolationSearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const midIndex =
      low +
      Math.floor(
        ((high - low) * (item - list[low])) / (list[high] - list[low])
      );
    const midValue = list[midIndex];
    if (midValue === item) return midIndex;

    if (midValue > item) {
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }
  return null;
}
console.log(
  interpolationSearch(
    [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59],
    37
  )
);
// https://medium.com/@smellycode/demystifying-interpolation-formula-for-interpolation-search-211780c43269
