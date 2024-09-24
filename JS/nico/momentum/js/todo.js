const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  //console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  // span, li 태그 생성
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

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

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

// window.addEventListener("load", function () {
//   toDoForm.addEventListener("submit", handleToDoSubmit);
// });
toDoForm.addEventListener("submit", handleToDoSubmit);
