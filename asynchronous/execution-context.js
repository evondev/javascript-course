let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y); // 100
//- Global execution context
// the creation phase
/**
 * Global object: window
 * this: window
 * x: undefined
 * timesTen: function(){}
 * y: undefined
 */
// the execution phase
/**
 * Global object: window
 * this: window
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x) -> 100
 */
//- Function execution context
// creation phase
/**
 * Global object: arguments
 * this: window
 * a: undefined
 */
// execution phase
/**
 * Global object: arguments
 * this: window
 * a: 10
 */
