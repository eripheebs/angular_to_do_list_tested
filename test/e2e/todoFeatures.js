describe('Todos tracker', function() {
  it('has todos', function() {
    browser.get('/');
    var todos = $$('#todo p');
    expect(todos.first().getText()).toMatch('ToDo1: completed');
    expect(todos.last().getText()).toMatch('ToDo2: not completed');
  });

  it('can add a todo', function(){
    browser.get('/');
    $('#addToDo').sendKeys('ToDo3');
    $('#submitToDo').click();
    var todo = $$('#todo p').last();
    expect(todo.getText()).toContain('ToDo3');
  })

  it('can delete todo', function(){
    browser.get('/');
    var todo = $('#todo');
    $('#deleteToDo').click();
    expect(todo.getText()).not.toContain('ToDo1')
  })

  it('can mark a ToDo as complete', function(){
    browser.get('/');
    var todo = $$('#todo p').last();
    todo.element(by.css('.complete')).click();

    expect(todo.getText()).toMatch("ToDo2: completed");
  })
})
