const APIKEY = "1be8a4759dcd7efa2a6fc31a47f6831d";

const requests = {
  fetchTrending: "trending/all/day?api_key=" + APIKEY,
  fetchNetflixOriginals: "discover/tv?api_key=" + APIKEY,
  fetchTopRated: "movie/top_rated?api_key=" + APIKEY,
  fetchActionMovie: "discover/movie?api_key=" + APIKEY + "&with_genres=28",
  fetchComedyMovies: "discover/movie?api_key=" + APIKEY + "&with_genres=35",
  fetchHorrorMovies: "discover/movie?api_key=" + APIKEY + "&with_genres=27",
  fetchRomanceMovies: "discover/movie?api_key=" + APIKEY + "&with_genres=10749",
  fetchDocumentaries: "discover/movie?api_key=" + APIKEY + "&with_genres=99",
};
export default requests;
