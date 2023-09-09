import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Group 2.png";
import openBurger from "../../public/open-hamburger.svg";
import closeBurger from "../../public/close-hamburger.svg";

import navbarData from "../../public/data.json/navbarData.json";

function Header() {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <div className="absolute top-4 max-w-1360 w-full">
      <nav className="flex items-center justify-between pt-5">
        <Link to="/" className="z-10">
          <img src={logo} alt="logo" className="w-10 ml-7" />
        </Link>
        <img
          src={
            activeNav
              ? "../../public/close-hamburger.svg"
              : "../../public/open-hamburger.svg"
          }
          alt="burger img"
          className="z-20 fixed right-5 top-6 cursor-pointer md:hidden"
          onClick={() => setActiveNav(!activeNav)}
        />
        <ul
          className={`bg-custom-bg backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0  
        md:h-auto h-screen duration-500 ease-linear ${
          !activeNav ? "right-[-100%]" : "right-0"
        }`}
        >
          <div className="h-px xl:w-2/4 2xl:w-2/4  hidden lg:block bg-white absolute z-50 top-1/2 right-right-90"></div>

          {navbarData.map((link, index) => (
            <li
              key={index}
              className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6"
            >
              <Link
                to={link.link}
                className="text-white text-lg md:py-5 py-3 inline-block font-normal uppercase"
              >
                <span className="font-bold mr-1.5">0{index}</span>
                {link.content}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;

// <div className="absolute text-white z-50 mt-10 w-11/12 right-0 ">
//       <header className="flex items-center w-full justify-between">
//         <div>
//           <Link to="/home">
//             <img src={logo} alt="logo" />
//           </Link>
//         </div>
//         <div className="bg-[#ffffff14] backdrop-blur-lg mg:pl-10 pr-28 z-10 md:static
//          fixed top-0 md:h-auto h-screen  ">
//           <div className="h-px xl:w-1/4 2xl:w-2/4  hidden lg:block bg-white absolute z-50 top-1/2 2xl:-left-96 xl:-left-48"></div>
//           <nav className="custom-bg py-10 xl:pr-40 pr-12 xl:pl-32 pl-12">
//             <ul className="flex items-center gap-x-12 uppercase text-lg tracking-widest text-white">
//               <li className="felx">
//                 <Link to="/home" className="flex">
//                   <span className="block md:hidden lg:block mr-3">00</span>home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/destination" className="flex">
//                   <span className="block md:hidden lg:block mr-3">01</span>
//                   destination
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/crew" className="flex">
//                   <span className="block md:hidden lg:block mr-3">02</span>crew
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/technology" className="flex">
//                   <span className="block md:hidden lg:block mr-3">03</span>
//                   technology
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div className="z-20 fixed right-5 top-6 cursor-pointer md:hidden ">
//           <button onClick={() => setActiveNav(!activeNav)}>
//             {activeNav ? (
//               <img src={closeBurger} alt="close icon" />
//             ) : (
//               <img src={openBurger} alt="open icon" />
//             )}
//           </button>
//         </div>
//       </header>
//     </div>
