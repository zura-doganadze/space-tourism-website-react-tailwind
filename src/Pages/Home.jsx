import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex md:bg-desktop-bg  sm:bg-tablet-bg bg-mobile-bg bg-center bg-cover   ">
      <div className="flex md:flex-row	flex-col items-center justify-around md:mt-48 sm:mt-28 mt-28 w-full mb-28">
        <div className="text-[#FFF] flex flex-col items-center max-w-xl mx-7 ">
          <h2 className="md:text-3xl sm:text-xl text-lg font-BarlowCondesed">SO, YOU WANT TO TRAV</h2>
          <h1 className="sm:text-150  text-7xl my-6">SPACE</h1>
          <p className="flex sm:text-lg text-sm md:w-96  md:text-left text-center mb-20">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div
          className="flex items-center justify-center md:h-56 md:w-56 rounded-full bg-[#fff] cursor-pointer 
         hover:ring-[5rem] ring-white ring-opacity-10 transition-all"
        >
          <Link to="/destination" className=" sm:text-3xl text-xl uppercase sm:h-52 sm:w-52 h-44 w-44 flex items-center justify-center">
            explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
