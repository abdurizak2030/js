
const people = [
  { name: "Xasan", age: 20, city: "Jigjiga" },
  { name: "Maxamed", age: 30, city: "Hargeysa" },
  { name: "axmed", age: 35, city: "mogadisho" },
];

for (const person of people) {     
  for (const key in person) {     
    console.log(person[key]);
  }
  console.log('---');              
}