const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const saveBtn = document.getElementById('saveBtn');
let tasks = getTasks();
let editIndex = null;

renderTasks();
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = taskInput.value.trim();

    if (!text) return;

    if (editIndex !== null) {
        tasks[editIndex].text = text;
        editIndex = null;
        saveBtn.textContent = 'Add';
        saveBtn.style.backgroundColor = '#0d6efd';
    } else {
        tasks.push({ text: text, completed: false });
    }
    saveTasks();
    renderTasks();
    taskInput.value = '';
});
function getTasks() {
    const data = localStorage.getItem('todoTasks');
    return data ? JSON.parse(data) : [];
}

function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-message">No tasks found</li>';
        return;
    }
    tasks.forEach(function (task, index) {
        const li = document.createElement('li');
        li.className = 'task-item';
        const textClass = task.completed ? 'task-text completed' : 'task-text';
        li.innerHTML = `
            <span class="${textClass}" onclick="toggleTask(${index})">
                ${escapeHTML(task.text)}
            </span>
            <div class="actions">
                <button class="edit-btn" onclick="editTask(${index})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="delete-btn" onclick="deleteTask(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`
        ;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    taskInput.value = tasks[index].text;
    taskInput.focus();
    editIndex = index;
    saveBtn.textContent = 'Update';
    saveBtn.style.backgroundColor = '#ffc107';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}