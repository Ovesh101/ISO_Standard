const AccreditationCard = ({ image, title, description }) => {
    return (
      <div className="flex items-center justify-between flex-col">
        {/* Image */}
        <div className=" w-[300px] h-[300px]  rounded-[20px] mb-4 flex items-center  bg-blue-50">
          <img src={image} alt={title} className=" w-full h-full  object-contain" />
        </div>
  
        {/* Title with Tick */}
        <div className="mt-[10px] flex  flex-col   mb-[130px] ">
   
        <div className="flex items-center mb-2">
          {/* Tick Icon */}
          <img
            src="/SVG/tick.svg"
            alt="Tick Icon"
            className="md:w-[18px] md:h-[18px] w-[15px] h-[15px] mr-2"
          />
          <h3 className=" text-[16px] md:text-[18px] leading-[24px] font-semibold text-black">
            {title}
          </h3>
        </div>
  
        {/* Description */}
        <p className=" text-[12px] md:text-[14px] leading-[24px] text-custom_grey">{description}</p>
      </div>
               
      </div>
    );
  };
  
  export default AccreditationCard;
  