describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an array with two todos', function() {
    expect(ctrl.todos).toEqual([{text: "ToDo1", completed: true}, {text: "ToDo2", compelted: false}]);
  });

});
