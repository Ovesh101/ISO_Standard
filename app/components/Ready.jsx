import Image from "next/image";

const Ready = () => {
    return (
      <div
        className="flex mt-2 items-center gap-[240px] py-[323px]  px-[107px] justify-between  rounded-[15px]"
        style={{
          background: "radial-gradient(circle ,  #046CC8 16%, #023562 100%)",
        }}
      >
        {/* Left Section */}
        <div className="flex flex-col w-[700px]  space-y-[34px]   text-white ">
          {/* Title */}
          <h1 className="text-[60px] leading-[70px] font-bold">Ready to get started?</h1>
  
          {/* Description */}
          <p className="text-[28px]">
          To arrange a consultation or workshop, send us a message.
          </p>
  
          {/* Button */}
          <button className="rounded-[15px] leading-[70px] w-[264px] text-[28px] h-[70px] mt-[60px] bg-light_blue text-dark_blue font-medium  hover:bg-gray-200 transition">  
            Contact Us
          </button>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center  justify-center bg-white rounded-[30px]  shadow-lg">
          {/* Logo Image */}
          <Image
          src="/header.png" // Replace with your image path
          alt="Logo"
          width={446} // Adjust width as needed
          height={121} // Adjust height as needed
          className="py-[74px] px-[34px] object-contain"
        />
        </div>
      </div>
    );
  };
  
  export default Ready;
  