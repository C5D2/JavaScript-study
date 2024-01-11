// 화살표 함수(arrow function)

let add = function (num1, num2) {
  return num1 + num2;
};

let add = (num1, num2) => {
  num1 + num2;
};

let add = (num1, num2) => num1 + num2;

let sayHello = (name) => `Hello, ${name}`;

let showError = () => {
  alert("error!");
};

let add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};

// 함수 표현식
showError();

function showError() {
  console.log("error");
}

// 화살표 함수
showError();

let showError = () => {
  console.log("error");
};

const sayHello = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
};

const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};

const add = (num1, num2) => (
    num1 + num2;
);

 const add = (num1, num2) => num1 + num2;
