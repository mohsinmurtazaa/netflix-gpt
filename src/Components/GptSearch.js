import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../slices/moviesSlice";
import { API_HEADER, SEARCH_MOVIE_URL } from "../utils/Constants";
import language from "../utils/languageConstant";
import openai from "../utils/openAi";

const GptSearch = () => {
  const lang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchedText = useRef(null);
  const handleGptSearch = async () => {
    if (searchedText.current.value) {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            searchedText.current.value +
            "&include_adult=false&language=en-US&page=1",
          API_HEADER
        );
        if (!response.ok) {
          throw new Error(`Error status ${response.status}`);
        }
        const data = await response.json();
        dispatch(addSearchedMovies(data.results));
      } catch (error) {
        console.error(error);
      }
    }
    // let $query =
    //   "Recommend some good movies based on " +
    //   searchedText.current.value +
    //   "and only provide the name of movies.";
    // try {
    //   const chatCompletion = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: $query }],
    //     model: "gpt-3.5-turbo",
    //   });
    //   console.log(chatCompletion);
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchedText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 "
          onClick={handleGptSearch}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
