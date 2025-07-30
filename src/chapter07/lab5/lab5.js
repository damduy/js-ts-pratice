console.log("Lab 5")

const usersTable = document.querySelector("#users tbody")

const users = async() => {
    const res = await fetch("http://localhost:8000/users")
    const data = await res.json() 
    if (data && data.length) {
        data.forEach((user, index) => {
            usersTable.innerHTML += `
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            </tr>
            `;

        });
    }
}

users();
