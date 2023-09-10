import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

import MobileBackgound from "../../public/destination/background-destination-mobile.jpg";
import TabletBackground from "../../public/destination/background-destination-tablet.jpg";
import DesktopBackgound from "../../public/destination/background-destination-desktop.jpg";
import moon from "../../public/destination/image-moon.png";

const Destination = () => {
  const [planets, setPlanet] = useState(data);

  return (
    <div className="relative md:h-screen h-full w-full">
      <img
        src={MobileBackgound}
        alt="backgound img"
        className="block md:hidden w-full "
      />
      <img
        src={TabletBackground}
        alt="backgound img"
        className="hidden md:block lg:hidden w-full"
      />
      <img
        src={DesktopBackgound}
        alt="backgound img"
        className="hidden lg:block w-full"
      />
      <div className="absolute md:text-left text-center top-36 w-full ">
        <h1 className="text-white text-2xl ml-32">
          <span className="font-bold text-[#ffffff70] mr-2">01</span>
          Pick your destination
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center  pt-6 ">
          {planets.destinations.map((planet) => {
            return (
              <div className="   max-w-sm w-full"  >
                <ul className="text-white pb-4">
                  <li
                    
                    className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 md:ml-2"
                  >  {planet.name}</li>
                </ul>
                <p>{planet.description}</p>
              </div>
            );
          })}
          {/* <img
            src={moon}
            alt=""
            className="md:w-[36%] w-[52%] md:py-0 py-4 md:mx-0 mx-auto"
          />
          <div className="   max-w-sm w-full">
            <ul className="text-white pb-4">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 md:ml-2">
                moon
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 ">
                moon
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 ">
                moon
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 ">
                moon
              </li>
            </ul>
            <h2 className="text-white w-full pb-2 text-7xl">moon</h2>
            <p
              className="text-[#d2d8f9] font-extralight text-sm   md:pl-1 mb-10 
                 tracking-wide border-b-[0.5px] border-[#ffffff66]"
            >
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <div className="flex gap-x-14   w-auto pt-10">
              <div>
                <span className="text-[#d2d8f9] text-sm">Avg. distance</span>
                <h3 className="text-xl text-white">384,400</h3>
              </div>
              <div>
                <span className="text-[#d2d8f9] text-sm">Est.travel time</span>
                <h3 className="text-xl text-white">3 days</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Destination;
