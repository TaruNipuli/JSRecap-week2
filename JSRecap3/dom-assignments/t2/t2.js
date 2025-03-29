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


// add your code here
const ulElement = document.querySelector('ul');

// Render TODO List
function renderTodoList() {
    ulElement.innerHTML = ''; // Clear existing list

    for (const todo of todoList) {
        const liElement = document.createElement('li');

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            console.log(todoList);
        });

        // Label
        const label = document.createElement('label');
        label.textContent = todo.task;

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            const index = todoList.findIndex(item => item.id === todo.id);
            if (index !== -1) {
                todoList.splice(index, 1);
                renderTodoList();
                console.log(todoList);
            }
        });

        liElement.appendChild(checkbox);
        liElement.appendChild(label);
        liElement.appendChild(deleteButton);
        ulElement.appendChild(liElement);
    }
}

renderTodoList(); // Initial Render

// Create Enter task input
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Enter task...';
document.body.appendChild(inputField);

// Create Save button
const saveButton = document.createElement('button');
saveButton.textContent = 'Save';
document.body.appendChild(saveButton);

// Handle adding new task
saveButton.addEventListener('click', () => {
    const newTask = inputField.value.trim();
    if (newTask) {
        todoList.push({ id: Date.now(), task: newTask, completed: false });
        inputField.value = ''; // Clear input after adding
        renderTodoList();
        console.log(todoList);
    }
});