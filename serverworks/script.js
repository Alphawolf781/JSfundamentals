document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('postForm')
    const postContainer = document.getElementById('postsContainer')
    const URL = 'http://localhost:3000/posts'
 
    // function to fetch and display posts (fetch API / promises)
    // by default fetch always performs a GET 
    //  to manage promises in fetch we use the .then() method 
    // 1. after a fetch convert the response to a json format 
    const fetchPosts = () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // to use DOM to present that content to the user 
            // clearing the container so that it loads the recent updates done 
            postContainer.innerHTML = '';
            // forEach method 
            data.forEach(post => {
                console.log(post.content)
                const postElementItem = document.createElement('div')
                postElementItem.innerHTML = `
                   <h2>${post.title}</h2>
                   <p>${post.content}</p>
                   <hr>
                `;
                // append to my div 
                postContainer.appendChild(postElementItem)
            })
        })
        .catch(error => console.log('Error in fetching posts ' , error))
    } 
    fetchPosts()

    // POST adding from form 
    form.addEventListener('submit', event => {
        event.preventDefault();
        // structure our post submission as an object : JSON 
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const newPost = {
            title,
            content
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newPost)
        }

        // fetch post 
        fetch(URL,options)
        .then(response => {
            if(!response.ok){
                console.log("Network response was not OK!!")
            }
            return response.json();
        })
        .then(data => {
            console.log('Post added ', data)
            // fetch posts 
            fetchPosts()
            //clear form 
            form.reset()
        })
        .catch(error => console.log('Error in posting posts ' , error))
    })
})