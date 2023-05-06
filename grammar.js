// function
// alert("hi");

// #2.1 Basic Data Types
// 2가지 data type
// 1. 숫자(integer, float ...)
// 2. 문자(text: String)

// 콘솔에 log하기, 즉 출력하기
console.log(123)
// 작은 따옴표 상관없다
console.log("hi")

console.log(5+2);
console.log(5*2);
console.log(5/2);

// #2.2 Variables
// #2.3 const and let
// 한번에 바꾸기 > 변수로 만들어라
const a = 5;
const b = 2;
console.log(a+b);
console.log(a*b);
console.log(a/b);

let myName = "Sae Won";
console.log("hi " + myName);

myName = "Sewon";
console.log("your new name is " + myName);


// const와 let의 차이점
// const: 상수, 값이 바뀔 수 없다 let: 값을 업데이트 가능
// 기본적으로 const 사용. let은 값 업데이트할 때만. var은 사용x

// #2.4 Booleans
// true or false
const amIFat = null; // 존재하고 값이 주어졌으나 그 값이 "비어있음"
console.log(amIFat);
// null은 variable 안에 아무것도 없다는 것을 확실히 하기 위해 의도적으로 사용
// undefined는 값이
let something; // something 이라는 variable 존재하나 값x
console.log(something);

// #2.5 Arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hi", false, null, true, undefined, "Sae"];
// Get Item from Array
console.log(daysOfWeek);
// Add oen more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
const toBuy = ["rice", "ham", "carrot", "radish"];
toBuy.push("cucumber");
console.log(toBuy[12345]); // > undefined 출력

// #2.6 Objects
// const player = {
//     name: "Sae Won",
//     points: 10,
//     fat: true
// };
// console.log(player);

// player name에 접근하는 방법
// console.log(player["name"]);
// console.log(player.name);

// player.fat = false; // player 안의 property를 바꾸는 것은 문제x
// player.lastName = "potato"; // object에 추가하기
// player.points  += 15;
// console.log(player);

// #2.7 Functions part One
console.log("Hello my name is Sae Won");
console.log("Hello my name is Sae Jin");
console.log("Hello my name is Jong Hee");
console.log("Hello my name is Jae Chul");


function sayHello() {
    console.log("Hello my name is C");
}

// sayHello("Sae Won");
// sayHello("Sae Jin");
// sayHello("Jong Hee");
// sayHello("Jae Chul");

// #2.8 Functions part Two

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("Sae Won", 22);
sayHello("Sae Jin", 29);
sayHello("Jong Hee", 58);
sayHello("Jae Chul", 59);

function plus(a, b) {
    console.log(a + b);
}

plus(8, 60);
const player = {
    name: "Sae Won",
    sayHello: function(otherPersonsName){
        console.log("Hello! " + otherPersonsName + " Nice to meet you.");
    },
};

console.log(player.name);
player.sayHello("Nahyun");

// #2.9 & #2.10 Recap
// const calculator = {
//     plus: function (a, b) {
//         console.log(a + b);
//     },
//     minus: function (a, b) {
//         console.log(a - b);
//     },
//     times: function (a, b) {
//         console.log(a * b);
//     },
//     divide: function (a, b) {
//         console.log(a / b);
//     },
//     power: function (a, b) {
//         console.log(a ** b);
//     },
// }

// #2.11 Returns
// console.log()를 그만하자!
// const age = 96;
// function calculateKrAge (ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,10);
const timesResult = calculator.plus(10,minusResult);
const divideResult = calculator.plus(timesResult,plusResult);
const powerResult = calculator.plus(divideResult,minusResult);

console.log(plusResult);

// #2.13 Conditionals
const age = parseInt(prompt("How old are you?"));
// console.log(age);

// #2.14 Conditionals part Two
// console.log(isNaN(age));
// if (isNaN(age)) {
//     console.log("Please write a number.");
// } else {
//     console.log("Thank you for writing your age.")
// }

// #2.15 Conditionals part Three
if (isNaN(age) || age < 0) {
    console.log("Please write a number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} 

// #3.0 The Document Object