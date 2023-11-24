// explicit casting
let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string>myname).length);

// fresh object vs stale object
type bmwTypes = {
  model: string;
  mileage: number;
  color: string;
};
let BMW: bmwTypes = {
  model: "BMW",
  mileage: 10000,
  color: "red",
};
type lexusTypes = {
  model: string;
  mileage: number;
};
let lexus: lexusTypes = {
  model: "Lexus2020",
  mileage: 10000,
};
lexus = { model: "Lexus2023", mileage: 2000 }; // fresh
lexus = BMW; // stale
lexus = {
  model: "Lexus2025",
  mileage: 5000,
  // color: "red" // error
};

// object types
var x: { id: number; [x: string]: any };
x = { id: 1, name: "John" };
// "[x: string]" means that x(key/Name) can be any string
// and ":any" means the value can be any type
let y = { id: 200, address: "Islamabad" };
let d = { id: 300, area: "G-9" };
x = y;
x = d;
// y = d; // error

// enum
enum Color {
  Red,
  Green,
  Blue,
}
var z: Color = Color.Green;
console.log(z); // 1
enum Color1 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
var colorIndex: Color1 = Color1["Blue"];
console.log(colorIndex); // 4

// const enums
const enum Color2 {
  Red = 1,
  Green = 2,
  Blue,
}
var colorIndex1: Color2 = Color2["Red"];
// var colorIndex2: Color2 = Color2[2]; // not allowed with const enum
var colorIndex3: Color2 = Color2.Green;
console.log(colorIndex1); // 1
// console.log(colorIndex2); // error
console.log(colorIndex3); // 2

// difference between enum and const enum d:\Online_Work\github-repos\Web3MetaverseCourse\Class08\concepts.ts

// arrays
let array1: number[] = [1, 2, 3];
array1.push(4);
let array2: Array<number> = [1, 2, 3];

// never type
// what is never type in typescript?
// The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.
function error(message: string): never {
  throw new Error(message);
}
let result = error("Something went wrong");
console.log(result);

// unknown type
// difference in any and unknown in typescript? are they similar in any way?
/*
`any` and `unknown` are both TypeScript types that allow for more flexible type handling, but they serve different purposes and offer different levels of type safety. Here's a breakdown of the differences and similarities between `any` and `unknown`:

**1. Purpose:**

- `any`: Using `any` essentially turns off TypeScript's type checking for the variable it's applied to. It allows you to assign values of any type to that variable without causing type errors. This can be useful when you're migrating existing JavaScript code to TypeScript or when you're dealing with values of unknown or varying types.

- `unknown`: `unknown` was introduced to address some of the issues with using `any`. Unlike `any`, `unknown` doesn't allow you to perform arbitrary operations on it without first narrowing down its type. It encourages more type-safe coding practices by requiring you to explicitly handle and narrow the type before using it.

**2. Type Safety:**

- `any`: The `any` type provides minimal type safety. You can perform any operation on variables of type `any`, even if those operations are not type-safe. This can lead to runtime errors if the types don't match up as expected.

- `unknown`: The `unknown` type provides better type safety than `any`. You can't perform arbitrary operations on variables of type `unknown` without first checking and narrowing down their types. This means you need to handle the type uncertainty in a controlled manner, reducing the chances of runtime type-related errors.

**3. Type Assertions:**

- `any`: No type assertions are required when using `any`. You can freely convert `any` variables to other types without TypeScript's interference.

- `unknown`: When using `unknown`, you must use type assertions to convert the variable to a known type before performing operations that require a specific type. This makes it more explicit and helps catch potential type errors at compile time.

**4. Type Inference:**

- `any`: Variables of type `any` don't provide any useful type inference. TypeScript treats them as if they have the "any" type everywhere.

- `unknown`: Variables of type `unknown` preserve their types through type inference. This means that if you narrow down the type of an `unknown` variable, TypeScript understands the narrowed type in subsequent operations.

**5. Encouraging Type Safety:**

- `any`: Using `any` can lead to neglecting type safety because TypeScript's type system doesn't enforce strict type checks on these variables.

- `unknown`: Using `unknown` encourages better type safety practices by requiring developers to handle and confirm types before using variables.

In summary, while `any` and `unknown` both offer flexibility in handling variables of uncertain types, `unknown` is designed to be more type-safe by requiring explicit type checks and type assertions. Using `unknown` encourages better coding practices and reduces the likelihood of type-related runtime errors that might occur when using `any`.
*/

/*
The `map` and `flatMap` methods are both used for transforming arrays in JavaScript. They work differently in terms of the structure of the resulting array:

1. **`map` Method:**

The `map` method creates a new array by applying a provided function to each element of the original array. The resulting array will have the same length as the original array, and each element is the result of applying the provided function to the corresponding element of the original array.

```javascript
const originalArray = [1, 2, 3];
const mappedArray = originalArray.map((num) => num * 2);

// mappedArray: [2, 4, 6]
```

In the context of your code, if you were to use `map`, it would create an array of arrays (nested arrays) containing posts for each profile. The result would not be flattened.

2. **`flatMap` Method:**

The `flatMap` method is similar to `map`, but it also flattens the resulting array. It first maps each element using a mapping function and then flattens the result into a new array. This is especially useful when you want to transform and concatenate arrays within an array.

```javascript
const originalArray = [[1], [2], [3]];
const flatMappedArray = originalArray.flatMap((arr) => arr);

// flatMappedArray: [1, 2, 3]
```

In the context of your code, using `flatMap` as you've done creates a single array that contains all the posts from all profiles, flattening the array of arrays.

The key difference between `map` and `flatMap` is that `flatMap` handles the flattening of nested arrays automatically. If you only used `map` in your code, you would end up with a nested array structure.

In your specific case, since you want to work with a flat array of posts across all profiles, `flatMap` is more appropriate. It simplifies the structure by giving you an array of posts directly without additional nesting.
*/

/*
The `flatMap` function is a higher-order array method in JavaScript that combines the effects of both `map` and `flat` in a single operation. It is used to transform each element of an array using a mapping function and then flattens the resulting mapped array into a single array.

Here's a breakdown of what `flatMap` does:

1. **Mapping**: For each element in the original array, the provided mapping function is called. This function takes an element as an argument and returns an array of values.

2. **Flattening**: The arrays returned by the mapping function are then concatenated or "flattened" into a single array.

The resulting array contains the concatenated values from all the arrays returned by the mapping function.

Here's an example to illustrate `flatMap`:

```javascript
const numbers = [1, 2, 3, 4];

const mappedAndFlattened = numbers.flatMap(number => [number, number * 2]);

console.log(mappedAndFlattened); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
```

In this example, the mapping function `[number, number * 2]` returns an array containing the original number and its double. The `flatMap` function applies this mapping function to each element of the `numbers` array and then flattens the resulting arrays into a single array.

Keep in mind that the main benefit of `flatMap` is that it handles the flattening process automatically, making your code more concise and readable when you need to map and flatten arrays simultaneously. It's particularly useful when working with arrays of arrays or when you want to transform and combine values in a structured way.
*/
