// Social Media Platform

/*
Develop a TypeScript application for a social media platform. Define the following types and interfaces:

Define an interface Profile with properties like id, username, bio, and an array of Posts.

Create a type Like that represents an object with user (of type User) and timestamp.

Define an interface Comment with properties like id, user (of type User), content, and timestamp.

Implement a function that finds the most liked post and the user who posted it
*/

interface Profile {
  id: number;
  username: string;
  bio: string;
  posts: Post[];
}

type Like = {
  user: User;
  timestamp: Date;
};

interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
  comments: Comment[];
  likes: Like[];
}

interface User {
  id: number;
  name: string;
  bio: string;
}

type Comment = {
  id: number;
  user: User;
  content: string;
  timestamp: Date;
};

function findMostLikedPost(profiles: Profile[]): Post | undefined {
  const posts = profiles.flatMap((profile) => profile.posts);
  const mostLikedPost = posts.reduce((prev, curr) =>
    prev.likes.length > curr.likes.length ? prev : curr
  );
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
