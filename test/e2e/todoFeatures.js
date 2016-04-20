describe('Todos tracker', function() {
  it('has todos', function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toContain('ToDo1');
    expect(todo.getText()).toContain('ToDo2');
  });
});
