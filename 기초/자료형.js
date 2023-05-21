// 1. 숫자형 Number
const age = 17;
const pi = 3.14; // 소수점 표현도 가능

/* 사칙연산 */
console.log(1 + 2); // + 더하기 // 3
console.log(10 - 3); // - 빼기 // 7
console.log(3 * 2); // * 곱하기 // 6
console.log(6 / 3); // / 나누기 // 2
console.log(6 % 4); // % 나머지 // 2

/* Infinity & NaN */
// 1-1. Infinity : 무한대를 얻을 수 있음
const x = 1 / 0;
console.log(x); // Infinity

// 1-2. NaN : Not a number
const nickname = "Jone";
const y = nickname / 2;
console.log(y); // NaN

// 2. 문자형 String
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

/* "(큰따옴표)와 '(작은따옴표)는 큰 차이는 없음 */
const message1 = "I'm a girl."; // 작은따옴표를 사용해야 되는 상황이 오면 큰따옴표로 감싸주는 게 좋음
const message2 = "I'm a girl."; // 작은따옴표만 사용해서 표현하고 싶다면 \(역슬래쉬)를 앞에 써주면 특수문자로 인식

const message3 = `My name is ${name1}.`; // 문자열 내부에 변수를 표현해 줄 때 사용
const message4 = `나는 ${10 + 7}살입니다.`; // 변수 대신 표현식도 사용 가능

// 3. 논리형 Boolean
const a = true; // 참
const b = false; // 거짓

console.log(name1 == "Mike"); // true
console.log(age > 20); // false

// 4. Null & Undefined
/* 4-1. null */
let user = null; // user는 존재하지 않음

/* 4-2. undefined */
let height;
console.log(height); // undefined

// typeof 연산자
console.log(typeof 3); // "number"
console.log(typeof name1); // "string"
console.log(typeof true); // "boolean"
console.log(typeof "abcd"); // "string"
console.log(typeof null); // null != 객체 // "object"
console.log(typeof undefined); // "undefined"

// 그 외에 알면 좋은 것들
/* 일반 따옴표를 사용하면 변수명이 그대로 노출됨 */
const grade = "1학년";
console.log(`나는 ${grade}입니다.`); // "나는 1학년입니다."
console.log("나는 ${grade}입니다."); // "나는 ${grade}입니다."

/* 문자형 + 문자형 = 문자형 & 숫자형 + 문자형 = 문자형 */
const first = "나는 ";
const last = "입니다.";

console.log(first + name1 + last); // "나는 Mike입니다."

console.log(first + age + "살" + last); // "나는 17살입니다."
