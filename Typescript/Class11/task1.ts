// 1 - push
console.log([1, 2, 3].push(4)); // [1,2,3,4]

// 2 - pop
console.log([1, 2, 3].pop()); // [1,2]

// 3 - shift
console.log([1, 2, 3].shift()); // [2,3]

// 4 - unshift
console.log([1, 2, 3].unshift(0)); // [4,1,2,3]

// 5 - concat
console.log(["a", "b"].concat("c")); // ['a','b','c']

// 6 - join
console.log(["a", "b", "c"].join("-")); // 'a-b-c'

// 7 - slice
console.log(["a", "b", "c"].slice(1)); // ['b','c']

// 8 - indexOf
console.log(["a", "b", "c"].indexOf("b")); // 1

// 9 - includes
console.log(["a", "b", "c"].includes("c")); // true

// 10 - find
console.log([3, 5, 6, 8].find((n) => n % 2 === 0)); // 6

// 11 - findIndex
console.log([2, 4, 3, 5].findIndex((n) => n % 2 !== 0)); // 2

// 12 - map
console.log([3, 4, 8, 6].map((n) => n * 2)); // [6,8,16,12]

// 13 - filter
console.log([1, 4, 7, 8].filter((n) => n % 2 === 0)); // [4,8]

// 14 - reduce
console.log([2, 4, 3, 7].reduce((acc, cur) => acc + cur)); // 16

// 15 - every
console.log([2, 3, 4, 5].every((x) => x < 6)); // true

// 16 - some
console.log([3, 5, 6, 8].some((x) => x > 6)); // true

// 17 - reverse
console.log([1, 2, 3, 4].reverse()); // [4,3,2,1]

// 18 - at
console.log([3, 5, 7, 8].at(-2)); // 7
