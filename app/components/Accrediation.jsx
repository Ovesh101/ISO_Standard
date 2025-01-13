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
    <div className="mt-8 shadow-md rounded-[15px] bg-white">
      {/* Header Section */}
      <div className="px-6 lg:px-[130px] pt-10 lg:pt-[130px] text-center lg:text-left">
        {/* Title */}
        <h2 className="text-[36px] lg:text-[60px] font-semibold text-title sm:text-[30px]">
          Our Accreditations
        </h2>

        {/* Description */}
        <p className="text-[18px] lg:text-[24px] mt-5 lg:mt-[35px] leading-[24px] text-custom_grey sm:text-[16px] sm:mt-4">
          We are proud to be recognized by the following accreditations that
          symbolize our excellence and dedication.
        </p>
      </div>

      {/* Accreditation Cards Section */}
      <div className="flex flex-wrap  justify-center  md:gap-6 px-4 lg:px-[130px] pt-10 lg:pt-[130px]">
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
