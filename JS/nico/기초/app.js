// =========================================================================

// 2.1 Basic Data Types
// 2.2 Variables
// 2.3 Const and Let

// // const = 상수 -> 값이 변하지 않음
// // let-> 업데이트 가능
// const a = 5;
// const b = 2;
// const myName = "ggundeok";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "jh";

// // const는 상수이기때문에 콘솔 에러
// console.log(myName);

// =========================================================================

// 2.4 Booleans

// const bool = true;
// const isNull = null;

// console.log(bool);
// console.log(isNull);

// // undefined -> 아직 정의되지 않음
// let something;
// console.log(something);

// ========================================================

// 2.5 Arrays

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// // 배열 선언
// const daysOfWeek = [mon, tue, wed, thu, fri, sat];
// console.log(daysOfWeek);

// // 변수 접근
// console.log(daysOfWeek[0]);

// // 변수 추가
// daysOfWeek.push(sun);
// console.log(daysOfWeek[6]);

// ========================================================

// 2.6 Object

// const playerName = "ggundeok";
// const playerPoints = 121212;
// const playerPower = 15;

// const player = {
//   name: "ggundeok",
//   points: 121212,
//   power: 15,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["points"]);
// console.log(player.power);

// // 변수추가
// player.fat = true;
// console.log(player);

// ========================================================

// 2.7 2.8 Function

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("jh", 29);
// sayHello("yr", 19);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }

// plus(8, 60);

// // 함수를 object 인자로
// const player = {
//   name: "jh",
//   sayHello: function (otherPersonsName) {
//     console.log("Hello my name is " + otherPersonsName);
//   },
// };

// console.log(player.name);
// player.sayHello("yr");
// player.sayHello("1");
// player.sayHello("2");

// ========================================================

// 2.11 Returns

// const age = 96;

// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// ========================================================

// 2.13 Conditionsals

const age = prompt("How old are you?");

console.log(age);
console.log(typeof age);

console.log(parseInt(age));

const newAge = parseInt(prompt("How old are you?"));

console.log(newAge);

if (isNaN(newAge)) {
  console.log("Please write a number");
} else {
  console.log("Good");
}
