import React, { useState } from "react";

const Pricing = () => {
  let [isYearly, setisYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      montlyPricing: 19,
      yearlyPricing: 199,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/images/green.png",
      pink: "/src/assets/images/pink.png",
    },
    {
      name: "Advance",
      montlyPricing: 19,
      yearlyPricing: 399,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/images/green.png",
      pink: "/src/assets/images/pink.png",
    },
    {
      name: "Premium",
      montlyPricing: 19,
      yearlyPricing: 599,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/images/green.png",
      pink: "/src/assets/images/pink.png",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto p-4 md:px-12 mt-20">
      <div className="text-center">
        <h2 className="md:text-[64px] text-3xl font-bold font-jost pb-5">
          Here are all our plans
        </h2>
        <p className="text-tartiary mx-auto md:px-8 text-[18px] font-jost font-semibold md:w-1/2">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        {/* Toggle Pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 font-semibold font-jost text-2xl">
              Monthly
            </span>
            <div className="w-14 h-6 bg-gray-300 rounded-full">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-400"
                }`}
              ></div>
            </div>
            <span className="ml-8 font-semibold font-jost text-2xl">
              Yearly
            </span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            checked={isYearly}
            className="hidden"
            onChange={() => setisYearly(!isYearly)}
          />
        </div>
      </div>
      {/* Pricing Card */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-2xl"
          >
            <h4 className="text-center font-bold text-primary text-3xl">
              {pkg.name}
            </h4>
            <p className="text-tartiary text-center my-5">
              A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p className="mt-5 text-center font-jost font-bold text-secondary text-4xl ">
              {isYearly ? `$${pkg.yearlyPricing}` : `$${pkg.montlyPricing}`}{" "}
              <span className="text-base font-medium text-tartiary">
                /{isYearly ? "Year" : "Month"}
              </span>
            </p>
            <ul className="mt-5 space-y-3 px-4">
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="" className="w-5 h-5" /> Videos of
                Lessons
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="" className="w-5 h-5" /> Homework
                check
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.pink} alt="" className="w-5 h-5" /> Additional
                practical task
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="" className="w-5 h-5" /> Monthly
                conferences
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="" className="w-5 h-5" /> Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto flex mt-8 items-center justify-center ">
                <button className="btnPrimary">Get started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
