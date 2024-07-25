import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../slices/moviesSlice";
import { API_HEADER, UPCOMING_MOVIE } from "../utils/Constants";

const useUpcomingMovie = () => {
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
    fetchUpcomingMovie();
  }, []);
};
export default useUpcomingMovie;
