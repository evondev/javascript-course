// 1. Big O Notation
// O(1): [].push(item): best
// O(n): for: Good
// O(logn): for([].push(item)): OK
// O(n^2): nested loop for(for): Bad
// O(n!): 6! = 6*5*4*3*2*1: Terrible
// function factorial(n) {
//   let num = n;
//   for (let index = 0; index < n; index++) {
//     num = factorial(n - 1);
//   }
//   return;
// }
// Sort and search
