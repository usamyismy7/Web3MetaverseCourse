const usernames: string[] = ["admin", "usama", "ali", "hamza", "haris"];

for (let username of usernames) {
    if (username === "admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}