Object;

const superman = {
  name: "clark",
  age: 33,
  fly: function () {
    console.log("날아갑니다.");
  },
};
superman.fly(); // 날아갑니다.

const superman = {
  name: "clark",
  age: 33,
  fly() {
    console.log("날아갑니다.");
  },
};

// const user = {
//   name: "Mike",
//   sayHello: function () {
//     console.log(`Hello, I'm`${user.name}`);
//   },
// };
// 문제 발생할 수 있음 this를 이용해서

// const user = {
//     name: "Mike",
//     sayHello: function () {
//       console.log(`Hello, I'm`${this.name}`);
//     },
//   };
//   하자!

let boy = {
  name: "Mike",
};
let girl = {
  name: "Jane",
};

sayHello : function(){
    console.log(`Hello, I'm ${this.name}`);
}
// 결과
boy.sayHello();//I'm Mike
girl.sayHello();//I'm Jane

//만약 화살표 함수를 사용했다면?
sayHello : () => {
    console.log(`Hello, I'm ${this.name}`);}

// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴

let boy = {
    name: "Mike",
    sayHello: () => {
      console.log(this); // 전역객체 브라우저환경에선 window, 노드 js에선 global
    },  
}

boy.sayHello();
this != boy

// method

let boy = {
    name: "Mike",
    showName: function () {
        console.log(boy.name)
    } 
};
 // "Mike" 출력


let man = boy;
man.name = "Tom"

console.log(boy.name); 
// "Tom" 출력

let boy = {
    name: "Mike",
    showName: function () {
        console.log(boy.name)
    } 
};

let man = boy;
man.showName();
// "Mike" 출력

let boy = {
    name: "Mike",
    showName: function () {
        console.log(boy.name)
    } 
};

let man = boy;
boy = null;

man.showName();
// boy는 null, name, showName은 다 사라져서 동작 불가

let boy = {
    name: "Mike",
    showName: function () {
        console.log(this.name)
    } 
};

let man = boy;
boy = null;

man.showName();
// "Mike" 출력

let boy = {
    name: "Mike",
    sayThis : function() {
        console.log(this)
    },
};

boy.sayThis();
// Object {
//   "name": "Mike",
//   "sayThis": function () {\n    console.log(this);\n  }
// } 출력

let boy = {
    name: "Mike",
    sayThis : () => {
        console.log(this)
    },
};

boy.sayThis();
// window 출력

