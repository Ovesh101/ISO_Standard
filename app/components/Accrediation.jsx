import AccreditationCard from "./AccrediationCard";

const Accrediation = () => {
  const accreditations = [
    {
      image: "/JAS.png",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for Accreditation 1.",
    },
    {
      image: "/JAS.png",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for Accreditation 2.",
    },
    {
      image: "/JAS.png",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for Accreditation 3.",
    },
    {
      image: "/JAS.png",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for Accreditation 4.",
    },
    {
      image: "/JAS.png",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for Accreditation 5.",
    },
    {
      image: "/JAS.png",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for Accreditation 6.",
    },
  ];

  return (
    <div 
    style={{

      boxShadow: "0px 0px 38px #CFDAF9",
    }}
     className="mt-2  rounded-[15px] bg-white">
      {/* Header Section */}
      <div className="px-6 lg:px-[130px] pt-10 lg:pt-[130px] text-center lg:text-left">
        {/* Title */}
        <h2 className="text-[30px] md:text-[42px] md:font-[500] font-[400] text-title sm:text-[30px]">
          Our Accreditations
        </h2>

        {/* Description */}
        <p className="text-[16px] md:text-[18px] mt-[18px]  md:mt-[24px] leading-normal text-custom_grey">
          We are proud to be recognized by the following accreditations that
          symbolize our excellence and dedication.
        </p>
      </div>

      {/* Accreditation Cards Section */}
      <div className="flex flex-wrap items-center md:justify-between justify-center  md:gap-8 px-4 lg:px-[130px] pt-8 md:pt-[100px]">
        {accreditations.map((accreditation, index) => (
          <AccreditationCard
            key={index}
            image={accreditation.image}
            title={accreditation.title}
            description={accreditation.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Accrediation;
