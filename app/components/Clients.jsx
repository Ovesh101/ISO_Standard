const Clients = () => {
  const clients = [
    { name: "Client 1", logo: "/iso_icon.png" },
    { name: "Client 2", logo: "/iso_icon.png" },
    { name: "Client 3", logo: "/iso_icon.png" },
    { name: "Client 4", logo: "/iso_icon.png" },
  ];

  return (
    <div
      style={{
        boxShadow: "0px 0px 38px #CFDAF9",
      }}
      className=" mt-2 pt-[62px]  rounded-[15px] "
    >
      {/* Title */}
      <div className="text-[24px] leading-[24px] font-medium text-custom_grey  text-center">
        Trusted by 1.5 thousand+ clients
      </div>

      {/* Client List */}
      <div className="flex flex-wrap pt-[40px] pb-[36px] items-center justify-center gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-4 border rounded-[10px] transition"
          >
            {/* Client Logo */}
            <img
              src={client.logo}
              alt={`${client.name} Logo`}
              className="w-[50px] h-[50px] object-contain"
            />

            {/* Client Name */}
            <span className="text-[18px] font-medium text-custom_grey">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
