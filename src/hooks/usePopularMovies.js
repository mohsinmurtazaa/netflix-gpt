import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../slices/moviesSlice";
import { API_HEADER, POPULAR_MOVIE_URL } from "../utils/Constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
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
    if (popularMovies === null) {
      fetchPopularMovies();
    }
  }, []);
};
export default usePopularMovies;
