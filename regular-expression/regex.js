// Regular expression: Biểu thức chính quy
// 1. 2 cách khai báo với Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
// regex.test(value) -> true or false
console.log(re1.test("hello world hello"));

// 2. Anchor ^ $
// ^ string bắt đầu với từ nào ddos
// $ string kết thúc với từ nào ddos
/hi/.test("hi"); // true
/hi$/.test("welcome to hi"); // true
/hi$/.test("welcome to hello"); // false
/^hi/.test("hi welcome to hi"); // true
/^hi/.test("welcome to hi"); // false

// 3. ranges []
// [a-z]: các kí tự từ a đến z in thường
// [A-Z]: các kí tự từ A đến Z in HOA
// [0-9]: các số từ 0-9
// [a-z0-9A-Z]: các số từ 0-9 hoặc từ a -> z hoặc từ A->Z
/[a-z]/.test("aadfs"); // true
/[a-z]/.test("A"); // false
/[A-Z]/.test("Z"); // true
/[A-Z]/.test("x"); // false
/[0-9]/.test("10000"); // true
/[0-9]/.test("abc10000xyz"); // true
/[0-9]/.test("abc"); // false
/[a-zA-Z0-9]/.test("123abcAbc"); // true
/[^a-z]/.test("a"); // false

// 4. Meta characters
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d tương đương với [^0-9]
/\D/.test("123"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại \w nó sẽ tương đương [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các kí tự khoảng trắng: spaces, tab, newline
/\s/.test(" "); // true
// \S: các kí tự không phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp với newline( xuống hàng )
// \t: khớp với lại tab character
// .: khớp với tất cả mọi thứ ngoại trừ newline(\n)
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n)

// 5.Quantifiers: {n} {n,m} + ? *
// string.match(regex) "abc".match(/\w/) -> []
// {n}: số lượng nhất định
// {n,m}: Số lượng trong khoảng từ n tới m
// +: Lấy 1 hoặc nhiều kí tự thoả điều kiện
const str1 = "Welcome to 202122243564645645";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour?";
// ?: có thể có hoặc không có kí tự nào đó
console.log(str2.match(/colou?r/g)); // ["color", "colour"]
// flag
// g: global
// i: case insensitive
// m: multipe lines
// *: không có hoặc là nhiều
const str3 = "";
console.log(str3.match(/\d?/g));
// 6. groups ()
/(\d{3})?(\w+)/.test("123"); // true
// 7. Escaping \ / [ ] ( ) { } ? + * | . ^ $
// 8. Boundaries \b \B
/\?/.test("?");
/\*/.test("*");
// \b
"my name is evondev".match(/\bevondev/g); //["evondev"]
// \B
"my name isevondev".match(/\Bevondev/g);
// 9.
const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "evondev")); // evondev welcome hello to my hello
// string.replace(regex, value);
str4.replace(/hello/g, "evondev");
"welcome 1234567".match(/\d+/g);
