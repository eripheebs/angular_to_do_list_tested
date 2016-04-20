describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var mockFactory = function(toDoText) {
    var Todo = function(toDoText) {
      this.text = toDoText
      this.completed = false;
    }

    Todo.prototype.complete = function(){
      this.completed = true;
    }

    return Todo
  };

  var ctrl = ('ToDoController', {toDoFactory: mockFactory});

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an array with two todos', function() {
    expect(ctrl.toDos).toEqual([{text: "ToDo1", completed: true},
    {text: "ToDo2", compelted: false}]);
  });

  it('can add a todo', function(){
    ctrl.addToDo("ToDo3")
    todo = ctrl.toDos.pop()
    expect(todo.text).toEqual("ToDo3")
    expect(todo.completed).toEqual(false)
  })

  it('can delete a todo', function() {
    todo = {text: "fake todo", completed: false}
    ctrl.toDos.push(todo);
    ctrl.deleteToDo(todo)
    expect(ctrl.toDos).not.toContain(todo)
  });
});
