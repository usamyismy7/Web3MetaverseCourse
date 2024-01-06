// select the buttons by their id attributes
const fetchMoviesButton = document.getElementById("fetch-movies");
const cancelFetchMoviesButton = document.getElementById("cancel-fetch-movies");

fetchMoviesButton.addEventListener("click", async () => {
  controller = new AbortController();
  try {
    const response = await fetch("/movies", { signal: controller.signal });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(JSON.stringify(data));
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
