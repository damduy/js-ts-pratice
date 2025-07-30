console.log("Video 66")

//promise 
fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data => console.log("fetch with promise: ",data))


//async await 

const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("fetch with async await: ",data)
}

fetchData()