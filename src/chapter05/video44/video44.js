console.log("Video 44");

const sv1 = {
    username: "Duy",
    score: 5
}

const sv2 = {
    username: "DD",
    score: 7
}

const sv3 = {
    username: "Dante",
    score: 2
}

const sinhvien = [sv1, sv2, sv3];
console.log(">>> check sinhvien: ", sinhvien);

// sinhvien.forEach((item, index) => {
//     console.log(">>> index = ", index, " name = ", item.username)
// })

const person = {
    email: "dd@gmail.com",
    age: 25,
    address: "vietnam"
}


// for (let key in person) {
//     console.log(key, person[key]);
// }

// for (let value of Object.values(person)) {
//     console.log(value);
// }

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}