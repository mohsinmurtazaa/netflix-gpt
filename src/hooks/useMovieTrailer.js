import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../slices/moviesSlice";
import { API_HEADER } from "../utils/Constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_HEADER
      );
      if (!response.ok) {
        throw new Error(`Error Status ${response.status}`);
      }
      const data = await response.json();
      const filetrData = data.results.filter(
        (video) => video.type === "Teaser"
      );
      const trailer = filetrData.length === 0 ? data[0] : filetrData[0];
      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieVideo();
  }, []);
};
export default useMovieTrailer;
