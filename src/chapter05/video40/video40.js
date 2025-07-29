console.log("Video 40")

const scores = [10, 9, 8, 7, 6, 5];

//read data
// scores.forEach((element, index) => {
//     console.log("index = ", index, "value = ", element);
// })

//modify data
const scoresx2 = scores.map((element, index) => {
    
    return element * 2;
})

const otherScoresx2 = scores.map((element, index) => element*2)

console.log(" score = ", scores);
console.log(" score = ", scoresx2);
console.log(" score = ", otherScoresx2);

