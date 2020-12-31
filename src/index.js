let form=document.getElementById('create-task-form')
let taskDiscription = document.getElementById('new-task-description')
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener(submit,  addTask())
});





function addTask(event){
  event.preventDefault()
 const newTask = document.createElement("li")
  newTask.innerHTML=taskDiscription.value

}
appendNewTask(newTask);
event.target.reset();
};
const appendNewTask = task => {
  let list= document.getElementById("tasks")
  list.appendChild(task);
};
