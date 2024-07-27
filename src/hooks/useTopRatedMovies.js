import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../slices/moviesSlice";
import { API_HEADER, TOP_RATED_MOVIE } from "../utils/Constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch(TOP_RATED_MOVIE, API_HEADER);
      if (!response.ok) {
        throw new Error(`Error status ${response.status}`);
      }
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (topRatedMovies === null) {
      fetchTopRatedMovies();
    }
  }, []);
};
export default useTopRatedMovies;
