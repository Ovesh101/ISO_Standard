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
        description: "This is the description for Accreditation 3.",
      },
      {
        image: "/JAS.png",
        title: "JAS-ANZ ISO 9001 Certification",
        description: "This is the description for Accreditation 3.",
      },
      {
        image: "/JAS.png",
        title: "JAS-ANZ ISO 9001 Certification",
        description: "This is the description for Accreditation 3.",
      },
  ];

  return (
    <div className=" mt-2 shadow-md rounded-[15px]">
      <div className="px-[130px] pt-[130px] " >
        {/* Title */}
        <h2 className="text-[60px] font-semibold text-title ">
          Our Accreditations
        </h2>

        {/* Description */}
        <p className="text-[24px] mt-[35px] leading-[24px] text-custom_grey ">
          We are proud to be recognized by the following accreditations that
          symbolize our excellence and dedication.
        </p>
      </div>

      {/* Accreditation Cards */}
      <div className="flex flex-wrap px-[130px] pt-[130px]  gap-6">
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
