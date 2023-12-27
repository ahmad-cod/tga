// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener to button
addTaskBtn.addEventListener('click', addTask);

// Add event listener to task list for delegation
taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        removeTask(event.target);
    } else if (event.target.tagName === 'LI') {
        editTask(event.target);
    }
});

// Function to add a new task
function addTask() {
    const inputValue = taskInput.value.trim();

    if (inputValue !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `${inputValue}<span class="delete-btn">✖</span>`;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(element) {
    const listItem = element.parentNode;
    listItem.style.opacity = 0;
    setTimeout(() => {
        listItem.parentNode.removeChild(listItem);
    }, 300);
}

// Function to edit a task
function editTask(target) {
    const newText = prompt('Edit task:', target.innerText.trim());
    if (newText !== null) {
        target.firstChild.data = newText;
    }
}
