
var taskList = {
  //tasks: ['Eat Breakfast', 'Cleaning', "Read a Book", "Code Javascript", "Code C++"],
  tasks: [],

  // Display the list of Tasks in the ToDo List
  displayToDos: function() {
    if (this.tasks.length === 0) {
      console.log("The taskList is empty!\n");
    }
    else {
      console.log("TaskList:");
      for (let i=0; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === true) {
          console.log('[x]', this.tasks[i].itemText);
        } else {
          console.log('[ ]', this.tasks[i].itemText);
        }
      }
    }
  },

  // Add a new task to your Task List and print out the new List
  addToDos: function(newItemText) {
    this.tasks.push({
      itemText: newItemText,
      completed: false
    });
    this.displayToDos();
  },

  // Change an existing Task List and print ouf the modified List
  changeToDo: function(index, newItemText) {
    this.tasks[index].itemText = newItemText;
    this.displayToDos();
  },

  // Delete an item from the Task List and display the modified List
  deleteToDo: function(index) {
    this.tasks.splice(index,1);
    this.displayToDos();
  },

  toggleCompleted: function(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.displayToDos();
  }
};
