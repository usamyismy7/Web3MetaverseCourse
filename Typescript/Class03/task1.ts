// Q. return a list of indexes of the array1 [21 to 45] digits, following elements [21, 25, 30, 45] indexes should be excluded from the array1 list of indexes ?

// creating 2 lists
let selectedList: number[] = [21, 25, 30, 45];
let completeList: number[] = [];
let x = 21;
for (let i = 0; i < 25; i++) {
    completeList.push(x);
    x++;
}
console.log("selected array: ", selectedList);
console.log("\ncomplete array: ", completeList);

// complete indexes list
let completeIndexes: number[] = [];
completeList.forEach((item, index) => {
    completeIndexes.push(index);
})
console.log("\nindex of complete array: ", completeIndexes);

// selected indexes list
const selectedIndexes: number[] = completeList.reduce((result: number[], element, index) => {
    if (selectedList.includes(element)) {
        result.push(index)
    }
    return result;
}, []);
console.log("\ncommon indexes: ", selectedIndexes);

// completeIndexes after deducting from selectedIndexes
let resultIndexes: number[] = completeIndexes.filter((item: number) => !selectedIndexes.includes(item));
console.log("\nfinal indexes after deducting from selected indexes: ", resultIndexes);