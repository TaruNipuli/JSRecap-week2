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
      });

      // Label
      const label = document.createElement('label');
      label.textContent = todo.task;

      // Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => {
          const index = todoList.findIndex(item => item.id === todo.id);
          if (index !== -1) {
              todoList.splice(index, 1);
              renderTodoList();
          }
      });

      liElement.appendChild(checkbox);
      liElement.appendChild(label);
      liElement.appendChild(deleteButton);
      ulElement.appendChild(liElement);
  }
}

// Initial Render
renderTodoList(); 

// Get the "Add Item" button
const addButton = document.querySelector('.add-btn');

// Create "Enter task" input field and "Save" button, but hide them initially
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Enter task...';
inputField.style.display = 'none';  // Hide initially

const saveButton = document.createElement('button');
saveButton.textContent = 'Save';
saveButton.style.display = 'none'; // Hide initially

// Append the input and save button to the document body
document.body.appendChild(inputField);
document.body.appendChild(saveButton);

// Show input field and save button when "Add Item" is clicked
addButton.addEventListener('click', () => {
  inputField.style.display = 'inline'; // Show the input field
  saveButton.style.display = 'inline'; // Show the save button
  addButton.style.display = 'none'; // Hide the "Add Item" button after click
});

// Add new task when clicking "Save"
saveButton.addEventListener('click', () => {
  const newTask = inputField.value;
  if (newTask) {
      todoList.push({ id: todoList.length + 1, task: newTask, completed: false });
      inputField.value = ''; // Clear input after adding
      renderTodoList();
  }

  // Hide input and save button after saving the task
  inputField.style.display = 'none';
  saveButton.style.display = 'none';
  addButton.style.display = 'inline'; // Show the "Add Item" button again
});