// 방법1
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 방법2
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// =================================================================================
const loginForm = document.querySelector("#login-form");

function onLoiginBtnClick() {
  //   console.dir(loginInput.value);
  //   console.log("hello " + loginInput.value);
  //   console.log("click!");

  const username = loginInput.value;

  //   if (username === "") {
  //     alert("Please write your name");
  //   } else if (username.length > 15) {
  //     alert("Your name is too long.");
  //   }
  console.log(username);
}

// html의 이벤트를 기다리는 부분
// -> form태그 안에 input태그를 넣음으로써 사용x
//loginButton.addEventListener("click", onLoiginBtnClick);

const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  // * localStorage *
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

// loginForm.addEventListener("submit", onLoginSubmit);

// function handleLinkClick(event) {
//   event.preventDefault();
//   alert("click!");
// }
// link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
  greeting.innerText = `Hello  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
