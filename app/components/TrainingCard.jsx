

const TrainingCard = ({ image, title, description }) => {
    return (
      <div className="flex items-center justify-center flex-col">
        {/* Image */}
        <div className=" md:p-0   md:w-[393px] w-[320px] h-auto  rounded-[20px] mb-4 flex items-center justify-center">
          <img src={image} alt={title} className=" rounded-[20px]  object-cover" />
        </div>
  
        {/* Title with Tick */}
        <div className="mt-[10px] flex  flex-col   mb-[130px] ">
   
        <div className="flex items-center mb-2">
          {/* Tick Icon */}
          {/* <img
            src="/SVG/tick.svg"
            alt="Tick Icon"
            className="md:w-[23px] md:h-[23px] w-[20px] h-[20px] mr-2"
          /> */}
          <h3 className="md:text-[24px] text-[18px] leading-[24px] font-semibold text-black">
            {title}
          </h3>
        </div>
  
        {/* Description */}
        <p className="md:text-[18px] text-[14px] leading-[24px] text-custom_grey">{description}</p>
      </div>
               
      </div>
    );
  };
  
  export default TrainingCard;
  