import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../slices/moviesSlice";
import { API_HEADER, NOW_PLAYING_URL } from "../utils/Constants";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    try {
      const response = await fetch(NOW_PLAYING_URL, API_HEADER);
      if (!response.ok) {
        throw new Error(`Error Status ${response.status}`);
      }
      const data = await response.json();
      dispatch(addNowPlayingMovie(data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
