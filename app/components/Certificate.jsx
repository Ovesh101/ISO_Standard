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
    <div className="rounded-lg mt-2 px-[130px] pt-[130px] shadow-md bg-white">
      {/* Title with SVG */}
      <div className="flex gap-5  items-center mb-8">
        {/* SVG Icon */}
        <img src="/SVG/badge.svg" alt="Icon" className="w-[68px] h-[68px]" />
        {/* Title */}
        <h2 className="text-[60px] leading-[70px] font-semibold text-title">
          Certificates We Provide
        </h2>
      </div>

      {/* Description */}
      <p className="text-[24px] text-custom_grey mt-[35px] leading-[24px] ">
        We offer Certification services to our clients for all applicable
        International standards.
      </p>

      {/* Certificates Section */}
      <div className="mt-[115px]" >
        <h3 className="text-[32px] leading-[70px] font-medium text-black mb-4">Certificates</h3>
        <div className="border-b-2 border-black mb-[48px]"></div>

        {/* Certificates List */}
        {certificates.map((certificate, index) => (
          <div key={index} className="mb-6">
            {/* Name and Description */}
            <div className="flex my-[48px] justify-between px-5 items-center">
              <span className="text-[24px] font-medium text-title">
                {certificate.name}
              </span>
              <span className="text-[24px] font-medium text-title">
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
