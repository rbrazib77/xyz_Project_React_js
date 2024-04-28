import React from "react";
import featureimg from "../assets/images/feature.png";
const FeaturesItem = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 md:px-12 mt-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-2xl lg:w-1/2 mb-3 font-jost font-bold text-primary">
            Why we are better than others
          </h3>
          <p className="">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </div>
        <div className="w-full lg:w-3/4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start mdLgap-12 gap-8">
            <div className="rounded-[35px] bg-[rgba(255, 255, 255, 0.04) h-96 shadow shadow-red-300 p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                    <img src={featureimg} alt="" />
                    <h5 className="text-2xl font-jost font-semibold px-5 text-primary text-center">
                        Conventient study schedule
                    </h5>
                </div>
            </div>
            <div className="rounded-[35px] bg-[rgba(255, 255, 255, 0.04) h-96 shadow shadow-red-300 p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                <div>
                    <img src={featureimg} alt="" />
                    <h5 className="text-2xl font-jost font-semibold px-5 text-primary text-center">
                        Conventient study schedule
                    </h5>
                </div>
            </div>
            <div className="rounded-[35px] bg-[rgba(255, 255, 255, 0.04) h-96 shadow shadow-red-300 p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                    <img src={featureimg} alt="" />
                    <h5 className="text-2xl font-jost font-semibold px-5 text-primary text-center">
                        Conventient study schedule
                    </h5>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesItem;
