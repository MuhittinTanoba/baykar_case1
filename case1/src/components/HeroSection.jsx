import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-[80px] flex items-center">
        <div className="max-w-[700px] mt-[83px] mr-[80px]">
          <h1 className="text-[72px] font-bold text-gray-900 mb-8">
            Collectible Sneakers
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="flex space-x-4">
            <button className="text-[20px] font-medium border-2 border-brown-700 text-brown-700 rounded-[8px] py-4 px-4 hover:bg-red-50">
              <p className='px-4'>Sign up now</p>
            </button>
            <button className="flex items-center ml-4 text-brown-700 px-2 py-3">
              <img src='./src/assets/img/play_button.png' className=""></img> <p className='px-2'>Watch Demo</p>
            </button>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute w-[367px] h-[372px] ml-[51px] mt-[51px] bg-yellow-400 rounded-[50px]"></div>
          <img
            src="./src/assets/img/shoe.png"
            alt="Sneaker"
            className="relative r-20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
