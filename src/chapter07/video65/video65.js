console.log("Video 65")

const greeting = (name ,callback) => {
    console.log("Hello", name)
    callback();
    //hello()
}

const hello = () => {
    console.log("learn callback..")
}

const hi = () => {
    console.log("Hi")
}

greeting("dd", hello)
greeting("dd", hi)