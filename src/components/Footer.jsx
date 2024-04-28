import React from "react";
import logo from "../assets/images/logo.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import Linkedin from "../assets/images/linkedin.png";
const Footer = () => {
  return (
    <div className="bg-[#010851] max-w-screen-2xl mx-auto p-4 md:px-12">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl flex  items-center font-semibold font-jost text-primary space-x-3"
          >
            <img src={logo} className="w-10 inline-block items-center" alt="" />
            <span className="inline-block text-white">XZY</span>
          </a>
          <p className="md:w-1/2 2xl:text-2xl text-white">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#9A7AF135] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-secondary px-4 py-2 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col flex-wrap md:flex-row justify-between gap-8 items-start ">
          <div className="space-y-4 mt-5 ">
            <h4 className="text-xl text-white">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="" className="block text-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="" className="block text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="block text-white">
                  About
                </a>
              </li>
              <li>
                <a href="" className="block text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 mt-5 ">
            <h4 className="text-xl text-white">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="" className="block text-white">
                  {" "}
                  How does it works?
                </a>
              </li>
              <li>
                <a href="" className="block text-white">
                  Where to ask question?
                </a>
              </li>
              <li>
                <a href="" className="block text-white">
                  How to play?
                </a>
              </li>
              <li>
                <a href="" className="block text-white">
                  What is needed for this?
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 mt-5 ">
            <h4 className="text-xl text-white">Contacts</h4>
            <ul className="space-y-3">
              <li>
                <p className="block text-white">
                  (012) 1234-567-890
                </p>
              </li>
              <li>
                <p className="block text-white">
                  123 xyz xyz
                </p>
              </li>
              <li>
                <p className="block text-white">
                  qwuerybaihefv, qiwu - hrebcl
                </p>
              </li>
              <li>
                <p className="block text-white">
                  095467
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
    <div className="flex sm:flex-row flex-col sm:items-center justify-between py-8">
      <p className="text-white text-2xl font-jost font-normal">@ XYZ 20XX --- 20XX. All rights reserved.</p>
      <div className="flex space-x-5 items-center">
        <img src={Facebook} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
        <img src={Instagram} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
        <img src={Twitter} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
        <img src={Linkedin} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
      </div>
    </div>
    </div>
  );
};

export default Footer;
