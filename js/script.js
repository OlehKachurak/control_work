const tasks = [
  { id: 1, title: "Go to the cinema", done: false },
  { id: 2, title: "Go to the theatre", done: true },
  { id: 3, title: "Learn Java Script", done: false },
  { id: 4, title: "Finish HTML project", done: false },
];


function renderTasks() {
  const taskElements= tasks.map(function(item){
    return `
    <li class="list-group-item  d-flex">
      <span>${item.title}</span>
      <div class="icons-box ml-auto">
         <i class="fa fa-check mr-3"></i>
        <i  class="fa fa-trash"></i>
      </div>
    </li>`
  }).join('');
  document.getElementById("tasks-box").innerHTML = taskElements;
}

renderTasks()
const form = document.getElementById('task-form')
form.addEventListener('submit',function(event){
  event.preventDefault();
const formData = new FormData(form)
  const title = formData.get('title'); 
 
  tasks.push({ 
    id: 5, 
    title,
    done: false
 
  }) 
  
  renderTasks();
 } )
  
 const selectElement = document.getElementById('filter-tasks');
selectElement.addEventListener('change',mySecondFunc)
const res = document.getElementById('tasks-box')
function mySecondFunc(){
  let doneTask = [];
  for (let user of tasks){
    if(user.done == true){
      doneTask.push(user.title)
    }
  }

  let remainTask = [];
  for (let user of tasks){
    if(user.done == false){
      remainTask.push(user.title)
    }
  }
  for (let key in tasks){
    if(selectElement.value == 1){
           return res.textContent = `${doneTask} , ${remainTask}`;
    }
    if(selectElement.value == 2){
      return res.textContent = `${doneTask}`;
    }
    if(selectElement.value == 3){
      return res.textContent = `${remainTask}`;
    }
  }
}



