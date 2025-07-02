let textIpt = document.querySelector('#taskInput')
let addBtn = document.querySelector('#addTaskBtn')
let taskList = document.querySelector('.task-list')

addBtn.addEventListener('click',function(){
    
    if (textIpt.value.trim() !== '') {
        let li  = document.createElement('li')
        li.innerText = textIpt.value.trim()
        taskList.appendChild(li)
        textIpt.value = ''
    } else {
  alert('Please enter a task');
}
    
})

textIpt.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addBtn.click();  
  }
});
