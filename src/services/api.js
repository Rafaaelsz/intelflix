import axios from "axios";

// BASE DA URL DA API: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=65316834fc77b1769d085f1d96222dba&language=pt-br

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
