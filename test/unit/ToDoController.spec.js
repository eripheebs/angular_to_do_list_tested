describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
    todo = {text: "ToDo3", completed: false}
  }));

  it('initialises with an array with two todos', function() {
    expect(ctrl.toDos).toEqual([{text: "ToDo1", completed: true},
    {text: "ToDo2", compelted: false}]);
  });

  it('can add a todo', function(){
    ctrl.addToDo(todo)
    expect(ctrl.toDos).toContain(todo)
  })
});
