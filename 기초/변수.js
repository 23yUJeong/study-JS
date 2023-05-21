// 변수
nickname = "Mike";
age = 30;

// ❌ alert(nickname); // 경고 창을 띄워줌
console.log(age); // 30

/* 하지만 위와 같이 변수를 사용하는 것은 매우 위험함 */
grade = 1;
grade = 2;
console.log(grade); // 2

// let & const
// ❌ let grade = 1;
// let grade = 2; // 오류 발생

// 1. let
// ❌ let nickname = "YJ";
nickname = "DY";
console.log(nickname); // "DY"
// 2. const
const birthDay = "2006-10-18";
// birthDay = "2023-05-19"; // 오류 발생
