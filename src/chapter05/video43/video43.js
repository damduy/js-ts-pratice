console.log("Video 43")

const person = {
    name1: "Duy",
    age: 25
}

console.log("Person before: ", person);

//get data
console.log("age: ", person.age);
console.log("name: ", person["name1"]);

//set data
person.address = "hanoi"
person["language"] = "Vietnamese"


delete person.address
console.log("Person After", person);