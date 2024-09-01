import React from "react";

function BestSection() {
  return (
    <section className="bg-blue-950">
      <div className="flex justify-between items-center p-20 pb-[50px]">
        <h2 className="text-white text-[56px] font-extrabold">
          The best of the best
        </h2>
        <button className="text-white py-4 px-6 text-[24px] font-bold rounded-[8px] border-[2px]">
          <p className="px-6">Sign up now</p>
        </button>
      </div>
      <div className="px-[35px] pb-[55px]">
        <div className="px-[45px] pb-[25px] pt-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative bg-blue-950 rounded-lg shadow-2xl shadow-slate-400 overflow-hidden"
              >
                <img
                  src={`./src/assets/img/bestSection/card-image-${
                    index + 1
                  }.png`}
                  alt={`Card ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="">
                  <h3 className="text-[24px] font-bold mt-8 mx-8 mb-4 text-white">
                    Title
                  </h3>
                  <p className="text-white font-normal text-lg mx-8">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae
                    habitasse.
                  </p>
                  <div className="flex justify-center p-8">
                    <button className="border-[2px] text-white rounded-lg">
                      <div className="flex py-4 px-24">
                        <img
                          src="./src/assets/img/bestSection/shopping-cart.png"
                          alt="Cart"
                          className="w-6 h-6"
                        ></img>
                        <p className="px-4">Buy now</p>
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
