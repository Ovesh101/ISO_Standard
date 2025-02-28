"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const Certificate = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCertificates = () => {
    setIsOpen(!isOpen);
  };

  const certificates = [
    { name: "ISO:9001", description: "Quality Management System Certification" },
    { name: "ISO:14001", description: "Environmental Management System Certification" },
    { name: "ISO:45001", description: "Occupational Health and Safety Certification" },
    { name: "ISO:27001", description: "Information Security Management Certification" },
    { name: "ISO:22000", description: "Food Safety Management System Certification" },
    { name: "ISO:50001", description: "Energy Management System Certification" },
    { name: "ISO:13485", description: "Medical Devices Quality Management Certification" },
  ];

  return (
    <div
      style={{
        boxShadow: "0px 0px 38px #CFDAF9",
      }}
      className="rounded-[15px] mt-2 pb-10 lg:pb-[150px] px-6 lg:px-[130px] pt-10 lg:pt-[130px] bg-white"
    >
      {/* Title with SVG */}
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <img
          src="/SVG/badge.svg"
          alt="Icon"
          className="w-12 h-12 lg:w-[56px] lg:h-[56px]"
        />
        <h2 className="text-[30px] md:text-[42px] md:font-[500] font-[400] text-title text-center md:text-left">
          Certificates We Provide
        </h2>
      </div>

      {/* Description */}
      <p className="text-[14px] md:text-[16px] mt-[18px] md:mt-[24px] leading-normal text-custom_grey text-center lg:text-left">
        We offer Certification services to our clients for all applicable
        International standards.
      </p>

      {/* Certificates Section */}
      <div className="pt-[60px] md:pt-[80px]">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleCertificates}
        >
          <h3 className="leading-normal md:text-[24px] text-[20px] font-medium text-black mb-4 text-left">
            Certificates
          </h3>
          <div
            className={`w-6 h-6 text-black mb-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            <ChevronRight  />
          </div>
        </div>
        <div className="border-b-2 border-black"></div>

        {/* Animated Certificates List */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="overflow-y-auto max-h-[500px]">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 cursor-pointer transition duration-200"
              >
                <div className="flex flex-col lg:flex-row  justify-between lg:items-start gap-2 md:px-5 py-[16px] lg:py-[20px]">
                  <span className="text-[16px] lg:text-[18px] font-medium text-title text-left">
                    {certificate.name}
                  </span>
                  <span className="text-[14px] lg:text-[16px] font-[400] text-title text-left">
                    {certificate.description}
                  </span>
                </div>
                <div className="border-b border-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
