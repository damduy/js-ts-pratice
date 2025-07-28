console.log("video 27")

//score: Excellent, Good, Average, Bad
const score = 1;
switch(true) {
    case (score >= 8) :
        console.log("Excellent");
        break;
    case (score <8 && score >= 6) :
        console.log("Good");
        break;
    case (score <6 && score >=4) :
        console.log("Average");
        break;
    default: 
        console.log("Bad");
}