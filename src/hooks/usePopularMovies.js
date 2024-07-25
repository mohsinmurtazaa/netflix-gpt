import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../slices/moviesSlice";
import { API_HEADER, POPULAR_MOVIE_URL } from "../utils/Constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(POPULAR_MOVIE_URL, API_HEADER);
      if (!response.ok) {
        throw new Error(`Error status ${response.status}`);
      }
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};
export default usePopularMovies;
