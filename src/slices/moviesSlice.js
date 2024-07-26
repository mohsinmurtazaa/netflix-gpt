import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    movieTrailer: null,
    popularMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
    searchedMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovie,
  addMovieTrailer,
  addPopularMovies,
  addUpComingMovies,
  addTopRatedMovies,
  addSearchedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
