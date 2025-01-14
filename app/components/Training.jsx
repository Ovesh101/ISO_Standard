
import TrainingCard from "./TrainingCard";

const Training = () => {
  const training = [
    {
      image: "/training.jpg",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for training 1.",
    },
    {
        image: "/training.jpg",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for training 2.",
    },
    {
        image: "/training.jpg",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for training 3.",
    },
    {
        image: "/training.jpg",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for training 4.",
    },
    {
        image: "/training.jpg",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for training 5.",
    },
    {
    image: "/training.jpg",
      title: "JAS-ANZ ISO 9001 Certification",
      description: "This is the description for training 6.",
    },
  ];

  return (
    <div  
    style={{
  
      boxShadow: "0px 0px 38px #CFDAF9",
    }}
     className="mt-2  rounded-[15px] bg-white">
      {/* Header Section */}
      <div className="px-6 lg:px-[130px] pt-10 lg:pt-[130px] text-center lg:text-left">
        {/* Title */}
        <h2 className="text-[30px] md:text-[42px] md:font-[500] font-[400] text-title sm:text-[30px]">
          Trainings we provide
        </h2>

        {/* Description */}
        <p className="text-[16px] md:text-[18px] mt-[18px]  md:mt-[24px] leading-normal text-custom_grey">
          We are proud to be recognized by the following training that
          symbolize our excellence and dedication.
        </p>
      </div>

      {/* Accreditation Cards Section */}
      <div className="flex flex-wrap  md:justify-between justify-center  md:gap-8 px-4 lg:px-[130px] pt-8 lg:pt-[100px]">
        {training.map((train, index) => (
          <TrainingCard
            key={index}
            image={train.image}
            title={train.title}
            description={train.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Training;
