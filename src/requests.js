const APIKEY = "05dcb712e790ec50310bb5bb360ff188";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  //   fetchActionMovies: `/movie?api_key=${APIKEY}&with_genres=28`,
  //   fetchComedyMovies: `/movie?api_key=${APIKEY}&with_genres=35`,
  //   fetchHorrorMovies: `/movie?api_key=${APIKEY}&with_genres=27`,
  //   fetchRomanceMovies: `/discover/romance?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchUpcoming: `/movie/upcoming?api_key=${APIKEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${APIKEY}&language=en-US`,
};

export default requests;
