let textInput = document.getElementById("textBox")

let addButton = document.getElementById("addButton")

let pendingTaskList = document.querySelector("#pendingTaskList")

let completedTaskList = document.querySelector("#completedTaskList")

function removeTask(sender) {

  if (sender.parentElement == pendingTaskList){
  pendingTaskList.removeChild(sender)
}
else {
  completedTaskList.removeChild(sender)
}
}

function markAsCompleted(cb) {

  if(cb.checked) {
    completedTaskList.appendChild(cb.parentElement)

  } else {
    pendingTaskList.appendChild(cb.parentElement)
  }

  console.log('markAsCompleted')
}

addButton.addEventListener('click',function(){

let taskInput = textInput.value

let taskItem =  `
<li>
  <input type='checkbox' onchange = 'markAsCompleted(this)' />
  <label>${taskInput}</label>
  <button onclick='removeTask(this.parentElement)' class="itemButton">Remove</button>
</li>

`
pendingTaskList.insertAdjacentHTML("beforeend", taskItem)

})
