toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this

  self.toDos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2', false)];

  self.addToDo = function(toDoText){
    self.toDos.push(new ToDoFactory(toDoText));
  }

  self.deleteToDo = function(todo) {
    var index = self.toDos.indexOf(todo);
    self.toDos.splice(index, 1);
  }

}]);

toDoApp.factory('ToDoFactory', function(){
  var ToDo = function(toDoText, completed) {
    this.text = toDoText
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  }

  ToDo.prototype.complete = function() {
    this.completed = true;
  };

  return ToDo
});
