// let password = "123" + 1;

// console.log(password); // "1231"

let score = 123 + 1;

console.log(score); // 124

console.log(6 % 2); // % 나머지 // 1
console.log(1 % 2);

let password = 1;
password = password > 2;

let judge = password <= 2;

console.log(password); // false
console.log(judge); // true

console.log(a); // undefined
var a = 1;
console.log(a); // 1

console.log("for문");
for (var i = 1; i < 5; i++) {
  console.log(i); // 1 // 2 // 3 // 4
}
console.log(i); // 5

let fruits = ["banana", "apple", "mango", "grape"];

console.log(fruits); // ['banana', 'apple', 'mango', 'grape']
console.log(fruits[0]); // "banana"

fruits[0] = "orange";

console.log(fruits[0]); // "orange"

fruits.pop();

console.log(fruits); // ['orange', 'apple', 'mango']

fruits.push("pineapple");

console.log(fruits); // ['orange', 'apple', 'mango', 'pineapple']

console.log(fruits.includes("apple")); // true

console.log(fruits.includes("carrot")); // false

console.log(fruits.indexOf("mango")); // 2

// console.log(fruits.slice(2)); // ['mango', 'pineapple']

// console.log(fruits.slice(1, 3)); // ['apple', 'mango']

fruits.splice(2, 1);
console.log(fruits); // ['orange', 'apple', 'pineapple']
