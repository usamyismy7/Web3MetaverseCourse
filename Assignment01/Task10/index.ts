// Task05
// this code prints a message in which quote and name of its author is displayed
let famous_person: string = "Winston Churchill";
let quote: string =
  "Success in not final, failure is not fatal: It is the courage to continue that counts.";

let message: string = `${famous_person} once said, "${quote}"`;

console.log("Task05");
console.log(message + "\n");

// Task06
// this code prints two outputs one with whitespaces and another without whitespaces
let personName: string = "\t     John Doe     \n";

let strippedName: string = personName.trim();

console.log("Task06");
console.log(`Name with whitespaces: "${personName}"`);
console.log(`Name without whitespaces: "${strippedName}"`);
