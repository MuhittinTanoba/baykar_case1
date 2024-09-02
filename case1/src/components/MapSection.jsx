import React from "react";

function MapSection() {
  return (
    <section className="bg-brown-map">
      <div className="relative mx-auto" style={{ width: "800px" }}>
        <img
          src="./src/assets/img/map/chart.png"
          alt="Map"
          className="w-full h-auto"
        />
        <div className="absolute bottom-[45%] right-[14%] w-4 h-4 border-[3px] border-green-500 rounded-full" />
        <div className="absolute bottom-[19%] right-[11%] w-6 h-6 border-[3px] border-green-500 rounded-full" />
        <div className="absolute bottom-[43%] right-[24%] w-6 h-6 border-[3px] border-green-500 rounded-full" />
        <div className="absolute bottom-[28%] right-[42%] w-6 h-6 border-[3px] border-green-500 rounded-full" />
        <div className="absolute bottom-[23%] left-[34%] w-4 h-4 border-[3px] border-green-500 rounded-full" />
        <div className="absolute bottom-[18%] left-[31%] w-6 h-6 border-[3px] border-green-500 rounded-full" />
        <div className="absolute top-[10%] left-[39%] w-4 h-4 border-[3px] border-green-500 rounded-full" />
        <div className="absolute top-[28%] left-[31%] w-7 h-7 border-[3px] border-green-500 rounded-full" />
        <div className="absolute top-[46%] left-[20%] w-6 h-6 border-[3px] border-green-500 rounded-full" />
        <div className="absolute top-[36%] left-[13%] w-6 h-6 border-[3px] bg-green-400 border-green-500 rounded-full" />
      </div>
    </section>
  );
}

export default MapSection;
