let os = prompt("Enter your OS with Version:","Android 9");
let str = String(os);
let arr = str.split(' ');

console.log(`The OS name is ${arr[0]} and version is ${arr[1]}`);