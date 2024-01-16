object - 접근, 추가, 삭제;

const superman = {
  name: "clark",
  age: 33,
};

접근;
superman.name; // 'clark'
superman["age"]; // 33
// 첫 번째 방법을 많이 쓰는 것으로

추가;
superman.gender = "male";
superman["hairColor"] = "black";

삭제;
delete superman.hairColor;


object-단축 프로퍼티
const name = "clark";
const age = 33;

const superman = {
    name: name,
    age: age,
    gender: "male",
}

object-프로퍼티 존재 여부 확인
const superman = {
    name: "clark",
    age: 33,
}

superman.birthday;
// undefined

"birthDay" in superman;
// false

"age" in superman;
// true

//for ...in 반복문
// 객체

const superman = {
    name: "clark",
    age: 30,
}

console.log(superman.name);
console.log(superman["age"]);

console.log(superman);

superman.hairColor = "black";
superman["hobby"] = "football";
console.log(superman);

delete superman.age;
console.log(superman);

// 객체2

function makeObject(name, age){
    return{
        name,// name: name,
        age, // age: age,
        hobby: "football",
    };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike);
console.log("birthday" in Mike);

// 객체 in
function isAdult(user){
    if(user.age < 20){
        return false;
    } else {
        return true;
    }
};

const Mike = {
    name : "Mike",
    age: 30
};

const Jane = {
    name: "Jane",
};

console.log(isAdult(Jane))


function isAdult(user){
    if(!("age" in user) || // user에 age가 없거나
    user.age < 20){  // 20살 미만이거나
        return false;
    } else {
        return true;
    }
};

const Mike = {
    name : "Mike",
    age: 30
};

const Jane = {
    name: "Jane",
};

console.log(isAdult(Jane))

// 객체 for ...in

const Mike = {
    name: "Mike",
    age: 30};

    for(x in Mike){
        console.log(Mike[x]);// Mike["age"]
    }