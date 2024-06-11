function addTask() {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('tasks');

    const task = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task} <small>(Due: ${dueDate}) [${priority}] ${category && ('- ' + category)}</small></span>
        <div class="buttons">
            <input type="checkbox" onchange="completeTask(this)">
            <button onclick="deleteTask(this)">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/trash.png" alt="Delete">
            </button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
    categoryInput.value = '';
}

function completeTask(checkbox) {
    const li = checkbox.parentNode.parentNode;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}
