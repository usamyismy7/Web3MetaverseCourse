const fs = require("fs");
const path = require("path");
const http = require("http");
// 1. cancelling a fetch request
// step 1: initiate the abort controller
// const controller = new AbortController();
// step 2: make the fetch() aware of controller.signal
// fetch(..., { signal: controller.signal });
// step 3: cancel the fetch request
// controller.abort();
let controller = null;

// create a server object
http
  .createServer((req, res) => {
    try {
      // check the request url
      if (req.url === "/") {
        // read the index.html file
        fs.readFile(path.join(__dirname, "index.html"), function (err, data) {
          if (err) {
            // handle the error
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          // send the index.html ile
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      } else if (req.url === "/movies") {
        // read the movies.json file
        fs.readFile(
          path.join(__dirname, "/movies/movies.json"),
          function (err, data) {
            if (err) {
              // handle the error
              res.writeHead(404);
              res.end(JSON.stringify(err));
              return;
            }
            // send the movies.json file
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
          }
        );
      } else if (req.url === "/browser.js") {
        // read the browser.js file
        fs.readFile(path.join(__dirname, "browser.js"), function (err, data) {
          if (err) {
            // handle the error
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          // send the browser.js file
          res.writeHead(200, { "Content-Type": "application/javascript" });
          res.end(data);
        });
      } else {
        // handle the error
        res.writeHead(404);
        res.end("Not Found");
      }
    } catch (error) {
      console.error(error.message);
    }
  })
  .listen(8080, () => console.log("server running at http://localhost:8080")); // server runs on localhost:8080
