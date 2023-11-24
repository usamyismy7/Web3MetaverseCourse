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
