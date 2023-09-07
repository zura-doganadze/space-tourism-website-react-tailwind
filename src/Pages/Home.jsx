import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="flex bg-hero-bg h-screen bg-center bg-cover  ">
      <div className="flex md:flex-row	flex-col items-center justify-around mt-72 w-full">
        <div className="text-[#FFF] ">
          <h2 className="text-3xl font-BarlowCondesed">SO, YOU WANT TO TRAV</h2>
          <h1 className="text-150  ">SPACE</h1>
          <p className="flex text-md w-96">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div
          className="flex items-center justify-center h-56 w-56 rounded-full bg-[#fff] cursor-pointer 
         hover:ring-[5rem] ring-white ring-opacity-10 transition-all"
        >
          <Link to="/destination" className=" text-3xl uppercase">
            explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
