let marks = prompt("Enter your marks:");
let grade = "F"; 
if(marks > 90){
    grade = "S";
 }else if(marks >80){
     grade = "A";
 }else if(marks > 70){
    grade = "B"
 }else if(marks > 60){
     grade = "C";
 }else if(marks > 50){
    grade = "D";
 }else if(marks >= 40){
     grade = "E";
 }

 console.log(`Marks  ${marks} , Grade ${grade}`);

 let rank = (marks > 90) ? "S" : (marks >80) ?"A" : (marks > 70) ? "B" : (marks > 60) ?
 "C" : (marks > 50) ? "D" : (marks >= 40) ? "E" : "F"; 

 console.log(`Marks : ${marks} & grade : ${rank}`);