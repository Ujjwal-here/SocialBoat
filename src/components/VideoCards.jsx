import React from "react";

const VideoCards = ({ results }) => {
  return (
    <>
      <div className="grid gap-5 grid-cols-1 mx-10 my-12 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 lg:gap-10  ">
        {results?.map((result, i) => {
          return (
            <div
              key={i}
              className=" rounded overflow-hidden shadow-lg bg-[#1B191A]"
            >
              <div className="px-6 pt-8 pb-4">
                <div className="mb-4">
                  <video
                    preload="none"
                    controls
                    width="100%"
                    poster="https://www.pexels.com/photo/barbells-on-gray-surface-669584/"
                  >
                    <source src={result.video} type="video/mp4" />
                  </video>
                </div>
                <p className="font-bold lg:text-2xl text-2xl break-all whitespace-normal text-white mb-2 ">
                  {result.heading}
                </p>
                <p className="font-thin text-sm break-all text-[#FD413C]">
                  {result.text}
                </p>
              </div>
              <div className="px-6 pb-4">
                <>
                  {result.tags.map((tag, i) => {
                    return (
                      <span
                        key={i}
                        className="inline-block rounded px-3 py-1 text-sm font-extralight border border-yellow-800 text-white mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoCards;
