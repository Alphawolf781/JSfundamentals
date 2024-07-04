// get references to DOM Nodes 
const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-button')
const todoList = document.getElementById('todo-list')


// function to add my to do item 
function addTodo(){
    // capture the value of the input 
    const todotext = todoInput.value.trim()
    if(todotext === ''){
        alert("Enter an item")
    }

    // create elements using dom 
    // to create elements in DOM we use the method .createElement
    const li = document.createElement('li')
    const span = document.createElement('span')
    // in DOM to show text dynamically we use the method .textContent 
    span.textContent = todotext

    // editing 
    const editInput = document.createElement('input')
    // we are using DOM to manipute the attributes node 
    editInput.type = 'text'
    editInput.value = todotext 

    const editButton = document.createElement('button')
    editButton.textContent = 'Edit Content'

    //delete  
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete Content'
    deleteButton.style.backgroundColor = 'red'

    //append the text and button list item 
    li.appendChild(span)
    li.appendChild(editInput)
    li.appendChild(editButton)
    li.appendChild(deleteButton)

    // add the list item to the todolist <ul>
    todoList.appendChild(li)

    // upon successfull addition of a todolist item we can clear the input for the next value 
    todoInput.value = ''
    
    // event listener for the delete action 
    deleteButton.addEventListener('click', function(){
        todoList.removeChild(li)
    })

    // edit button 
    editButton.addEventListener('click', function(){
        //  dynamically we add an attribute that will activate an edit clause 
        //class list dynamically adds a class to an element 
        if(li.classList.contains('edit-mode')){
            //switch from edit mode to a text dispaly 
            span.textContent = editInput.value
            editButton.textContent = 'edit'
        } else {
            //actuall editing
            editInput.value = span.textContent
            editButton.textContent = 'save'
        }
        li.classList.toggle('edit-mode')
    })
   
}

addButton.addEventListener('click',addTodo)