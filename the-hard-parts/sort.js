const randomNumbers = [1, 10000, 999, 33, 50];
const sortedNumbers = randomNumbers.sort((a, b) => (a > b ? 0 : 1));
console.log("sortedNumbers:", sortedNumbers);
// value > 0 -> sắp xếp tăng dần
// value < 0 -> sắp xếp giảm dần
// value === 0 -> giữ nguyên
