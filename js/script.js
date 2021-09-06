const inputBox = document.getElementById("inputBox");
const inputButton = document.getElementById("inputButton");
const allTodos = document.getElementById("all-todo-list");

const todoList = [];

const deleteTodo = (element) => {
  const item = element.target;
  const itemIndex = parseInt(item.getAttribute("data-list-index"));
  todoList.splice(itemIndex, 1);
  showResult();
};

const showResult = () => {
  allTodos.innerHTML = "";
  const listElements = document.createElement("ol");
  todoList.forEach((item, index) => {
    const listElement = document.createElement("li");
    listElement.innerText = item;
    listElement.setAttribute("data-list-index", index);
    listElements.appendChild(listElement);
  });
  allTodos.appendChild(listElements);
  listElements.addEventListener("click", deleteTodo);
};

inputButton.addEventListener("click", () => {
  const inputText = inputBox.value;
  if (!inputText) {
    return alert("please enter some text");
  }
  inputBox.value = "";
  todoList.push(inputText);
  showResult();
});
