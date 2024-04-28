import React from "react";
import Banner from "./Banner";
import bannerimg from "../assets/images/banner.png";
const Newsletter = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 md:px-12 mt-10">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-3/4">
            <h2 className="font-jost font-bold text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-relaxed text-white mb-6">
              Each student an share their discount code for friends
            </h2>
            <p className="mb-8 text-[#EBEBEB] text-[22px] 2xl:text-2xl ">
              A simple paragraph is comprised of three major components. The
              first sentence, which is often a declarative sentence, is called
              the “topic sentence.”
            </p>
            <div className="space-x-5 space-y-4">
              <button className="btnPrimary ">I have a code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
