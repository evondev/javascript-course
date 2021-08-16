// ES6
// Constructor/protype way
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// }
// const evondev = new Person("Evondev");
// evondev.getName();
// Class
class Person2 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  // getName() {
  //   return this.name;
  // }
  set name(newName) {
    return (this._name = newName);
  }

  static checkGender(gender) {
    let name = gender === "male" ? "John" : "Anna";
    return (this._name = name);
  }

  // setName(newName) {
  //   this.name = newName;
  // }
}
// const tuan = new Person2("tuan");
// instance
Person2.checkGender("female");
console.log("Person2", Person2.name);

// console.log(tuan.name);
// tuan.name = "Evondev";
// console.log(tuan.name);
// Class expression
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("Evondev");
console.log(evon.name);
function company(aClass) {
  return new aClass();
}

let hello = company(
  class {
    sayHello() {
      console.log("Hello");
    }
  }
);
hello.sayHello();
// Static method
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 0, 1)),
  new Article("JS", new Date(2021, 11, 1)),
];
// const b = new Article("JS", new Date(2021, 11, 1)),
// b.compare
// articles.sort((a, b)=> a.date - b.date)
// className.methodName
articles.sort(Article.compare);
console.log(articles[0].title);
// const a = new Article
// a.compare
// Static properties
class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
    // this.constructor.propertyName
  }
  static count = 0;
  static getCount() {
    // className.propertyName
    return Item.count;
  }
}
const pencil = new Item("Pencil");
const laptop = new Item("Laptop");
console.log(Item.getCount());
// Super and extends
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`walking on ${this.legs} legs`);
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("I can flying");
  }
}

let bird = new Bird(2);
console.log(bird.fly());
console.log(bird.walking());
