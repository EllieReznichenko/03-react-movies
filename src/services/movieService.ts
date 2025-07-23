import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    config
  );

  return response.data.results;
};
