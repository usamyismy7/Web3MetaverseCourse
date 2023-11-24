import inquirer from "inquirer";
import chalk from "chalk";
import nodeBanner from "node-banner";
const sleep = () => new Promise((r) => setTimeout(r, 2500));
async function Welcome() {
    nodeBanner("Welcome!", "Student Registration Form", "green", "blue");
    await sleep();
}
(async () => {
    await Welcome();
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "number",
            name: "age",
            message: "What is your age?",
        },
        {
            name: "gender",
            type: "list",
            message: "What is your gender?",
            choices: ["Male", "Female"],
        },
        {
            type: "checkbox",
            name: "education",
            message: "What is your education?",
            choices: ["Matric", "Intermediate", "Bachelors", "Masters"],
        },
    ])
        .then((answers) => {
        const student = {
            name: answers.name,
            age: answers.age,
            gender: answers.gender,
            education: {
                matric: answers.education.includes("Matric"),
                intermediate: answers.education.includes("Intermediate"),
                bachelors: answers.education.includes("Bachelors"),
                masters: answers.education.includes("Masters"),
            },
        };
        console.log(chalk.green("Student Registered Successfully!") + "\n");
        console.log(chalk.blue.bgMagentaBright.bold("Name: ") + student.name);
        console.log(chalk.bgGreenBright.cyanBright("Age: ") + student.age);
        console.log(chalk.bgBlueBright.greenBright.italic("Gender: ") + student.gender);
        console.log(chalk.bgRedBright.yellowBright.underline("Education: "));
        console.log(chalk.bgYellowBright.black("Matric: ") + student.education.matric);
        console.log(chalk.bgYellowBright.black("Intermediate: ") +
            student.education.intermediate);
        console.log(chalk.bgYellowBright.black("Bachelors: ") + student.education.bachelors);
        console.log(chalk.bgYellowBright.black("Masters: ") + student.education.masters);
    });
})();
