import React from "react";

function WhyJoinUs() {
  return (
    <section className="relative">
      {/* Arka plandaki renkli şekiller */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-end  items-center z-0">
        <img
          src="./src/assets/img/whyjoinus/Deco-video.png"
          alt="Background Shape"
          className="mr-16"
        />
      </div>
      <div className="bg-green-800 absolute top-[533px] right-[525px] w-[85px] h-[86px] rounded-[50px] opacity-75 z-20"/>


      <div className="relative z-10 py-40 px-20">
        {/* Sol taraf: Metin kısmı */}
        <div className="shadow-2xl flex flex-col lg:flex-row items-center">
          <div className="text-left my-[111px] ml-20 mr-20">
            <h2 className="text-[56px] font-extrabold text-gray-800 mb-4">
              Why join us
            </h2>
            <ul className="list-none space-y-2 mb-6 text-xl">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <p className="text-gray-700">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <p className="text-gray-700">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <p className="text-gray-700">
                  Ullamcorper ornare in et egestas dolor orci.
                </p>
              </li>
            </ul>
            <button className="border-[2px] border-brown-700 text-brown-700 rounded-[8px] py-4 px-8 font-medium text-xl">
              Sign up now
            </button>
          </div>

          {/* Sağ taraf: Video kısmı */}
          <div className="flex justify-center items-center relative">
            <div className="bg-white overflow-hidden rounded-[4px]">
              <img
                src="./src/assets/img/whyjoinus/Desktop3.png"
                alt="Why join us"
                className="rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoinUs;
