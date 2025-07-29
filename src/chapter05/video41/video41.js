console.log("Video 41")

const ages = [10, 20, 30, 25, 12, 19];

const agesx2 = ages.map((item, index) => {
    return item*2;
})

const agesGreaterThan18 = ages.filter((item, index) => {
    return item > 18;//true
})

// const agesGreaterThan18 = ages.filter((item, index) => item > 18)

console.log(" original: ", ages);
console.log(" agesx2: ", agesx2);
console.log(" agesGreaterThan18: ", agesGreaterThan18);