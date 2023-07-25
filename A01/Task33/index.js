"use strict";
let arr = [];
for (let i = 1; i < 10; i++) {
    if (i === 1) {
        arr.push(i + "st");
    }
    else if (i === 2) {
        arr.push(i + "nd");
    }
    else if (i === 3) {
        arr.push(i + "rd");
    }
    else {
        arr.push(i + "th");
    }
}
for (let i of arr) {
    console.log(i);
}
