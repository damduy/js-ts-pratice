console.log("Video 64")

const doSomething = () => {
    const a = 10, b = 1;

    if (b===0) {
        throw new Error("Divide by zero")
    }
    return a/b;
}

try {
    doSomething();
} catch (error) {
    console.log("Error Occurred", error)
} finally {
    console.log("Run final")
}


