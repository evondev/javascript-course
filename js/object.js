// Cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log("hello evondev");
  },
};
// properties
// method
// 2 cách truy xuất giá trị của object
// 2.1 Dot notation object.key
console.log(student.name);
// student.last - name;
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// Thay đổi giá trị của Object
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function () {
  console.log("hello");
};
// is-developer
// isDeveloper
console.log(student);
// Cách xoá giá trị trong Object
delete student["last-name"];
// for in
for (let key in student) {
  if (key === "name") {
    console.log("hello name");
  }
  const value = student[key];
  console.log(`${key}:${value}`);
}
// Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// Object.values(object) -> trả về 1 mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values);
// Object.entries(object) -> trả về 1 mảng nested [["name", "evondev"], ["age", 20]] gồm có key và value
const entries = Object.entries(student);
console.log(entries);
// Object.assign()
const a = {
  firstName: "tuan",
};
const b = {
  lastName: "tran",
};
const c = Object.assign(a, b);
console.log(c);
const d = { ...a, ...b };
console.log(d);
// ...
// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);
// Object.seal(object) -> cho phép chỉnh sửa key value nhưng không được thêm key value mới
const user = {
  userName: "evondev",
  school: {
    name: "Cao Thang",
    room: {
      name: "IT",
    },
  },
};
// const newUser = Object.seal(user);
// newUser.userName = "tran anh tuan";
// newUser.lastName = "john";
// console.log(newUser);
// [...array] {...object}
// spread operator to copy object
const newUser = { ...user };
newUser.userName = "trananhtuan";
// console.log(user);
// Object.assign
console.log(newUser);
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// clone nested object
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log("New User3");
console.log(newUser3);
// this keyword
// this nó sẽ đề cập tới object gần nhất
const student2 = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  },
  // fullname: {
  //   name: "Tran Anh Tuan",
  // },
};
student2.hi();
// optional chaining
console.log(student2.fullname); // undefined
//console.log(student2.fullname.name); // undefined.name -> Cannot read property 'name' of undefined
if (student2.fullname) {
  if (student2.fullname.name) {
    console.log(student2.fullname.name);
  }
}
// student2.fullname?.name
console.log(student2.fullname?.name);
// destructuring object
const { name, age, male, ...rest } = student2;
console.log(rest);
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// NORMAL Function
// function whatYourInfo(name, age, school) {
//   console.log(name, age, school);
// }
// whatYourInfo("evondev", 27, "Cao Thang");
// whatYourInfo(27, "Cao Thang", "evondev");
// function with object paremeter
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  school: "Cao Thang",
  age: 27,
  name: "evondev",
};
whatYourInfo(newObj);
// object destructuring parameter
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo2({
  school: "Cao Thang",
  age: 28,
  name: "Tuan",
});
