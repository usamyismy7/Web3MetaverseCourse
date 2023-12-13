/*
Q1.
Also practice what we have studied in class about callback.
Create an example of callback like we have done in class.
Also transform that example into promises.

A.
*/
// Callbacks Example:
function fetchData(callback) {
  setTimeout(() => {
    const data = "Callback Example Data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log(`Processing: ${data}`);
}

fetchData(processData);

// Transformation into Promises:
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Promise Example Data";
      resolve(data);
    }, 2000);
  });
}

fetchDataPromise()
  .then((data) => {
    console.log(`Processing: ${data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

/*
Q2.
You should know why we are using callbacks and what are advantages and disadvantages of callback and then why we move to promises. Create a 1 paragraph note for your own understanding.

A.
Callbacks are used in JavaScript to handle asynchronous operations by passing a function (callback) to be executed after the completion of the task. Advantages of callbacks include simplicity and readability of code. However, drawbacks like callback hell (nested callbacks) and difficulty in error handling led to the adoption of promises. Promises provide a cleaner and more structured approach to handle asynchronous operations. They offer chaining for better readability, error handling through `catch`, and the ability to handle asynchronous tasks in a more synchronous-looking manner using `async/await`. This transition to promises enhances code maintainability and makes handling asynchronous tasks more manageable. In summary, while callbacks served their purpose, promises offer a more elegant and robust solution for asynchronous programming in JavaScript.
*/
