const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// array
let toDos = [];
const TODOS_KEY = "todos";

// localstorage저장부
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // Arrays to string
}

// todo 삭제부
function deleteToDo(event) {
  //console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  //console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 로컬 스토리지 삭제
  li.remove();
  saveToDos();
}

// ul태그 안에 주입
function paintToDo(newTodoObj) {
  // span, li 태그 생성
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  // delete버튼
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);

  // li태그 내부에 주입
  li.appendChild(span);
  li.appendChild(deleteButton);

  // todo-list안에주입
  toDoList.appendChild(li);
}

// form 전송부
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  // 로컬스토리지 세팅
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);

  saveToDos();
}

// window.addEventListener("load", function () {
//   toDoForm.addEventListener("submit", handleToDoSubmit);
// });
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 로컬스토리지에 저장된게 있으면 화면에 표시
if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  // console.log(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
  // parseToDos.array.forEach((item) => {});
}
