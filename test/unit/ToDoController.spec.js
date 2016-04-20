describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
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
