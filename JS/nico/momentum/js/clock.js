const clock = document.querySelector("h2#clock");

// interval과 timeout
// function sayHello() {
//   console.log("hello");
// }

// 실시간 관련 함수 - setInterval(함수, ms)
// ms마다 실행
//setInterval(sayHello, 5000);

// 한번만 실행 - setTimeout(함수, ms)
// ms후에 실행
//setTimeout(sayHello, 5000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(getClock, 1000);
