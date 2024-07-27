import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../slices/moviesSlice";
import { API_HEADER, UPCOMING_MOVIE } from "../utils/Constants";

const useUpcomingMovie = () => {
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const dispatch = useDispatch();
  const fetchUpcomingMovie = async () => {
    const response = await fetch(UPCOMING_MOVIE, API_HEADER);
    if (!response.ok) {
      throw new Error(`Error status ${response.status}`);
    }
    const data = await response.json();
    dispatch(addUpComingMovies(data.results));
  };
  useEffect(() => {
    // if (upComingMovies === null) {
    fetchUpcomingMovie();
    // }
  }, []);
};
export default useUpcomingMovie;
