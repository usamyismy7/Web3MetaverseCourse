import chalk from "chalk";
import inquirer from "inquirer";
import showBanner from "node-banner";
import sum from "./sum.js";

// const promptSync = require("prompt-sync")();

sum();

let answers = await inquirer.prompt([
  {
    type: "input",
    name: "userName",
    message: "What's your username?",
  },
  {
    type: "input",
    name: "firstName",
    message: "What's your first name?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What's your last name?",
  },
  {
    type: "number",
    name: "contact",
    message: "What's your contact number?",
  },
  {
    name: "gender",
    type: "checkbox",
    message: "Select the gender",
    choices: ["Male", "Female"],
  },
  {
    name: "confirmed",
    type: "confirm",
    message: "Are you sure?",
  },
  {
    name: "userAge",
    type: "number",
    message: "What's your age?",
    validate: function (value: number) {
      if (value > 18) {
        return true;
      } else {
        return "\nYou are younger than 18";
      }
    },
  },
  {
    name: "userEmail",
    type: "input",
    message: "What's your email?",
    validate: function (value: string) {
      if (value.includes("@")) {
        return true;
      } else {
        return "\nYou must enter a valid email";
      }
    },
  },
  {
    name: "hobbies",
    type: "checkbox",
    message: "Select your hobbies",
    choices: [
      "Reading",
      "Writing",
      "Coding",
      "Singing",
      "Dancing",
      "Travelling",
      "Gaming",
      "Cooking",
      "Painting",
      "Others",
    ],
  },
]);

console.log(answers);

console.log(chalk.bgBlueBright(answers.userName));
console.log(chalk.bold(answers.contact));
console.log(chalk.italic.greenBright(answers.gender));
console.log(chalk.inverse.bgWhiteBright(answers.confirmed));

(async () => {
  await showBanner(
    "Inquirer",
    "A collection of common interactive command line user interfaces."
  );
})();
