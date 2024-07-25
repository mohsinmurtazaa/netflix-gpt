import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{description}</p>
      <div className="">
        <button className="bg-white hover:bg-opacity-50 text-black py-2 px-10 rounded-lg text-lg mr-2">
          ▶️ Play
        </button>
        <button className="bg-gray-500 hover:bg-opacity-50 text-white py-2 px-8 rounded-lg text-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
