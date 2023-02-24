// 변수 문제
/* 문제1. a와 b의 값을 바꾸시오 */
let a = 1;
let b = 2;

console.log(a, b); // 1 2

let temp;

temp = a;
a = b;
b = temp;

console.log(a, b); // 2 1

/* 문제2. 다음 연산자들의 결괏값을 예측한 후 console.log()를 통해 확인해 보시오 */
// 20 + 30 // 50
// “20” + “30” // "2030"
// “Hello” + " " + 2021 // "Hello 2021"
// 1 + 2 * 3 // 7
// (1 + 3) ** 2 // 16
// 1 / 0 // NaN // Infinity
// 6 % 2 // 0
// 7.5 % 2 // 1.5
// 5 == 5 // true
// 5 === 5 // true
// 5 == “5” // true
// 5 === “5” // false
// 5 != 5.0 // true // false
// 5 !== 5.0 // true // false
// “true” === true // false
// 5 <= 5.0 // true
// 5 >= 5 // true
// true || true // true
// true || false // true
// true && true // true
// true && false // false
// !true // false
// !false // true

console.log(
  "문제2. 다음 연산자들의 결괏값을 예측한 후 console.log()를 통해 확인해 보시오"
);

console.log(20 + 30);
console.log("20" + "30");
console.log("Hello" + " " + 2021);
console.log(1 + 2 * 3);
console.log((1 + 3) ** 2);
console.log(1 / 0);
console.log(6 % 2);
console.log(7.5 % 2);
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 5.0);
console.log(5 !== 5.0);
console.log("true" === true);
console.log(5 <= 5.0);
console.log(5 >= 5);
console.log(true || true);
console.log(true || false);
console.log(true && true);
console.log(true && false);
console.log(!true);
console.log(!false);
