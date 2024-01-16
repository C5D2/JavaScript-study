// 예제 3 : 주어진 배열의 순서를 거꾸로 뒤집는 함수를 작성하세요.
// 테스트
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log("뒤집힌 배열:", reversedArray);

// 첫 번째 방법(for문)
// function reverseArray(arr) {
//   let reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log("뒤집힌 배열:", reversedArray);

// 두 번째 방법(sort 메서드 내림차순)
// function reverseArray(originalArray) {
//   let reversedArray = originalArray.sort((a, b) => b - a);
//   return reversedArray;
// }

// let originalArray = [1, 2, 3, 4, 5];
// console.log("뒤집힌 배열:", reverseArray(originalArray));

// 세 번째 방법(reverse 메서드)
function reverseArray(arr) {
  let reverseArray = [...arr];
  return reverseArray.reverse();
}

function twiceArray(arr) {
  return arr.map((num) => num * 2);
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
const doubleArray = twiceArray(reversedArray);
console.log("뒤집힌 배열:", reversedArray);
console.log("두 배의 배열:", doubleArray);
