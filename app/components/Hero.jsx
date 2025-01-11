import ISO_ICON from "./ISO_ICON";

const Hero = () => {
  return (
    <div className="rounded-[20px] mt-2 shadow-md relative pt-[100px] bg-gradient-to-b from-[#046CC8] via-[#046CC8] to-dark_blue text-white  flex flex-col items-center justify-center px-6 text-center">
      {/* Title */}
      <div className="text-[60px] leading-[70px] w-[615px] font-bold mb-4">
        Atlantic Certification Services
      </div>

      {/* Description */}
      <p className="text-[16px] w-[632px] leading-[24px] text-[#C2E2FF] mb-6">
        we provide effective and practical management systems that will help
        your business to achieve ISO, OHSAS, FSC, HALAL, VRIKSH, EAC
        DECLARATION, GOST R CERTIFICATION, ZED certification in a wide range of
        standards.
      </p>

      {/* Get a Quote Button */}
      <button
        className="bg-white text-[24px] text-dark_blue px-8 py-2 drop-shadow-md rounded-[15px] font-semibold hover:bg-gray-200 transition"
        style={{ filter: "drop-shadow(0 0 16px #65B7FF)" }}
      >
        Get a Quote
      </button>
      <ISO_ICON src="/iso_icon.png" alt="Icon 1" rotate={-20} position="top-[125px] left-[90px]" />
      <ISO_ICON src="/iso_icon.png" alt="Icon 2" rotate={-20} position="top-[303px] left-[269px]" />
      <ISO_ICON src="/iso_icon.png" alt="Icon 3" rotate={-9} position="top-[435px] left-[46px]" />
      <ISO_ICON src="/iso_icon.png" alt="Icon 4" rotate={10} position="top-[85px] right-[112px]" />
      <ISO_ICON src="/iso_icon.png" alt="Icon 5" rotate= {6} position="top-[317px] right-[217px]" />
      <ISO_ICON src="/iso_icon.png" alt="Icon 6" rotate={-10} position="top-[459px] right-[68px]" />
    </div>
  );
};

export default Hero;
