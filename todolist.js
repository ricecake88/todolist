
var taskList = {
  tasks: ['Eat Breakfast', 'Cleaning', "Read a Book", "Code Javascript", "Code C++"],

  /* Display the list of Tasks in the ToDo List */
  displayToDos: function() {
    console.log("ToDos: ", this.tasks);
  },

  /* Add a new task to your Task List and print out the new List */
  addToDos: function(newItem) {
    this.tasks.push(newItem);
    this.displayToDos();
  },

  /* Change an existing Task List and print ouf the modified List */
  changeToDo: function(index, newItem) {
    this.tasks[index] = newItem;
    this.displayToDos();
  },

  /* Delete an item from the Task List and display the modified List */
  deleteToDo: function(index) {
    this.tasks.splice(index,1);
    this.displayToDos();
  }

};
