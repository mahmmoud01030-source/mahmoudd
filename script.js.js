function addTask() {

  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if(input.value === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');

  li.innerHTML = `
    ${input.value}
    <button class="delete" onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);

  input.value = '';
}

function removeTask(button) {
  button.parentElement.remove();
}