import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-15 absolute font-white bg-gradient-to-r from-gray-700 ">
      <h1 className="text-6xl text-white font-bold pl-10 drop-shadow-lg  ">{title}</h1>
      <p className="p-10 text-lg w-1/2 text-gray-300 leading-relaxed drop-shadow-md">{overview}</p>
      <div className="pl-10 flex gap-4">
        <button className="bg-white text-black p-4 px-8 text-xl font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white p-4 px-8 text-xl font-semibold rounded-lg bg-opacity-80 hover:bg-opacity-100 transition-all duration-300">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
