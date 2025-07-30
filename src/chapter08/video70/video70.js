console.log("Video 70")

const todoInput = document.getElementById("todoInput")
const submitBtn = document.getElementById("submitBtn")
const todoTable = document.querySelector("#todoTable tbody")



const generateTable = () => {

    todoList = JSON.parse(localStorage.getItem("todoList"))

    if (todoList && todoList.length) {
        todoList.forEach((todo, index) => {
        todoTable.innerHTML += `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td><button class="delete-btn" data-id="${todo.id}">delete</button></td>
        </tr>
        `
        });
    }

}





if (todoTable) {
    generateTable()
    
}

deleteBtn = document.querySelectorAll(".delete-btn");
deleteBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id")
        deleteTodo(id)
    })
})

const deleteTodo = (id) => {
    todoList = JSON.parse(localStorage.getItem("todoList"))
    if (todoList) {
        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id) 
        localStorage.setItem("todoList",JSON.stringify(newTodo))
        window.location.reload()
    }
}


if (submitBtn) {
    submitBtn.addEventListener("click", () => {
    const todoObj = {
        id: Math.floor(Math.random()*100000000) + 1,
        name: todoInput.value
    }

    if (localStorage.getItem("todoList")) {
        const currentTodoList = JSON.parse(localStorage.getItem("todoList"))
        currentTodoList.push(todoObj)
        localStorage.setItem("todoList", JSON.stringify(currentTodoList))
    } else {
        localStorage.setItem("todoList", JSON.stringify([todoObj]))
    }
    
    window.location.href = "video70.html"
})
}
