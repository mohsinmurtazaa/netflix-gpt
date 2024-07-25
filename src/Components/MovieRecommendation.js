import React from "react";
import { LOGIN_URL } from "../utils/Constants";
import GptRecomendation from "./GptRecomendation";
import GptSearch from "./GptSearch";

const MovieRecommendation = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_URL} alt="Login Background" />
      </div>
      <GptSearch />
      <GptRecomendation />
    </div>
  );
};

export default MovieRecommendation;
