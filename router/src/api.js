import axios from "axios";

const API_KEY = "3e7b3d445b9d60ba017757fa0e7e53e1";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: API_KEY },
});

export const fetchTrendingMovies = async () => {
  const res = await apiClient.get("/trending/movie/day");
  return res.data;
};

export const searchMovies = async (query) => {
  const res = await apiClient.get("/search/movie", { params: { query } });
  return res.data;
};

export const getMovieDetails = async (id) => {
  const res = await apiClient.get(`/movie/${id}`);
  return res.data;
};

export const getMovieCredits = async (id) => {
  const res = await apiClient.get(`/movie/${id}/credits`);
  return res.data;
};

export const getMovieReviews = async (id) => {
  const res = await apiClient.get(`/movie/${id}/reviews`);
  return res.data;
};
