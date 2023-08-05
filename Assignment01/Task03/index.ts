let personName: string = "John Smith";

console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());

let words: string[] = personName.toLowerCase().split(" ");
let titleCaseName: string = "";

for (let i = 0; i < words.length; i++) {
  let word: string = words[i];
  titleCaseName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}

console.log("Titlecase: " + titleCaseName.trim());
