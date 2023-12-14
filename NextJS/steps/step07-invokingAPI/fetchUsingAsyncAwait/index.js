// 1. cancelling a fetch request
// step 1: initiate the abort controller
// const controller = new AbortController();
// step 2: make the fetch() aware of controller.signal
// fetch(..., { signal: controller.signal });
// step 3: cancel the fetch request
// controller.abort();

let controller = null;

fetchMoviesButton.addEventListener("click", async () => {
  controller = new AbortController();
  try {
    const response = await fetch("/movies", { signal: controller.signal });
  } catch (error) {
    console.error(error);
  }
  controller = null;
});

cancelFetchMoviesButton.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});

// 2. parallel fetch requests
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch("/movies"),
    fetch("/categories"),
  ]);
  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();
  return [movies, categories];
}

fetchMoviesAndCategories()
  .then(([movies, categories]) => {
    console.log(movies, categories);
  })
  .catch((error) => {
    console.error(error);
  });
