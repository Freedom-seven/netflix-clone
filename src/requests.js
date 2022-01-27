const APIKEY = "05dcb712e790ec50310bb5bb360ff188";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/disocver/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/disocver/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/disocver/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/disocver/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
