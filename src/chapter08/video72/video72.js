console.log("Video 72")

const blogTable = document.querySelector("#blogs tbody")

const blogs = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json()
    if (data && data.length) {
        data.forEach(element => {
            blogTable.innerHTML += 
            `
            <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.content}</td>
            
            <td><button class="delete-btn" data-id="${element.id}">delete</button></td>
            </tr>
            `
        });
    }
}



const createBlog = () => {
    const titleInput = document.getElementById("titleInput")
    const authorInput = document.getElementById("authorInput")
    const contentInput = document.getElementById("contentInput")

    
    const submitBtn = document.getElementById("submitBtn")
    submitBtn.addEventListener("click", async () => {
        //Call api to create blog
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: titleInput.value, author: authorInput.value, content: contentInput.value})
        });
    const content = await rawResponse.json();

    console.log(content);

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${content.id}</td>
        <td>${content.title}</td>
        <td>${content.author}</td>
        <td>${content.content}</td>
        
        <td><button class="delete-btn" data-id="${content.id}">delete</button></td>
    `;

    blogTable.appendChild(newRow);
    
    //Add event listener for new blog
    const button = document.querySelector(`[data-id="${content.id}"]`);
    button.addEventListener("click", async () => {
        const id = button.getAttribute("data-id");

            //call api to delete blog
            const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            
            });

            const content = await rawResponse.json();
            console.log(content)
             
            //delete row
            const row = button.closest('tr');
 	        row.remove();
    })

    })
    
}

const deleteBlog = () => {
    const deleteBtn = document.querySelectorAll('.delete-btn').forEach((button) => {
        button.addEventListener("click",async () => {
            const id = button.getAttribute("data-id");

            //call api to delete blog
            const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            
            });

            const content = await rawResponse.json();
            console.log(content)
             
            //delete row
            const row = button.closest('tr');
 	        row.remove();

        })
    })
}



blogs().then(() => {
    deleteBlog()
})
createBlog()
