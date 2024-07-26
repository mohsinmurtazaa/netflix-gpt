import { async } from "@firebase/util";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";
import openai from "../utils/openAi";

const GptSearch = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchedText = useRef(null);
  const handleGptSearch = async () => {
    console.log("aa");
    let $query =
      "Recommend some good movies based on " +
      searchedText.current.value +
      "and only provide the name of movies.";
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: $query }],
        model: "gpt-3.5-turbo",
      });
      console.log(chatCompletion);
    } catch (error) {
      console.error(error);
    }
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
