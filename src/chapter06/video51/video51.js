console.log("Video 51");

const element = document.getElementById("ddBtn");

const handleClickBtn = () => {
    console.log("You click a button")
}

element.addEventListener("click", handleClickBtn)
console.log(element)