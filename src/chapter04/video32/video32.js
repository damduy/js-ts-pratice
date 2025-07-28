console.log("video 32");

const sum = (a, b, c) => {
    console.log("Run before");
    if (typeof a !== 'number') {
        console.log("run empty return");
        return;
    }
    console.log("Run after");
    return a + b + c;
    
}

console.log(sum("1", 2, 3));