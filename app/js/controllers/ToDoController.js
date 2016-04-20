toDoApp.controller('ToDoController', [function() {
  var self = this

  self.toDos = [{text: "ToDo1", completed: true}, {text: "ToDo2", compelted: false}];

  self.addToDo = function(todo){
    self.toDos.push(todo);
  }

}]);
