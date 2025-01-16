"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnBoard = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const progressRef = useRef(null);

  const [visibleContent, setVisibleContent] = useState([true, false, false]);

  const content = [
    {
      title: "Step 1: Introduction",
      description: "This is the introduction to our OnBoarding process.",
      image: "/header.png",
    },
    {
      title: "Step 2: Details",
      description: "Here are more details about the process.",
      image: "/header.png",
    },
    {
      title: "Step 3: Conclusion",
      description: "The conclusion of the OnBoarding process.",
      image: "/header.png",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    const progressBar = progressRef.current;

    // Total scrollable width for the horizontal container
    const scrollWidth = horizontal.scrollWidth - section.offsetWidth;

    // GSAP Animation for Horizontal Scroll
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true, // Pause vertical scroll and pin the section
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update progress bar
          const progress = self.progress.toFixed(2);
          if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
          }

          // Reveal content based on the scroll progress
          const newVisibleContent = content.map((_, index) => {
            return progress >= index / (content.length - 1);
          });
          setVisibleContent(newVisibleContent);
        },
      },
    });

    timeline.to(horizontal, {
      x: -scrollWidth,
      ease: "sine.in",
    });

    return () => {
      // Kill ScrollTrigger for this component
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      timeline.kill(); // Kill the timeline animation
    };
  }, []);

  return (
    <div
      style={{
        background: "radial-gradient(circle, #046CC8 22%, #023562 100%)",
        boxShadow: "0px 0px 38px #CFDAF9",
      }}
      className="relative"
    >
      {/* Section Header */}
      <div
        className="relative py-[300px] flex items-center justify-between z-20"
        style={{ zIndex: 10 }}
      >
        <img
          src="/SVG/line_left.svg"
          alt="Left Image"
          className="w-[509px] h-[509px] absolute left-0 top-1/2 transform -translate-y-1/2"
        />
        <h1 className="text-4xl text-white font-bold text-center w-full z-30">
          How to get onboard
        </h1>
        <img
          src="/SVG/line_right.svg"
          alt="Right Image"
          className="absolute right-0 w-[509px] h-[509px] top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={sectionRef} className="relative h-[70vh]">
        <div
          ref={horizontalRef}
          className="absolute flex space-x-10 h-full top-0"
          style={{ width: `${content.length * 100}vw`, zIndex: 5 }}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-[100vw] text-white ${
                !visibleContent[index] && "opacity-0"
              } transition-opacity duration-300`}
            >
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="mt-4 text-lg">{item.description}</p>
              </div>
              <img
                src={item.image}
                alt={`Step ${index + 1}`}
                className="mt-6 w-1/3 h-auto"
              />
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-10 right-10 z-30 pb-4">
          <div className="relative h-1 bg-gray-500">
            <div
              ref={progressRef}
              className="absolute h-1 bg-white"
              style={{ width: "0%" }}
            />
          </div>
          <div className="flex justify-between mt-4 text-white">
            {content.map((_, index) => (
              <span key={index} className="text-sm">
                Step {index + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
