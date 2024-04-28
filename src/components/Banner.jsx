import React from "react";
import bannerimg from "../assets/images/banner.png";
const Banner = ({banner,heading,subheading, btn1,btn2}) => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 md:px-12 mt-20 ">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <div>
            <img src={bannerimg} alt="" className="h-[386px]" />
          </div>
          <div className="md:w-3/5">
            <h2 className="font-jost font-bold text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-relaxed text-white mb-6">
              {heading}
            </h2>
            <p className="mb-8 text-[#EBEBEB] text-[22px] 2xl:text-2xl ">
            {subheading}
            </p>
            <div className="space-x-5 space-y-4">
              <button className="btnPrimary ">{btn1}</button>
              <button className="btnPrimary">{btn2}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
