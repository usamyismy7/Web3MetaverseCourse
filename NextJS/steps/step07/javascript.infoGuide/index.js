/*
Tasks:
Fetch users from GitHub
Create an async function getUsers(names), that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users.

The GitHub url with user information for the given USERNAME is: https://api.github.com/users/USERNAME.

There’s a test example in the sandbox.

Important details:

There should be one fetch request per user.
Requests shouldn’t wait for each other. So that the data arrives as soon as possible.
If any request fails, or if there’s no such user, the function should return null in the resulting array.
*/

// async function getUsers(names) {
//   const userPromises = names.map(async (name) => {
//     try {
//       const response = await fetch(`https://api.github.com/users/${name}`);
//       if (response.ok) {
//         return response.json();
//       } else {
//         return null; // If there's no such user
//       }
//     } catch (error) {
//       return null; // If request fails
//     }
//   });

//   const users = await Promise.all(userPromises);
//   return users;
// }

// // Example usage
// const names = ["user1", "user2", "user3"];
// getUsers(names)
//   .then((users) => console.log(users))
//   .catch((error) => console.error(error));

async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  console.log(results);
  return results;
}
getUsers(["user1", "user2", "user3"]);

/*
In this async function, we use the fetch API inside a map to create an array of promises for each user. We then use Promise.all to await all promises, which ensures that requests don't wait for each other. If any request fails or there's no such user, it returns null in the resulting array.
*/
