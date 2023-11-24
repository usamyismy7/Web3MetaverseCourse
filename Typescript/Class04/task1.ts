// 0. put Zia in the end of array

let array = ["Usman", "Zia", "Wania"],
  temp;

console.log(array);

for (let i = 0; i < array.length; i++) {
  // i = 0, 1, 2
  for (let j = i + 1; j < array[i].length; j++) {
    // j = 1, 2, 3
    if (array[j] < array[i]) {
      // array[1] < array[0], array[2] < array[1], array[3] < array[2]
      temp = array[j]; // temp = array[1], array[2], array[3]
      array[j] = array[i]; // array[1] = array[0], array[2] = array[1], array[3] = array[2]
      array[i] = temp; // array[0] = temp, array[1] = temp, array[2] = temp
    }
  }
}

console.log(array);

console.log("\n");

// 1. Find Even Numbers in an Array

let num: number[] = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i]);
  }
}

console.log("\n");

// 2. Find Odd Numbers in an Array

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 != 0) {
    console.log(num[i]);
  }
}

console.log("\n");

//3. Find Sum of Array Elements

let sum: number = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}

console.log(sum + "\n");

// 4. Find Maximum Number of an Array

let max: number = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(max + "\n");

// 5. Filter Positive Number from an Array and their sum

let positive: number[] = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    positive.push(num[i]);
  }
}

console.log(positive + "\n");

// 6. Filter Negative Number from an Array and their sum

let negative: number[] = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] < 0) {
    negative.push(num[i]);
  }
}

console.log(negative + "\n");

// 2d Array

let arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]; // 2d array

console.log(arr);

console.log("\n");

let firstName: string[] = ["Usman", "Zia", "Wania"];
let lastName: string[] = ["Ahmed", "Khan", "Ali"];
let fullName: string[] = [];

for (let i = 0; i < 1; i++) {
  for (let j = 0; j < lastName.length; j++) {
    fullName.push(firstName[j] + " " + lastName[j]);
  }
}
console.log(fullName);

console.log("\n");

// accessing json objects
const detail = { name: "Vipin", age: 21 };

console.log(detail.name);

console.log(detail["age"]);
