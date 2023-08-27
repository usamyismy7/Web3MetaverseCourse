// Building a Blog System

/*
Imagine you're developing a TypeScript application for a blogging platform.Create the following types and interfaces:

Define an interface Author with properties like id, name, and bio.

Create a type Comment that represents an object with author (of type Author), content, and timestamp.

Define an interface Post with properties like id, title, content, author (of type Author), and an array of Comments.

Implement a function that sorts posts based on their number of comments.
*/

interface Author {
  id: number;
  name: string;
  bio: string;
}

type Comment = {
  author: Author;
  content: string;
  timestamp: Date;
};

interface Post {
  id: number;
  title: string;
  content: string;
  author: Author;
  comments: Comment[];
}

function sortPosts(posts: Post[]): Post[] {
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
