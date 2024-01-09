// for 반복문
// 1부터 10까지 로그

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

for (let i = 1; i < 11; i++) {
  console.log(i);
}

//while 반복문
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// do while 반복문
// break
while (true) {
  let answer = confirm("계속 할까요?");
  if (!answer) {
    break;
  }
}

// continue
// 짝수만
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// 명확한 횟수가 정해져 있으면 for문을, 그게 아니라면 while문을 많이 사용한다고 함
