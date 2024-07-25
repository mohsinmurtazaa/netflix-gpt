import React from "react";
import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovie from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieRecommendation from "./MovieRecommendation";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.show);
  useNowPlaying();
  usePopularMovies();
  useUpcomingMovie();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGpt ? (
        <MovieRecommendation />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
