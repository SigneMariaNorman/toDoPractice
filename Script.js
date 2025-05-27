const todoListElem = document.querySelector('#todo-list');
function createTodo(task) {
    const todoElem = document.createElement('li');
    todoElem.textContent = task;
    console.log(todoElem);
    todoListElem.appendChild(todoElem);
}
createTodo('The Ancient Celts - Barry Cunliffe');
createTodo('Contemporary Britain');
createTodo('Sixty Million Frenchmen cannot be wrong');
createTodo('O século Portugués');