
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
    <div className="mt-8 shadow-md rounded-[15px] bg-white">
      {/* Header Section */}
      <div className="px-6 lg:px-[130px] pt-10 lg:pt-[130px] text-center lg:text-left">
        {/* Title */}
        <h2 className="text-[36px] lg:text-[60px] font-semibold text-title sm:text-[30px]">
          Trainings we provide
        </h2>

        {/* Description */}
        <p className="text-[18px] lg:text-[24px] mt-5 lg:mt-[35px] leading-[24px] text-custom_grey sm:text-[16px] sm:mt-4">
          We are proud to be recognized by the following training that
          symbolize our excellence and dedication.
        </p>
      </div>

      {/* Accreditation Cards Section */}
      <div className="flex flex-wrap  justify-center  md:gap-6 px-4 lg:px-[130px] pt-10 lg:pt-[130px]">
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
