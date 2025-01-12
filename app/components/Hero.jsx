import ISO_ICON from "./ISO_ICON";

const Hero = () => {
  return (
    <div className="rounded-[20px] shadow-md relative pt-[60px] sm:pt-[100px] bg-gradient-to-b from-[#046CC8] via-[#046CC8] to-dark_blue text-white flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      {/* Title */}
      <div className="text-[32px] sm:text-[60px] leading-[40px] sm:leading-[70px] w-full md:w-[615px] font-bold mb-4">
        Atlantic Certification Services
      </div>

      {/* Description */}
      <p className="text-[14px] sm:text-[16px] w-full sm:w-[632px] leading-[20px] sm:leading-[24px] text-[#C2E2FF] mb-6">
        We provide effective and practical management systems that will help
        your business to achieve ISO, OHSAS, FSC, HALAL, VRIKSH, EAC
        DECLARATION, GOST R CERTIFICATION, ZED certification in a wide range of
        standards.
      </p>

      {/* Get a Quote Button */}
      <button
        className="bg-white text-[18px] sm:text-[24px] text-dark_blue mt-[40px] sm:mt-[72px] px-6 sm:px-8 py-2 drop-shadow-md rounded-[10px] sm:rounded-[15px] font-semibold hover:bg-gray-200 transition"
        style={{ filter: "drop-shadow(0 0 16px #65B7FF)" }}
      >
        Get a Quote
      </button>

      {/* Certificate Rectangle */}
      <div className="border-t-2 space-y-4 sm:space-y-[47px] pt-6 sm:pt-[47px] mt-6 sm:mt-[58px] border-light_blue bg-white rounded-tl-[20px] sm:rounded-tl-[40px] w-full md:w-[1200px] rounded-tr-[20px] sm:rounded-tr-[40px] p-4 sm:p-6 relative">
        {/* Horizontal Light Blue Line */}
        <div className="bg-light_blue rounded-[10px] sm:rounded-[20px] h-[30px] sm:h-[47px] w-[80%] sm:w-[750px] mx-auto mb-4"></div>

        {/* Three Horizontal Design Lines */}
        <div className="flex flex-col space-y-4 sm:space-y-[47px] items-center gap-2 mb-6">
          <div className="bg-light_blue h-[2px] w-full sm:w-[95%]"></div>
          <div className="bg-light_blue h-[2px] w-full sm:w-[95%]"></div>
          <div className="bg-light_blue h-[2px] w-full sm:w-[95%]"></div>
        </div>

        {/* SVG Icons */}
        <div className="flex justify-between items-center px-4 sm:px-[95px]">
          <img
            src="/SVG/sign.svg"
            alt="Icon"
            className="w-[80px]   md:w-[136px] h-[38px]"
          />
          <img
            src="/SVG/trophy.svg"
            alt="Icon"
            className="w-[60px]  md:w-[96px] md:h-[38px]"
          />
        </div>
      </div>

      {/* ISO Icons */}
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 1"
        rotate={-20}
        position="top-[80px]  sm:top-[125px] left-[40px] sm:left-[90px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 2"
        rotate={-20}
        position="top-[200px] sm:top-[303px] left-[150px] sm:left-[269px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 3"
        rotate={-9}
        position="top-[280px] sm:top-[435px] left-[20px] sm:left-[46px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 4"
        rotate={10}
        position="top-[70px] sm:top-[85px] right-[50px] sm:right-[112px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 5"
        rotate={6}
        position="top-[200px] sm:top-[317px] right-[120px] sm:right-[217px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 6"
        rotate={-10}
        position="top-[300px] sm:top-[459px] right-[30px] sm:right-[68px]"
      />
    </div>
  );
};

export default Hero;
