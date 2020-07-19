const student =
{
 name : "Helensiki",
 age : 24,
 projects:
 {
     diceGame: "Two players dice game using Javascript"
 }
}

console.log(student)
const{name, age, projects:{diceGame}} = student;
console.log(name, age, diceGame)