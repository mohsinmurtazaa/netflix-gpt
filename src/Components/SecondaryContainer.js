import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-60 pl-12 relative z-20">
          {movies.nowPlaying && (
            <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          )}
          {movies.topRatedMovies && (
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          )}
          {movies.upComingMovies && (
            <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
          )}
          {movies.popularMovies && (
            <MovieList title={"Popular"} movies={movies.popularMovies} />
          )}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
