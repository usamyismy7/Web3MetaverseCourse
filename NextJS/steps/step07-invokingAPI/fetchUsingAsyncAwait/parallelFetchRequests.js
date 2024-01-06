const fs = require("fs");
const path = require("path");

// 2. parallel fetch requests
async function fetchMoviesAndCategories() {
  const [moviesData, categoriesData] = await Promise.all([
    fs.promises.readFile(path.join(__dirname, "/movies/movies.json"), "utf8"),
    fs.promises.readFile(
      path.join(__dirname, "/categories/categories.json"),
      "utf8"
    ),
  ]);
  const movies = JSON.parse(moviesData);
  const categories = JSON.parse(categoriesData);
  return [movies, categories];
}

fetchMoviesAndCategories()
  .then(([movies, categories]) => {
    console.log("movies and categories fetched successfully");
    console.log(movies, categories);
  })
  .catch((error) => {
    console.error(error);
  });
