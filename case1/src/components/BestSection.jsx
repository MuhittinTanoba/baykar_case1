import React from "react";

function BestSection() {
  return (
    <section className="bg-black-primary overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center p-12 md:p-20 pb-[50px]">
        <h2 className="text-white text-[32px] md:text-[56px] font-extrabold mb-4 md:mb-0">
          The best of the best
        </h2>
        <button className="text-white py-3 px-6 text-[18px] md:text-[24px] font-bold rounded-[8px] border-[2px]">
          <p className="px-2 md:px-6">Sign up now</p>
        </button>
      </div>
      <div className="px-6 md:px-[35px] pb-[55px]">
        <div className="relative px-0 md:px-[45px] pb-[25px] pt-[30px]">
          {/* Backlights */}
          <div
            className='absolute  top-[23%] left-[5%] md:left-0  md:top-[176px] bg-[#BE185D] rounded-[50px] opacity-75 w-[150px] md:w-[270px] h-[150px] md:h-[270px]'
          />
          <div
            className='absolute top-[44%] right-[-15px] md:left-[34%] md:top-0 bg-[#0369A1] rounded-[50px] opacity-75 w-[100px] md:w-[161px] h-[100px] md:h-[161px]'
          />
          <div
            className='absolute left-[57%] md:bottom-[10%] bg-[#B45309] rounded-[30px] opacity-75 w-[80px] md:w-[130px] h-[80px] md:h-[130px]'
          />
          <div
            className='absolute  left-[-4%] bottom-[20%] md:left-[75%] md:bottom-0 bg-[#A21CAF] rounded-[30px] opacity-75 w-[120px] md:w-[202px] h-[120px] md:h-[202px]'
          />
          <div
            className='absolute right-0 top-[15%] md:bottom-[64px] bg-[#15803D] rounded-[50px] opacity-75 w-[120px] md:w-[202px] h-[120px] md:h-[202px]'
          />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative bg-black-primary rounded-lg shadow-2xl shadow-slate-500 overflow-hidden"
              >
                <img
                  src={`./src/assets/img/bestSection/card-image-${
                    index + 1
                  }.png`}
                  alt={`Card ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="">
                  <h3 className="text-[20px] md:text-[24px] font-bold mt-4 md:mt-8 mx-4 md:mx-8 mb-2 md:mb-4 text-white">
                    Title
                  </h3>
                  <p className="text-white font-normal text-sm md:text-lg mx-4 md:mx-8">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae
                    habitasse.
                  </p>
                  <div className="flex justify-center p-4 md:p-8">
                    <button className="border-[2px] text-white rounded-lg">
                      <div className="flex py-3 md:py-4 px-12 md:px-24">
                        <img
                          src="./src/assets/img/bestSection/shopping-cart.png"
                          alt="Cart"
                          className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <p className="px-2 md:px-4">Buy now</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSection;
