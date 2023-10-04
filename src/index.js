document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskDescription = document.getElementById('new-task-description')
  const list = document.getElementById('tasks')
  document.getElementById('create-task-form').addEventListener('submit', (e)=>{
      e.preventDefault()
    
      const newList = document.createElement('li')
      newList.textContent = taskDescription.value
      list.appendChild(newList)
      taskDescription.textContent = ''

      const deleteButton = createdeleteButton()

      newList.appendChild(deleteButton)

      sortTasks()
      
  })

});


function createdeleteButton(){
  const button = document.createElement('button')
        button.textContent = 'x'
        button.style.marginLeft = '10px'
        button.style.paddingLeft = '5px'
        button.style.paddingRight = '5px'
        button.style.height = '10px'
        button.style.paddingBottom = '9px'

  button.addEventListener('click', ()=>{
    const retrieveList = button.parentElement
    retrieveList.remove()
  })
  return button
}

function sortTasks(){
  const taskList = Array.from(list.children)
  taskList.sort((a, b) => {
    const priorityHigh = a.classList[0]
    const priorityMedium = b.classList[0]

    const priorityOrder = ['high', 'medium', 'low']

    return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB)
  })
}
