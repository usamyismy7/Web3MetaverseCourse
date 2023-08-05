var personName = "John Smith";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
var words = personName.toLowerCase().split(" ");
var titleCaseName = "";
for (var i = 0; i < words.length; i++) {
    var word = words[i];
    titleCaseName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log("Titlecase: " + titleCaseName.trim());
