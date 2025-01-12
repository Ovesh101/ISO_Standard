const AccreditationCard = ({ image, title, description }) => {
    return (
      <div className="flex flex-col">
        {/* Image */}
        <div className="md:h-[387px] md:p-0 md:w-[393px] w-[90%] h-[90%]  rounded-[20px] mb-4 flex items-center justify-center bg-blue-50">
          <img src={image} alt={title} className="md:w-[240px] md:h-[321px] object-cover" />
        </div>
  
        {/* Title with Tick */}
        <div className="mt-[30px]  mb-[130px] ">
   
        <div className="flex items-center mb-2">
          {/* Tick Icon */}
          <img
            src="/SVG/tick.svg"
            alt="Tick Icon"
            className="w-[23px] h-[23px] mr-2"
          />
          <h3 className="text-[24px] leading-[24px] font-semibold text-black">
            {title}
          </h3>
        </div>
  
        {/* Description */}
        <p className="text-[18px] leading-[24px] text-custom_grey">{description}</p>
      </div>
               
      </div>
    );
  };
  
  export default AccreditationCard;
  