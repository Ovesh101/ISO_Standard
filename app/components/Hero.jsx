import ISO_ICON from "./ISO_ICON";

const Hero = () => {
  return (
    <div className="rounded-[20px]  shadow-md relative pt-[100px] bg-gradient-to-b from-[#046CC8] via-[#046CC8] to-dark_blue text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Title */}
      <div className="text-[60px] leading-[70px] w-[615px] font-bold mb-4">
        Atlantic Certification Services
      </div>

      {/* Description */}
      <p className="text-[16px] w-[632px] leading-[24px] text-[#C2E2FF] mb-6">
        We provide effective and practical management systems that will help
        your business to achieve ISO, OHSAS, FSC, HALAL, VRIKSH, EAC
        DECLARATION, GOST R CERTIFICATION, ZED certification in a wide range of
        standards.
      </p>

      {/* Certificate Rectangle */}

      {/* Get a Quote Button */}
      <button
        className="bg-white text-[24px] text-dark_blue mt-[72px] px-8 py-2 drop-shadow-md rounded-[15px] font-semibold hover:bg-gray-200 transition"
        style={{ filter: "drop-shadow(0 0 16px #65B7FF)" }}
      >
        Get a Quote
      </button>
      <div className="border-t-2 space-y-[47px] pt-[47px]  mt-[58px] border-light_blue bg-white rounded-tl-[40px] w-[1200px]  rounded-tr-[40px]  p-6 relative">
        {/* Content goes here */}

        {/* Horizontal Light Blue Line */}
        <div className="bg-light_blue  rounded-[20px] h-[47px] w-[750px] mx-auto mb-4"></div>

        {/* Three Horizontal Design Lines */}
        <div className="flex flex-col space-y-[47px]  items-center gap-2 mb-6">
          <div className="bg-light_blue h-[2px] w-[95%]"></div>
          <div className="bg-light_blue h-[2px] w-[95%]"></div>
          <div className="bg-light_blue h-[2px] w-[95%]"></div>
        </div>

        {/* SVG Icons */}
        <div className="flex px-[95px] justify-between items-center">
          {/* Left SVG */}
          <img src="/SVG/sign.svg" alt="Icon" className="w-[136px] h-[38px]" />

          {/* Right SVG */}
          <img src="/SVG/trophy.svg" alt="Icon" className="w-[96px] h-[140px]" />
        </div>
      </div>

      {/* ISO Icons */}
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 1"
        rotate={-20}
        position="top-[125px] left-[90px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 2"
        rotate={-20}
        position="top-[303px] left-[269px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 3"
        rotate={-9}
        position="top-[435px] left-[46px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 4"
        rotate={10}
        position="top-[85px] right-[112px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 5"
        rotate={6}
        position="top-[317px] right-[217px]"
      />
      <ISO_ICON
        src="/iso_icon.png"
        alt="Icon 6"
        rotate={-10}
        position="top-[459px] right-[68px]"
      />
    </div>
  );
};

export default Hero;
