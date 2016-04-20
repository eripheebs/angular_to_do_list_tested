describe('Todos tracker', function() {
  it('has todos', function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toContain('ToDo1');
    expect(todo.getText()).toContain('ToDo2');
  });

  it('can add a todo', function(){
    browser.get('/');
    $('#addToDo').sendKeys('ToDo3');
    $('#submitToDo').click();
    var todo = $$('#todo p').last();
    expect(todo.getText()).toEqual('ToDo3');
  })
});
