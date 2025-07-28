console.log("Video 33");

let globalVar = "I'n global";

function show() {
    console.log(globalVar); //accessible
}

show();
console.log(globalVar); //accessible

function sayHi() {
    let name1 = "Duy";
    console.log("Hello ", name1);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); //accessible
    }

    console.log(x); //x is not defined
}

sayHi();
console.log(name1); //name1 is not defined