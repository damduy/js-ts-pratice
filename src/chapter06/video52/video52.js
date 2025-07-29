console.log("Video 52")

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const myTextElement = document.getElementById("myText");

console.log(myBtnElement);
console.log(myTextElement);

myBtnElement.addEventListener("click", () => {
    console.log("you click my button");
    // myTextElement.innerText = "Just change the content";
    myTextElement.innerHTML = "<strong>Hello,</strong>,<em>how are you?</em>";
})

backBtnElement.addEventListener("click", () => {
    myTextElement.innerHTML = "Video 52";
})