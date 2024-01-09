// OR
// 이름이 TOM이거나, 성인이면 통과

const name = "Tom";
const age = 30;

if (name === "Tom" || age > 19) {
  console.log("통과");
}

// AND
// 이름이 Mike이고, 성인이면 통과

const name = "Mike";
const age = 30;

if (name === "Tom" && age > 19) {
  console.log("통과");
} else {
  console.log("돌아가.");
}

// NOT
// 나이를 입력받아 성인 아니면 돌아가라고...

const age = prompt("나이가...?");
const isAdult = age > 19;

if (!isAdult) {
  console.log("돌아가");
}

// 우선순위
// 남자이고, 이름이 Mike이거나 성인이면 통과
// 1차 조건 남자인 것을 충족하고 나서 2차 조건 이름이 Mike 혹은 성인인 것을 충족하면 통과인 것을 의도

const gender = "F";
const name = "Jane";
const isAdult = true;

if ((gender === "M" && name === "Mike") || isAdult) {
  console.log("통과");
} else {
  console.log("돌아가");
}
