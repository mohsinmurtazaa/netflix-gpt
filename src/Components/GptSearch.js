import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const GptSearch = () => {
  const lang = useSelector((store) => store.config.lang);
  console.log("lang", lang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 ">
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
