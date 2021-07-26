// String, Number, Boolean
// String.prototype, Number.prototype
let str = "abc";
str.toUpperCase();

String.prototype.duplicate = function () {
  return this + this;
};
console.log(str.duplicate());

function Girl() {
  this.cook = function () {
    console.log("your girlfriend can cook");
  };
}
Girl.prototype.sing = function () {
  console.log("your girlfriend can sing");
};
Object.prototype.makeSandwich = function () {
  console.log("make sandwich");
};
let jane = new Girl();
jane.cook();
jane.sing();
jane.makeSandwich();
