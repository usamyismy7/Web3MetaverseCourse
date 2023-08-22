// 1 - union literals
let age;
age = 10; // ok
age = "died"; // ok
age = "unknown"; // ok
let data = "hello"; // ok
// 2 - objects
let teacher = {
    name: "John",
    age: 38,
};
console.log(teacher.name); // ok
console.log(teacher["age"]); // ok
// 3 - object alias
// anonymous type
let student = {
    name: "Zeeshan",
    age: 20,
};
let student2 = {
    name: "Zeeshan",
    age: 20,
};
let storeManager = {
    name: "Hira",
    subordinates: 10,
};
const myBook = {
    author: {
        firstName: "Zeeshan",
        lastName: "Hanif",
    },
    name: "My Book",
};
let recruiterEmployee = {
    employee_id: 1,
    recruiter_id: 2,
    employee_name: "Zeeshan",
    recruiter_name: "Hira",
};
console.log(recruiterEmployee.recruiter_id);
console.log(recruiterEmployee.employee_name);
export {};
