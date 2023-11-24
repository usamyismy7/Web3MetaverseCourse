/*
Certainly, let's simplify the differences between `enum` and `const enum` in TypeScript:

**Enum:**

1. **Runtime Representation:** Enums have a runtime presence in JavaScript. They create an object in JavaScript that maps enum names to numeric values.

2. **Enum Values:** You can define both the names and numeric values for enum constants. You can even assign custom numeric values if needed.

3. **Use Cases:** Enums are suitable when you need a set of named constants with a runtime representation. They're useful for situations where you want to work with both the names and values of constants during runtime.

**Const Enum:**

1. **Runtime Representation:** Const enums don't have a runtime representation in JavaScript. The TypeScript compiler replaces enum references with their numeric values during transpilation.

2. **Enum Values:** Const enums only allow literal values (e.g., numbers, strings) as constants. You cannot assign custom numeric values.

3. **Use Cases:** Const enums are beneficial when you want to optimize for smaller JavaScript output and potentially better performance, especially if you have many enum references in your code. However, they sacrifice runtime introspection and flexibility.

**Which to Use:**

- Use **enum** when you need a set of named constants with runtime representation, and you want flexibility in assigning custom numeric values or working with enum values at runtime.

- Use **const enum** when you want to optimize for smaller JavaScript bundles and potentially better performance, especially if you have a large number of enum references in your code. However, be aware that changes to const enums might require recompiling dependent code.

    In most cases, regular **enum** is more flexible and easier to work with, making it a suitable choice for many scenarios. ** Const enum** is a performance optimization that should be considered when dealing with large - scale applications and a need for smaller output size is critical.
*/
// Code of enum and const enum d:\Online_Work\github-repos\Web3MetaverseCourse\Class07\concepts.ts
//How will we output red by it’s string index?
var myVal;
(function (myVal) {
    myVal["red"] = "red1";
    myVal["green"] = "green1";
    myVal["yellow"] = "yellow1";
})(myVal || (myVal = {}));
// console.log(myVal[“red1”]); // error
console.log(myVal["red"]); // This will output "red"
export {};
