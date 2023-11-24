import { log } from "console";

// enum and const enum

enum matchResults {
  win = "won",
  lose = "lose",
  tie = "tie",
}

let team1Score = 3;
let team2Score = 5;

log(`team 1 has ${team1Score} score and team 2 has ${team2Score} score`);
if (team1Score > team2Score) {
  console.log(
    `team 1 has ${matchResults.win} and team 2 has ${matchResults.lose}`
  );
} else if (team1Score < team2Score) {
  console.log(
    `team 1 has ${matchResults.lose} and team 2 has ${matchResults.win}`
  );
} else if (team1Score === team2Score) {
  console.log(matchResults.tie);
}

const enum Color1 {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}
// var colorName: string = Color1[2]; // Not allowed in const enum
var colorName = Color1["Blue"];
log(colorName);

// arrays

const myArray1: string[] = ["a", "b", "c"];
const myArray2: string[] = new Array("d", "e", "f");
const myArray3: Array<number> = [1, 2, 3];

log(myArray1);
log(myArray2.indexOf("e"));
log(myArray3.lastIndexOf(2));

let myArray4: Array<string> = myArray1.concat(myArray2);
log(myArray4);

myArray4.push("g");
log(myArray4);

let myArray5 = [...myArray3];
log(myArray5);

log(myArray4.join("-"));
log(typeof myArray4.join("-"));
log(myArray4.join(",").split(","));

// functions

function addNumbers(a: number, b: number): number {
  return a + b;
}
log(addNumbers(1, 2));
let sum = addNumbers(5, 6);
log(sum);

let subtract = function (a: number, b: number): number {
  return a - b;
};
log(subtract(20, 10));

const multiply = (a: number, b: number): number => {
  return a * b;
};
log(multiply(5, 6));

const divide = (a: number, b: number): number => a / b;
log(divide(20, 10));

// optional parameters
function addNumbers1(a: number, b: number, c?: any): number {
  return a + b + c;
}
log(addNumbers1(1, 2, 3));

// default parameters
function addNumbers2(a: number, b: number, c: number = 0): number {
  return a + b + c;
}
log(addNumbers2(1, 2));

// rest parameters
function addNumbers3(a: number, b: number, ...c: number[]): number {
  let total = a + b + c.reduce((a, b) => a + b, 0);
  // for (let i = 0; i < c.length; i++) {
  //     total += c[i];
  // }
  return total;
}
log(addNumbers3(1, 2, 3, 4, 5));

// async functions
log("task 1");
log("task 2");
log("task 3");
setTimeout(() => {
  log("task 4"); // 3 seconds
}, 3000);

// what is event loop?
// event loop is a mechanism that allows node.js to perform non-blocking I/O operations. This means that node.js can perform other tasks while waiting for the completion of these operations. It is event-driven and single-threaded. This means that all I/O operations are queued in the event loop and are processed one by one in a single thread. The event loop is in charge of sending the queued events to the V8 JavaScript Engine and calling the callback function. When the callback function is called, the event is completed and removed from the event queue. The event loop keeps on running as long as there are events in the queue. When the queue is empty, the event loop waits for new events to arrive. The event loop is also in charge of handling errors that may occur in the callback function. If an error occurs, the event loop will throw an error and stop the program.
