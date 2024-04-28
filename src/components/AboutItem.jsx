import React from "react";
import About2 from "../assets/images/about2.png";
import About1 from "../assets/images/about1.png";
const AboutItem = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 md:px-12 mt-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[736px]">
          <img src={About2} alt="" />
        </div>
        <div>
          <h4 className="text-[52px] md:w-[700px] md:px-11 font-bold font-jost  text-primary">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h4>
          <p className="text-2xl font-jost font-medium text-tartiary  md:w-[637px] pt-4 pb-11">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary ml-10  ">Get Started</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse ">
        <div className="w-full md:w-[756px]">
          <img src={About1} alt="" />
        </div>
        <div>
          <h4 className="text-[64px] md:w-[690px]  font-bold font-jost  text-primary md:pt-20">
            You can Practice at any
            <span className="text-secondary"> time convinent for you.</span>
          </h4>
          <p className="text-2xl font-jost font-medium text-tartiary  md:w-[637px] pt-4 pb-11 md:ml-5">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary ml-5  ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
