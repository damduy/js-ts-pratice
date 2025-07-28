console.log("lab 1");

const fullName = "DamDuy";
const birthYear = 2000;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const info = `Ten: ${fullName}
Tuoi: ${currentYear-birthYear}
Sinh Vien: ${isStudent}`;

console.log(info);