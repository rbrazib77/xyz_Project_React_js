import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuopen, setIsMenuopen] = useState(false);

  const toggleMenu = () => {
    setIsMenuopen(!isMenuopen);
  };
  const navitem = [
    { link: "Overview", path: "/" },
    { link: "Feature", path: "/features" },
    { link: "About", path: "/about" },
    { link: "Pricing", path: "/pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0">
        <div className="text-xl container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl flex  items-center font-semibold font-jost text-primary space-x-3"
            >
              <img
                src={logo}
                className="w-10 inline-block items-center"
                alt=""
              />
              <span className="inline-block">XZY</span>
            </a>
            {/* Showing navitem use map */}
            <ul className="md:flex space-x-12 hidden">
              {navitem.map(({ link, path }) => (
                <NavLink key={link} to={path} spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className="block hover:text-red-500">
                  {link}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center ">
            <a href="" className="hidden lg:flex items-center">
              <GrLanguage className="mr-2" />
              Language
            </a>
            <button className="bg-secondary py-2 px-4 font-jost font font-semibold  transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>
          {/* Menu btn */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-500 "
            >
              {isMenuopen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-24 bg-secondary text-xl ${
          isMenuopen ? "block fixed top-0 left-0 right-0" : "hidden"
        }`}
      >
        {navitem.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-red-500">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
