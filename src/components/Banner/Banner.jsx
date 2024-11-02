import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-green-50 rounded-xl h-fit">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-24">
        <img
          src={bannerImg}
          className="w-[100%] lg:w-[50%] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn mt-10 bg-[#23be0a] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
