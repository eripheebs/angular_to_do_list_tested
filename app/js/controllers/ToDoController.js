toDoApp.controller('ToDoController', [function() {
  var self = this

  self.toDos = [{text: "ToDo1", completed: true}, {text: "ToDo2", compelted: false}];

  self.addToDo = function(toDoText){
    self.toDos.push({text: toDoText, completed: false});
  }

}]);
