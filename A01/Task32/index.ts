let current_users: string[] = ["admin", "usama", "Ali", "hamza", "haris"];

let new_users: string[] = ["usman", "ALI", "shahzaib", "haris", "talha"];

function check_new_users(user: string[]) {
  for (let username of user) {
    let username_lower = username.toLowerCase();
    if (current_users.includes(username_lower)) {
      console.log(
        `Username ${username_lower} already been used, enter a new username`
      );
    } else {
      console.log(`Username ${username_lower} is available`);
    }
  }
}

check_new_users(new_users);
