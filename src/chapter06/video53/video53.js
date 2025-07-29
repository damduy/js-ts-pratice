console.log("Video 53")

const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const myBackBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    myTextElement.classList.add("damduy","hello");
    // {key: value}
})

myBackBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "unset";
    myTextElement.classList.remove("damduy","hello");
    // {key: value}
})