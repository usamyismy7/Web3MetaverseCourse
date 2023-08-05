// return index of missing indexes of the list from the array [21, 25, 30, 45], the complete list is [21-45] ?
// creating 2 lists
var selectedList = [21, 25, 30, 45];
var completeList = [];
var x = 21;
for (var i = 0; i < 25; i++) {
    completeList.push(x);
    x++;
}
console.log("selected array: ", selectedList);
console.log("\ncomplete array: ", completeList);
// complete indexes list
var completeIndexes = [];
completeList.forEach(function (item, index) {
    completeIndexes.push(index);
});
console.log("\nindex of complete array: ", completeIndexes);
// selected indexes list
var selectedIndexes = completeList.reduce(function (result, element, index) {
    if (selectedList.includes(element)) {
        result.push(index);
    }
    return result;
}, []);
console.log("\ncommon indexes: ", selectedIndexes);
// completeIndexes after deducting from selectedIndexes
var resultIndexes = completeIndexes.filter(function (item) { return !selectedIndexes.includes(item); });
console.log("\nfinal indexes after deducting from selected indexes: ", resultIndexes);
