const Certificate = () => {
  const certificates = [
    {
      name: "ISO:9001",
      description: "Quality Management System Certification",
    },
    {
      name: "ISO:14001",
      description: "Environmental Management System Certification",
    },
    {
      name: "ISO:45001",
      description: "Occupational Health and Safety Certification",
    },
    {
      name: "ISO:27001",
      description: "Information Security Management Certification",
    },
    {
      name: "ISO:22000",
      description: "Food Safety Management System Certification",
    },
    {
      name: "ISO:50001",
      description: "Energy Management System Certification",
    },
    {
      name: "ISO:13485",
      description: "Medical Devices Quality Management Certification",
    },
  ];

  return (
    <div className="rounded-lg mt-2 pb-10 lg:pb-[150px] px-6 lg:px-[130px] pt-10 lg:pt-[130px] shadow-md bg-white">
      {/* Title with SVG */}
      <div className="flex flex-col lg:flex-row gap-5 items-center mb-8">
        {/* SVG Icon */}
        <img
          src="/SVG/badge.svg"
          alt="Icon"
          className="w-16 h-16 lg:w-[68px] lg:h-[68px]"
        />
        {/* Title */}
        <h2 className="text-[28px] leading-[34px] lg:text-[60px] lg:leading-[70px] font-semibold text-title text-center lg:text-left">
          Certificates We Provide
        </h2>
      </div>

      {/* Description */}
      <p className="text-[16px] lg:text-[24px] text-custom_grey mt-4 lg:mt-[35px] leading-[20px] lg:leading-[24px] text-center lg:text-left">
        We offer Certification services to our clients for all applicable
        International standards.
      </p>

      {/* Certificates Section */}
      <div className="mt-10 lg:mt-[115px]">
        <h3 className="text-[24px] lg:text-[32px] leading-[30px] lg:leading-[70px] font-medium text-black mb-4 text-center lg:text-left">
          Certificates
        </h3>
        <div className="border-b-2 border-black mb-8 lg:mb-[48px]"></div>

        {/* Certificates List */}
        {certificates.map((certificate, index) => (
          <div key={index} className="mb-6">
            {/* Name and Description */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 px-5 my-4 lg:my-[48px]">
              <span className="text-[18px] lg:text-[24px] font-medium text-title text-center lg:text-left">
                {certificate.name}
              </span>
              <span className="text-[16px] lg:text-[24px] font-medium text-title text-center lg:text-right">
                {certificate.description}
              </span>
            </div>
            {/* Horizontal Line */}
            <div className="border-b border-gray-300 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
