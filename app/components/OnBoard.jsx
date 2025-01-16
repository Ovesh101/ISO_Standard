"use client";
import React from "react";

const OnBoard = () => {
  const content = [
    {
      title: "Step 1: Introduction",
      description: "This is the introduction to our OnBoarding process.",
      image: "/SVG/Time_1.png",
    },
    {
      title: "Step 2: Details",
      description: "Here are more details about the process.",
      image: "/SVG/Time_1.png",
    },
    {
      title: "Step 3: Conclusion",
      description: "The conclusion of the OnBoarding process.",
      image: "/SVG/Time_1.png",
    },
  ];

  return (
    <div
      style={{
        background: "radial-gradient(circle, #046CC8 22%, #023562 100%)",
        boxShadow: "0px 0px 38px #CFDAF9",
      }}
      className="relative rounded-[15px] min-h-screen text-white"
    >
      {/* Section Header */}
      <div
        className="relative pb-[200px] pt-[300px] flex items-center justify-center z-20"
        style={{ zIndex: 10 }}
      >
        {/* Left Decoration */}
        <img
          src="/SVG/line_left.svg"
          alt="Left Decoration"
          className="md:w-[509px] w-[150px] h-[150px] md:h-[509px] absolute left-[-20px] md:left-0 top-[60%] transform -translate-y-1/2"
        />

        {/* Centered Title */}
        <h1 className="md:text-[42px] text-[20px] md:m-0 mb-10 text-white font-bold text-center w-full md:z-30">
          How to get onboard
        </h1>

        {/* Right Decoration */}
        <img
          src="/SVG/line_right.svg"
          alt="Right Decoration"
          className="absolute right-[-20px]  md:right-0 w-[150px] h-[150px] md:w-[509px] md:h-[509px] top-[60%] transform -translate-y-1/2"
        />
      </div>

      {/* Segment 2: Static Content */}
      <div className="flex flex-col py-20 space-y-16 md:space-y-20  px-6 md:px-20">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-10"
          >
            {/* Text Section (Left) */}
            <div className="flex-1 text-center md:text-left">
              <h2 className=" text-[#F8F9FB] text-[24px] md:text-[32px] font-semibold mb-4">
                {item.title}
              </h2>
              <p className=" font-[400] text-[#AAD7FF] text-[20px] md:text-[24px]">
                {item.description}
              </p>
            </div>

            {/* Image Section (Right) */}
            <div className="flex-1">
              <img
                src={item.image}
                alt={`Step ${index + 1}`}
                className="w-full max-w-sm mx-auto md:max-w-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnBoard;
