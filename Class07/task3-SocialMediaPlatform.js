// Social Media Platform
function findMostLikedPost(profiles) {
    const posts = profiles.flatMap((profile) => profile.posts);
    const mostLikedPost = posts.reduce((prev, curr) => prev.likes.length > curr.likes.length ? prev : curr);
    return mostLikedPost;
}
const mostLikedPost = findMostLikedPost([
    {
        id: 1,
        username: "John",
        bio: "Lorem ipsum dolor sit amet",
        posts: [
            {
                id: 1,
                title: "Post 1",
                content: "Lorem ipsum dolor sit amet",
                user: {
                    id: 1,
                    name: "John",
                    bio: "Lorem ipsum dolor sit amet",
                },
                comments: [
                    {
                        id: 1,
                        user: {
                            id: 2,
                            name: "Mary",
                            bio: "Lorem ipsum dolor sit amet",
                        },
                        content: "Lorem ipsum dolor sit amet",
                        timestamp: new Date(),
                    },
                ],
                likes: [
                    {
                        user: {
                            id: 2,
                            name: "Mary",
                            bio: "Lorem ipsum dolor sit amet",
                        },
                        timestamp: new Date(),
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        username: "Mary",
        bio: "Lorem ipsum dolor sit amet",
        posts: [
            {
                id: 2,
                title: "Post 2",
                content: "Lorem ipsum dolor sit amet",
                user: {
                    id: 2,
                    name: "Mary",
                    bio: "Lorem ipsum dolor sit amet",
                },
                comments: [
                    {
                        id: 2,
                        user: {
                            id: 1,
                            name: "John",
                            bio: "Lorem ipsum dolor sit amet",
                        },
                        content: "Lorem ipsum dolor sit amet",
                        timestamp: new Date(),
                    },
                    {
                        id: 3,
                        user: {
                            id: 3,
                            name: "Peter",
                            bio: "Lorem ipsum dolor sit amet",
                        },
                        content: "Lorem ipsum dolor sit amet",
                        timestamp: new Date(),
                    },
                ],
                likes: [
                    {
                        user: {
                            id: 1,
                            name: "John",
                            bio: "Lorem ipsum dolor sit amet",
                        },
                        timestamp: new Date(),
                    },
                    {
                        user: {
                            id: 3,
                            name: "Peter",
                            bio: "Lorem ipsum dolor sit amet",
                        },
                        timestamp: new Date(),
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        username: "Peter",
        bio: "Lorem ipsum dolor sit amet",
        posts: [
            {
                id: 3,
                title: "Post 3",
                content: "Lorem ipsum dolor sit amet",
                user: {
                    id: 3,
                    name: "Peter",
                    bio: "Lorem ipsum dolor sit amet",
                },
                comments: [],
                likes: [],
            },
        ],
    },
]);
console.log(mostLikedPost);
export {};
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
