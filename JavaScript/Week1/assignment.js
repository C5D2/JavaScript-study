// 1. 구구단 출력기 만들기: 사용자가 입력한 숫자에 대한 구구단을 출력하는 프로그램 사용자가 숫자를 입력하면 해당 숫자의 구구단이 출력되어야 합니다.

// 2. 사용자한테 숫자를 prompt 로 입력 받아 그 숫자가 짝수인지 홀수인지 판별하는 프로그램

// 쉬운거

// 3. 두 숫자를 prompt로 입력받아 사칙연산 하는 프로그램+ , - , * , /

// 4.사용자에게 이름을 입력 받아 출력하는 프로그램

// 5. 조건문을 사용하여 숫자의 부호를 판별하는 간단한 프로그램

// 1. 구구단 출력기 만들기: 사용자가 입력한 숫자에 대한 구구단을 출력하는 프로그램 사용자가 숫자를 입력하면 해당 숫자의 구구단이 출력되어야 합니다.
// const number = prompt("숫자를 입력해주세요");
// for (let i = 1; i < 10; i++) {
//   console.log(`${number}*${i}=${number * i}`);
// }

// 2. 사용자한테 숫자를 prompt 로 입력 받아 그 숫자가 짝수인지 홀수인지 판별하는 프로그램
// const number = prompt("숫자를 입력해주세요.");
// if (number % 2 === 0) {
//   console.log("짝수입니다.");
// } else {
//   console.log("홀수입니다.");
// }

const number = prompt("숫자를 입력해주세요.");
if (number % 2) {
  console.log("홀수입니다.");
} else {
  console.log("짝수입니다.");
}
// i를 2로 나눈 나머지가 0이 아니라면(i가 홀수라면) = if (number % 2)
