import React from "react";

const MovieCard = ({ poster_path }) => {
  return (
    poster_path && (
      <div className="w-48 pr-4">
        <img
          alt="Movie Card"
          src={"https://image.tmdb.org/t/p/w500/" + poster_path}
        ></img>
      </div>
    )
  );
};

export default MovieCard;
