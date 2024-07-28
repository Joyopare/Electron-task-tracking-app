const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    addTask(task);
    taskInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}

const preloader=document.querySelector('.preloader');
const page=document.querySelector('.app');
window.addEventListener('load',()=>{
  setTimeout(()=>{
  preloader.classList.add('hidden');
  page.classList.remove('hidden')
  },3200);
});
console.log("its working");
