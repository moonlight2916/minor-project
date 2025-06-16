let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>
        <span>${task}</span>
        <div>
          <button class="edit-btn" onclick="editTask(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        </div>
      </li>
    `;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (value) {
    tasks.push(value);
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const updated = prompt("Edit your task:", tasks[index]);
  if (updated && updated.trim()) {
    tasks[index] = updated.trim();
    renderTasks();
  }
}
