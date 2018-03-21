taskList = ['Eat Breakfast', 'Read Book', 'Do Javascript learning', 'Do C++ learning'];

function displayToDos() {
  console.log("ToDos: ", taskList);
}

function addToDo(newItem) {
  taskList.push(newItem);
  displayToDos();
}

function changeToDo(index, newItem) {
  taskList[index] = newItem;
  displayToDos();
}

function deleteToDo(index) {
  taskList.splice(index,1);
  displayToDos();
}
