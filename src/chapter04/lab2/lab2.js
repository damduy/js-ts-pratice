const averageScore = (math, literature, english) => {
    return (math + literature + english)/3
}

const classification = (averageScore) => {
    if (averageScore >= 9) {
        return "Excellent";
    } 
    else if (averageScore < 9 && averageScore >= 8) {
        return "Good";
    }
    else if (averageScore < 8 && averageScore >= 6.5) {
        return "Average";
    } else {
        return "Bad";
    }
}

const Toan = 9;
const Van = 8;
const Anh = 7;

const DiemTB = averageScore(Toan, Van, Anh);

// console.log("Diem trung binh: ", averageScore(Toan, Van, Anh));
// console.log("Xep loai: ",classification(averageScore(Toan, Van, Anh)));

console.log(`
Diem Trung Binh : ${DiemTB}
Xep Loai: ${classification(DiemTB)}
`);