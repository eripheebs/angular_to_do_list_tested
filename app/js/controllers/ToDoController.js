toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this

  self.toDos = [{text: "ToDo1", completed: true}, {text: "ToDo2", compelted: false}];

  self.addToDo = function(toDoText){
    self.toDos.push(new ToDoFactory(toDoText));
  }

  self.deleteToDo = function(todo) {
    var index = self.toDos.indexOf(todo);
    self.toDos.splice(index, 1);
  }

}]);

toDoApp.factory('ToDoFactory', function(){
  var Todo = function(toDoText) {
    this.text = toDoText
    this.completed = false;
  }

  Todo.prototype.complete = function(){
    this.completed = true;
  }

  return Todo
});
