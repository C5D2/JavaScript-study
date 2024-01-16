// 배열: 순서가 있는 리스트
// 배열은 문자뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음

let arr = [
  "민수",
  3,
  false,
  {
    name: "Mike",
    age: 30,
  },
  function () {
    console.log("TEST");
  },
];

// length: 배열의 길이
students.length; // 30

// push(): 배열 끝에 추가
let days = ["월", "화", "수"];
days.push("목");
console.log(days); // ["월", "화", "수", "목"]

// pop(): 배열 끝 요소 삭제
let days = ["월", "화", "수"];
days.pop();
console.log(days); //["월", "화"]

//shift, unshift 배열 앞에 제거/추가
// 추가
days.unshift("일");
console.log(days); // ["일", "월", "화", "수"];

// 제거
days.shift();
console.log(days); // ["월", "화", "수"];

// 반복문:for
let days = ["월", "화", "수"];

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
// "월" "화" "수" 돌아가면서 출력

// 반복문: for ... of
let days = ["월", "화", "수"];

for (let day of days) {
  console.log(day);
}
// "월" "화" "수" 돌아가면서 출력, for문 보다는 간단하지만 index를 못 얻음

// array
let days = ["mon", "tue", "wed"];
console.log(days[1]);
// "tue" 출력

let days = ["mon", "tue", "wed"];
days[1] = "화요일";
console.log(days);
// ["mon", "화요일", "wed"] 출력

let days = ["mon", "tue", "wed"];
days[1] = "화요일";
console.log(days.length);
// 3 출력

let days = ["mon", "tue", "wed"];
days.push("thu");
console.log(days);
// ["mon", "tue", "wed", "thu"] 출력

let days = ["mon", "tue", "wed"];
days.push("thu");
days.unshift("sun");
console.log(days);
// ["sun", "mon", "tue", "wed", "thu"] 출력

let days = ["mon", "tue", "wed"];
days.push("thu");
days.unshift("sun");
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
// "sun" "mon" "tue" "wed" "thu" 출력

let days = ["mon", "tue", "wed"];
days.push("thu");
days.unshift("sun");
for (let day of days) {
  console.log(day);
}
// "sun" "mon" "tue" "wed" "thu" 출력
// day는 배열의 요소이기 때문에 아무거나 써도 됨
