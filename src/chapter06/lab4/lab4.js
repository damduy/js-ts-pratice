const username = "damduy@gmail.com"
const password = "1234"

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
// const redirectElement = document.getElementById("redirect");



submitBtn.addEventListener("click",() => {
    if (usernameElement.value == username && passwordElement.value == password) {
        alert("Success!");
        window.location.href = "success.html";
    } else {
        alert("Failed!");
        usernameElement.style.borderColor = 'red';
        passwordElement.style.borderColor = 'red';
    }
})