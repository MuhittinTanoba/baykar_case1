import React from "react";

function WhyJoinUs() {
  return (
    <section className="relative">
      {/* Arka plandaki renkli şekiller */}
      <div className="absolute top-36 md:top-0 md:left-0 w-full h-full flex justify-end items-center z-0">
        <img
          src="./src/assets/img/whyjoinus/Deco-video.png"
          alt="Background Shape"
          className="max-w-full object-cover mr-16"
        />
      </div>
      <div className="bg-green-800 absolute top-[50%] right-[0] w-[85px] h-[86px] rounded-[50px] opacity-75 z-20 transform translate-x-[50%] md:translate-x-[0%]"/>

      <div className="relative z-10 py-12 px-6 md:py-20 md:px-10 lg:py-40 lg:px-20">
        {/* Sol taraf: Metin kısmı */}
        <div className="shadow-2xl flex flex-col lg:flex-row items-center">
          <div className="text-left my-6 mx-4 lg:my-[111px] lg:mx-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-primary mb-4">
              Why join us
            </h2>
            <ul className="list-none space-y-2 mb-6 text-base md:text-lg lg:text-xl">
              <li className="flex items-start">
                <span className="text-[#15803D] mr-2">✔</span>
                <p className="text-black-primary">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#15803D] mr-2">✔</span>
                <p className="text-black-primary">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#15803D] mr-2">✔</span>
                <p className="text-black-primary  ">
                  Ullamcorper ornare in et egestas dolor orci.
                </p>
              </li>
            </ul>
            <div className="text-center md:text-start">
            <button className="text-center border-[2px] border-brown-primary rounded-[8px] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 font-medium text-base md:text-lg lg:text-xl">
              Sign up now
            </button>
            </div>
  
          </div>

          {/* Sağ taraf: Video kısmı */}
          <div className="flex justify-center items-center relative mt-6 lg:mt-0">
            <div className="bg-white overflow-hidden rounded-[4px]">
              <img
                src="./src/assets/img/whyjoinus/Desktop3.png"
                alt="Why join us"
                className="rounded-[4px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoinUs;
