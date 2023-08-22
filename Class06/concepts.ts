// 1 - union literals
let age: number | "died" | "unknown";
age = 10; // ok
age = "died"; // ok
age = "unknown"; // ok
// age = "living"; // error

type RawData = string | number | boolean | null | undefined;
let data: RawData = "hello"; // ok

// 2 - objects
let teacher = {
  name: "John",
  age: 38,
};

console.log(teacher.name); // ok
console.log(teacher["age"]); // ok

// 3 - object alias

// anonymous type
let student: { name: string; age: number } = {
  name: "Zeeshan",
  age: 20,
};

// type alias
type Student = {
  name: string;
  age: number;
};

let student2: Student = {
  name: "Zeeshan",
  age: 20,
};

// interface
interface Manager {
  name: string;
  subordinates: number;
}

let storeManager: Manager = {
  name: "Hira",
  subordinates: 10,
};

// 4 - nested objects
type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  name: string;
};

const myBook: Book = {
  author: {
    firstName: "Zeeshan",
    lastName: "Hanif",
  },
  name: "My Book",
};

// 5 - intersection types
type Employee = {
  employee_id: number;
  employee_name: string;
};
type Recruiter = {
  recruiter_id: number;
  recruiter_name: string;
};
type RecruiterEmployee = Employee & Recruiter;

let recruiterEmployee: RecruiterEmployee = {
  employee_id: 1,
  recruiter_id: 2,
  employee_name: "Zeeshan",
  recruiter_name: "Hira",
};

console.log(recruiterEmployee.recruiter_id);
console.log(recruiterEmployee.employee_name);
