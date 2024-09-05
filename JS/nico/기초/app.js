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

// const age = prompt("How old are you?");

// console.log(age);
// console.log(typeof age);

// console.log(parseInt(age));

// const newAge = parseInt(prompt("How old are you?"));

// console.log(newAge);

// if (isNaN(newAge)) {
//   console.log("Please write a number");
// } else {
//   console.log("Good");
// }

// ========================================================

// 3.1 HTML in Javascript
// 3.2 Searching For Elements

// const title = document.getElementById("title");
// const hellos = document.getElementsByClassName("hello");
// const title = document.getElementsByTagName("h1");

// css처럼 사용 가능
// const title = document.querySelector(".hello h1");

// const fTitle = document.querySelector(".hello:first-child h1");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// title.style.color = "blue";

// ========================================================

// 3.3 3.4 3.5 Event

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   console.log("title was clicked");
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }

// // event 리스너 설정

// // 방법1
// // h1.addEventListener("click", handleTitleClick);

// // 방법2
// h1.onclick = handleTitleClick;

// // title.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// window.addEventListener("resize", handleWindowResize);

// function handleWindowCopy() {
//   alert("copier!");
// }
// window.addEventListener("copy", handleWindowCopy);

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }
// function handleWindowOnline() {
//   alert("ALL GOOD");
// }

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// ========================================================

// 3.6 CSS in Javascript

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;

//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }

//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// 3.7

const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   const className = h1.classList;

//   if (className.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// 위 코드와 동일
function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
