const inputBox = document.getElementById("inputBox");
const inputButton = document.getElementById("inputButton");
const allTodos = document.getElementById("all-todo-list");

const todoList = [];

const showResult = () => {
  allTodos.textContent = "";
  const listElements = document.createElement("ul");
  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    listElement.innerText = item;
    listElements.appendChild(listElement);
  });
  allTodos.appendChild(listElements);
};

inputButton.addEventListener("click", () => {
  const inputText = inputBox.value;
  todoList.push(inputText);
  showResult();
});
