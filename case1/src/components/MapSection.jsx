import React from "react";

function MapSection() {
  return (
    <section className="bg-brown-map overflow-x-hidden pt-32 pb-[42px]">
      <div className="relative mx-auto" style={{ maxWidth: "100%", width: "800px" }}>
        <img
          src="./src/assets/img/map/chart.png"
          alt="Map"
          className="w-full h-auto"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
          <p className="text-white text-[32px] md:text-[48px] font-extrabold">11,658,467</p>
          <p className="text-white text-[18px] md:text-[24px] font-bold mt-2">Shoes Collected</p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-[45%] right-[14%] w-3 h-3 md:w-4 md:h-4 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute bottom-[19%] right-[11%] w-4 h-4 md:w-6 md:h-6 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute bottom-[43%] right-[24%] w-4 h-4 md:w-6 md:h-6 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute bottom-[28%] right-[42%] w-4 h-4 md:w-6 md:h-6 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute bottom-[23%] left-[34%] w-3 h-3 md:w-4 md:h-4 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute bottom-[18%] left-[31%] w-4 h-4 md:w-6 md:h-6 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute top-[10%] left-[39%] w-3 h-3 md:w-4 md:h-4 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute top-[28%] left-[31%] w-5 h-5 md:w-7 md:h-7 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute top-[46%] left-[20%] w-4 h-4 md:w-6 md:h-6 border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />
        <div className="absolute top-[36%] left-[13%] w-4 h-4 md:w-6 md:h-6 bg-[#D9F99D] border-[2px] md:border-[3px] border-[#A3E635] rounded-full" />

        <div className="absolute top-[-125px] left-[14.5%] transform translate-x-[-50%] w-[180px] md:w-[240px] bg-white rounded-lg shadow-lg z-10">
          <img
            src="./src/assets/img/map/Picture.png"
            alt="Cool Shoes"
            className="w-full h-auto rounded-t-lg"
          />
          <div className="p-2 md:p-4 text-center bg-[#E2E8F0] rounded-[5px]">
            <p className="text-black text-xs md:text-base">Emma Simpson collected one pair of Cool Shoes</p>
          </div>
          
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
        </div>
      </div>
    </section>
  );
}
 
export default MapSection;
