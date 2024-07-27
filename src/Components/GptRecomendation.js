import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";
import MovieList from "./MovieList";

const GptRecomendation = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  const lang = useSelector((store) => store.config.lang);
  return movies && movies.length !== 0 ? (
    <div
      className={`${
        movies !== null ? "bg-black" : ""
      } p-4 m-4 text-white bg-opacity-70`}
    >
      <div>
        <MovieList title={language[lang].searchedResult} movies={movies} />
      </div>
    </div>
  ) : (
    movies !== null && (
      <div class="flex justify-center ">
        <div class="bg-black p-6 m-20 w-1/2">
          <p class="text-white font-bold text-4xl text-center">
            No Result Found
          </p>
        </div>
      </div>
    )
  );
};

export default GptRecomendation;
