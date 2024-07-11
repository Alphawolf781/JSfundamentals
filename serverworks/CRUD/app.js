document.addEventListener('DOMContentLoaded', () => {
    const userform = document.getElementById('userForm')
    const userList = document.getElementById('userList')

    const URL = 'http://localhost:3000/users'

    // fetch and display my users 
    const fetchUsers = async () => {
        const response = await fetch(URL)
        const users = await response.json()
        console.log(users)
        // users is an array , so i use as an array
        localStorage.setItem('users', JSON.stringify(users))
        userList.innerHTML = users.map(user => 
            `
            <li data-id="${user.id}">
                ${user.name} (${user.email})
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </li>
            <hr>
            `
        ).join("")
    }
 
    // add or update the user 
    userform.addEventListener('submit', async(e) => {
        e.preventDefault() 
        const id  = document.getElementById('userId').value
        const name = document.getElementById('userName').value
        const email  = document.getElementById('userEmail').value

        // check if user want to update or add the record 
        if(id){
            // edit user 
            await fetch(`${URL}/${id}`, {
                method: 'PUT', 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({id: parseInt(id), name, email})
            })
        } else {
            // add user
            const response = await fetch(URL)
            const users = await response.json()
            const maxId = users.length > 0 ? Math.max(...users.map(user => user.id))  : 0;
            const newId = maxId  + 1 

            await fetch(URL, {
                method: 'POST', 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({id: newId.toString(), name, email})
            })

        }
        userform.reset()
        fetchUsers()
    })

    //edit users
    window.editUser = async (id) => {
        // attaching id to endpoint url so that it removes only the object in question
         const response = await fetch(`${URL}/${id}`)
         const user = await response.json();
         document.getElementById('userId').value = user.id
         document.getElementById('userName').value = user.name
         document.getElementById('userEmail').value = user.email
    }

    //delete users 
    window.deleteUser = async (id) => {
          await fetch(`${URL}/${id}`,{
            method: "DELETE"
          })
          fetchUsers()
    }





    fetchUsers()
})

