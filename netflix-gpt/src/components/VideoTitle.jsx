/* eslint-disable react/prop-types */



const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div className="">
        <button className="bg-white text-black font-lg rounded-lg p-4 px-12 text-xl hover:opacity-30  ">▶️ Play</button>
        <button className="mx-2 bg-gray-600 text-white font-lg rounded-lg p-4 px-12 text-xl opacity-50 ">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
