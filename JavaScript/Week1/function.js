// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }

// sayHello(Mike);

// 함수 작성

// function showError() {
//   alert("에러가 발생했습니다. 다시 시도해주세요.");
// }

// showError();

// 함수 작성
// 매개변수가 있는 함수 1

// function sayHello(name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// }

// sayHello("Mike");
// sayHello("Tom");
// sayHello("Jane");

// sayHello();

// 2
// function sayHello(name) {
//   const msg = `Hello`;
//   if (name) {
//     msg = `Hello, ${name}`;
//   }
//   console.log(msg);
// }

// sayHello();

// 3
// function sayHello(name) {
//   let msg = "hello";
//   if (name) {
//     mag += ", " + name;
//   }
//   console.log(msg);
// }

// sayHello();
// sayHello("Mike");

// 4
// function sayHello(name) {
//   let msg = "hello";
//   if (name) {
//     msg += `, ${name}`;
//   }
//   console.log(msg);
// }

// sayHello();
// sayHello("Mike");
// console.log(msg);

// 5
let msg = "hello";
console.log("함수 호출 전");
console.log(msg);

function sayHello(name) {
  if (name) {
    msg += `, ${name}`;
  }
  console.log("함수 내부");
  // 지역 변수(local variable)
  console.log(msg);
}

sayHello("Mike");
console.log("함수 호출 후");
console.log(msg);

// 전역 변수와 지역 변수
let msg = "welcome";

function sayHello(name) {
  let msg = "hello";
  console.log(msg + " " + name);
}

sayHello("Mike");
console.log(msg);

// 전역 변수와 지역 변수2

let name = "Mike";

function sayHello(name) {
  console.log(name);
}

sayHello();
sayHello("Jane");

// OR

// function sayHello(name) {
//   let newName = name || "friend";
//   let msg = `Hello, ${newName}`;
//   console.log(msg);
// }

// sayHello();
// sayHello("Jane");

// default value

// function sayHello(name = "friend") {
//   let msg = `Hello, ${name}`;
//   console.log(msg);
// }

// return으로 값 반환

// function add(num1, num2) {
//   return num1 + num2;
// }

// const result = add(2, 3);
// console.log(result);

// return으로 값 반환2
// function showError() {
//   return "에러가 발생했습니다.";
// }
// const result = showError();

// console.log(result);

// function showError() {
//   alert("에러가 발생했습니다.");
//   return;
//   alert("이 코드는 절대 실행되지 않습니다.");
// }
// const result = showError();
// console.log(result);

// 함수(function)
// - 한번에 한작업에 집중
// - 읽기 쉬고 어떤 동작인지 알 수 있게 네이밍
// showError // 에러를 보여줌
// getName // 이름을 얻어옴
// createUserData // 유저 데이터 생성
// checkLogin // 로그인 여부 체크
