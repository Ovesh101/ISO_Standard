const ISO_ICON = ({ src, alt, position, rotate = 0 }) => {
    return (
      <div
        className={`absolute ${position} z-20 w-[65px] h-[65px] bg-light_blue rounded-[15px] drop-shadow-sm`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <img
          src={src}
          alt={alt}
          className="w-[98%] h-[98%] object-cover rounded-[15px]"
        />
      </div>
    );
  };
  
  export default ISO_ICON;
  