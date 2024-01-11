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

const user = {
  name: "Mike",
  sayHello: function () {
    console.log(`Hello, I'm`${user.name}`);
  },
};
