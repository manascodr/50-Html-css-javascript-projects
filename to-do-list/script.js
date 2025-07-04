let textIpt = document.querySelector('#taskInput')
let addBtn = document.querySelector('#addTaskBtn')
let taskList = document.querySelector('.task-list')

addBtn.addEventListener('click',function(evt){
  console.log(evt.target.id);
  
    if (textIpt.value.trim() !== '') {
        let li  = document.createElement('li')
        let removeBtn = document.createElement('button')
        let completedBtn = document.createElement('button')

        removeBtn.classList.add('remove-btn')
        removeBtn.innerText = '❌'

        completedBtn.classList.add('completed')
        completedBtn.innerText = '✔️'

        li.innerText = textIpt.value.trim()

        taskList.appendChild(li)
        li.appendChild(removeBtn)
        li.appendChild(completedBtn)

        textIpt.value = ''
    } else {
  alert('Please enter a task');
}
    
})
taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-btn')) {
    e.target.parentElement.remove();
  }if(e.target.classList.contains('completed')){

  }
});


textIpt.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addBtn.click();  
  }
});
