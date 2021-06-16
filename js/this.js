// `this` keyword
// references
// new Array()
// new Boolean()
// new Object()
// built-in
// bind call apply
//  Global context
// console.log(this);
// function sayHello() {
//   console.log("abc");
// }
// sayHello();
// Object method
// từ khoá `this` sẽ đề cập tới object gần nhất
const student = {
  name: "evondev",
  age: 27,
  sayHi: function () {
    console.log(
      `My name is ${this.name} and this year i am ${this.age} years old`
    );
  },
  goodBye: () => {
    return {};
  },
};
student.sayHi(); //
student.goodBye();
// Arrow function
// () =>
