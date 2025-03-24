// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

/*Open t2 folder in your IDE/editor. The assignment remains unchanged from the first, 
except that for this version, DOM methods are used to add the todo items.
for attribute is added to <label> with htmlFor*/
// add your code here
const ulElement = document.querySelector('ul');

const liElement = document.createElement('li');
  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.id = `todo-${todo.id}`;
  checkboxElement.checked = todo.completed;

  const labelElement = document.createElement('label');