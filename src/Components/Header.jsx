import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Group 2.png";
function Header() {
  return (
    <div className="absolute text-white z-50 mt-10 w-11/12 right-0">
      <header className="flex items-center w-full justify-between">
        <div>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="relative">
          <div className="h-px w-2/4 hidden xl:block bg-white absolute z-50 top-1/2 -left-2/4"></div>
          <nav className="custom-bg py-10 xl:pr-40 pr-12 xl:pl-32 pl-12">
            <ul className="flex items-center gap-x-12 uppercase text-lg tracking-widest text-white">
              <li className="felx">
                <Link to="/home" className="flex">
                  <span className="block md:hidden lg:block mr-3">00</span>home
                </Link>
              </li>
              <li>
                <Link to="/destination" className="flex">
                  <span className="block md:hidden lg:block mr-3">01</span>
                  destination
                </Link>
              </li>
              <li>
                <Link to="/crew" className="flex">
                  <span className="block md:hidden lg:block mr-3">02</span>crew
                </Link>
              </li>
              <li>
                <Link to="/technology" className="flex">
                  <span className="block md:hidden lg:block mr-3">03</span>
                  technology
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
