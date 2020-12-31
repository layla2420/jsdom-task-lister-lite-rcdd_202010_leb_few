document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener(submit,function(){
  addTask()
  event.preventDefault()
  })
});

let taskDiscription = document.getElementById('new-task-description')
let newTask =taskDiscription.value
let list= document.getElementById("tasks")

function addTask{
  list.innerHTML=`<li>{newTask}<li>`

}
