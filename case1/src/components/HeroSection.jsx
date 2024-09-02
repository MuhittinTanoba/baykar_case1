import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="max-w-full lg:max-w-[700px] mt-12 md:mt-20 lg:mt-[83px] lg:mr-[80px] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-gray-900 mb-6 lg:mb-8">
            Collectible Sneakers
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 lg:mb-8">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="text-base md:text-lg lg:text-[20px] font-medium border-2 border-brown-700 text-brown-700 rounded-[8px] py-3 lg:py-4 px-4 hover:bg-red-50">
              <p className='px-4'>Sign up now</p>
            </button>
            <button className="flex items-center text-brown-700 px-2 py-3">
              <img src='./src/assets/img/play_button.png' className="w-6 h-6 md:w-8 md:h-8" alt="Play Demo" /> 
              <p className='px-2'>Watch Demo</p>
            </button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-20 flex justify-center lg:justify-end">
          <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[367px] lg:h-[372px] ml-[10px] md:ml-[30px] lg:ml-[51px] mt-[10px] md:mt-[30px] lg:mt-[51px] bg-yellow-400 rounded-[50px]"></div>
          <img
            src="./src/assets/img/shoe.png"
            alt="Sneaker"
            className="relative w-[250px] md:w-[300px] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
