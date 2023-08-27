// Building a Blog System
function sortPosts(posts) {
    return posts.sort((a, b) => b.comments.length - a.comments.length);
}
const sortingposts = sortPosts([
    {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet",
        author: {
            id: 1,
            name: "John",
            bio: "Lorem ipsum dolor sit amet",
        },
        comments: [
            {
                author: {
                    id: 2,
                    name: "Mary",
                    bio: "Lorem ipsum dolor sit amet",
                },
                content: "Lorem ipsum dolor sit amet",
                timestamp: new Date(),
            },
        ],
    },
    {
        id: 2,
        title: "Post 2",
        content: "Lorem ipsum dolor sit amet",
        author: {
            id: 2,
            name: "Mary",
            bio: "Lorem ipsum dolor sit amet",
        },
        comments: [
            {
                author: {
                    id: 1,
                    name: "John",
                    bio: "Lorem ipsum dolor sit amet",
                },
                content: "Lorem ipsum dolor sit amet",
                timestamp: new Date(),
            },
            {
                author: {
                    id: 3,
                    name: "Peter",
                    bio: "Lorem ipsum dolor sit amet",
                },
                content: "Lorem ipsum dolor sit amet",
                timestamp: new Date(),
            },
        ],
    },
    {
        id: 3,
        title: "Post 3",
        content: "Lorem ipsum dolor sit amet",
        author: {
            id: 3,
            name: "Peter",
            bio: "Lorem ipsum dolor sit amet",
        },
        comments: [],
    },
]);
console.log(sortingposts);
export {};
