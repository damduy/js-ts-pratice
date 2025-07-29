console.log("Video 38");

const names = ["dd", "blue-eyes", "dante", "vergil"];

console.log("0= ",names[0]);
console.log("2= ",names[2]);

console.log("10= ",names[10]);

names[2] = "woohoo-pizzaman";

console.log("Before: ",names);

names.push(true, 123);//add last
names.unshift(null);//add first

names.pop();//remove last
names.shift()//remove first

console.log("After: ",names);

