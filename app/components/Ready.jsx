import Image from "next/image";

const Ready = () => {
  return (
    <div
      className="flex flex-col lg:flex-row mt-2 items-center gap-10 lg:gap-[240px] py-10 lg:py-[323px] px-6 lg:px-[107px] justify-between rounded-[15px]"
      style={{
        background: "radial-gradient(circle ,  #046CC8 16%, #023562 100%)",
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[700px] space-y-6 lg:space-y-[34px] text-white text-center lg:text-left">
        {/* Title */}
        <h1 className="text-[36px] leading-[42px] lg:text-[60px] lg:leading-[70px] font-bold">
          Ready to get started?
        </h1>

        {/* Description */}
        <p className="text-[18px] lg:text-[28px]">
          To arrange a consultation or workshop, send us a message.
        </p>

        {/* Button */}
        <button className="rounded-[15px] leading-[50px] w-full lg:w-[264px] text-[20px] lg:text-[28px] h-[60px] lg:h-[70px] mt-[30px] lg:mt-[60px] bg-light_blue text-dark_blue font-medium hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center  justify-center bg-white rounded-[20px] lg:rounded-[30px] shadow-lg w-full max-w-[400px] lg:max-w-[446px]">
        {/* Logo Image */}
        <Image
          src="/header.png" // Replace with your image path
          alt="Logo"
          width={446} // Adjust width as needed
          height={121} // Adjust height as needed
          className="py-8 px-4 lg:py-[74px] lg:px-[34px] object-contain"
        />
      </div>
    </div>
  );
};

export default Ready;
