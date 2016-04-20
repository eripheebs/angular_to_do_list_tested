describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an array of todos', function() {
    expect(ctrl.todos).toContain("ToDo1");
  });

  it('initialises with an array with two todos', function() {
    expect(ctrl.todos).toEqual(["ToDo1", "ToDo2"]);
  });

});
