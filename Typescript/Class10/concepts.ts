import { log } from "console";

// functions
function numbers(a: number, b?: number) {
  log(a);
  log(b);
  log("\n");
}

numbers(1);

// callbacks
// callback is a function that is passed as an argument to another function
// pass a function within a function as a parameter

// example 1
function task1(anyfunction: any) {
  log("do something");
  anyfunction("we are passing values to callback");
}

function secondTask(text: string) {
  log(`this is a callback function: ${text}`);
}
task1(secondTask);
log("\n");

// example 2
function cloth(myFunc: (text: string) => void) {
  log("is my clothes ready?");
  log("calling my clothes callback: ");
  myFunc("yes, clothes are ready!");
}

function clothCallback(text: string) {
  log(text);
}

cloth(clothCallback);
log("\n");

// example 3
// function carMaintenance(cb: (text: string) => void) {
//   log("I leave my care at 9 in workshop");
//   setTimeout(() => {
//     log("Car is fixed...");
//     cb("Your car is ready");
//   }, 2000);
// }

// function carMaintenanceCallback(text: string) {
//   log("Car Maintenance callback...", text);
//   pickDress(pickDressCallback);
// }

// function pickDress(callback: (text: string) => void) {
//   setTimeout(() => {
//     log("Your dress is ready");
//     callback("pick your dress");
//   }, 100);
// }

// function pickDressCallback(text: string) {
//   log("this is dress callback", text);
//   attendEvent();
// }

// function attendEvent() {
//   log("Now you can attend the event");
// }

// carMaintenance(carMaintenanceCallback);

// example 4
// let's make callback hell
function carMaintenance(cb: (text: string) => void) {
  log("I leave my care at 9 in workshop");
  setTimeout(() => {
    log("Car is fixed...");
    cb("Your car is ready");
  }, 2000);
}

carMaintenance(function carMaintenanceCallback(text: string) {
  log("Car Maintenance callback...", text);
  function pickDress(callback: (text: string) => void) {
    setTimeout(() => {
      log("Your dress is ready");
      callback("pick your dress");
    }, 100);
  }
  pickDress(function pickDressCallback(text: string) {
    log("this is dress callback", text);
    function attendEvent() {
      log("Now you can attend the event");
    }
    attendEvent();
  });
});

// promises
// do callback example 4 wit promises
