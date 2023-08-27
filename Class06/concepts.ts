// 1 - objects
let teacher = {
  name: "John",
  age: 38,
};

console.log(teacher.name); // ok
console.log(teacher["age"]); // ok

// 2 - object alias

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

// 3 - nested objects
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

// 4 - intersection types
// intersection types are used to combine multiple types into one, it works like a unions concepts of maths
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

// 5 - union literals
let age: number | "died" | "unknown";
age = 10; // ok
age = "died"; // ok
age = "unknown"; // ok
// age = "living"; // error

type RawData = string | number | boolean | null | undefined;
let data: RawData = "hello"; // ok

// difference between union and intersection types
// while union types take the value from the given types, intersection types take the properties from the given types
/*
Union types and intersection types are both type operators in TypeScript that allow you to combine types in different ways.

1. Union Types:
Union types allow a value to be of more than one type. A value with a union type can hold a value of any of the constituent types. Union types are created using the `|` symbol. For example:

```typescript
type MyUnion = string | number;
```

So, a variable of type `MyUnion` can hold either a string or a number.

2. Intersection Types:
Intersection types combine multiple types into a single type that has all the properties of each individual type. Intersection types are created using the `&` symbol. For example:

```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
};

type EmployeePerson = Person & Employee;
```

Here, `EmployeePerson` has both the properties of `Person` and `Employee`.

To rephrase your original statement:

- Union types allow a value to have one of multiple possible types.
- Intersection types combine properties from multiple types into a single type.

Your statement is mostly correct in its essence.Just remember that union types don't "take" values from the given types, but rather a variable of a union type can hold values of any of the given types. Similarly, intersection types don't only "take" properties, but they create a type that includes all properties from the combined types.
*/
