// alert : 알려줌
// prompt : 입력받음
// confirm : 확인받음

// 1. alert()
alert("이름을 입력해 주세요.");

// 2. prompt()
const user = prompt("이름을 입력해 주세요.");
alert(`안녕하세요, ${user}님. 환영합니다.`);

/* 기본값 설정하기 */
const date = prompt("예약 일을 입력해 주세요.", "2023-05-");

// 3. confirm()
const isAdult = confirm("당신은 성인입니까?");

if (isAdult === true) {
  alert("성공적으로 해당 사이트에 들어갔습니다.");
} else {
  alert("미성년자는 해당 사이트에 들어갈 수 없습니다.");
}
