import React from "react";

function CollectionSection() {
  const buttons = [
    { id: 1, text: "Cras eget", icon: "shield-check" },
    { id: 3, text: "Dolor pharetra", icon: "rocket" },
    { id: 4, text: "Amet, fringilla", icon: "screen" },
    { id: 5, text: "Amet nibh", icon: "podcast" },
    { id: 6, text: "Sed velit", icon: "settings-alt" },
  ];

  return (
    <section className="overflow-x-hidden">
      <div className="mx-20 mt-20">
        <h2 className="text-[56px] text-black-primary font-extrabold">Grow your collection</h2>
        <p className="mt-8 text-lg text-black-primary">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="bg-wave-pattern bg-no-repeat bg-cover ">
        <div className="flex flex-col md:flex-row md:mx-20 mt-20">
          <div className="flex flex-col">
            <div className="md:grid md:grid-rows-6 gap-12 md:gap-0 flex flex-row overflow-y-auto">
              <div className="row-span-1">
                <div className="flex items-center md:py-4 md:px-4 mb-4">
                  <img
                    src="./src/assets/img/collection/search.png"
                    alt="Podcast"
                    className="w-6 h-6"
                  />
                  <p className="text-[20px] text-black-primary font-medium pl-4 pr-2">
                    Bibendum tellus
                  </p>
                  <img
                    src="./src/assets/img/collection/arrow-right.png"
                    alt="Arrow"
                    className="md:w-6 md:h-6 md:block hidden text-black-primary"
                  />
                </div>
              </div>

              {buttons.map((button, index) => (
                <div key={index} className="row-span-1 over">
                  <div className="flex items-center md:py-4 md:px-4 mb-4">
                    <img
                      src={`./src/assets/img/collection/${button.icon}.png`}
                      alt={button.text}
                      className="w-6 h-6 text-black-primary"
                    />
                    <p className="text-[20px] text-black-primary font-medium pl-4 pr-2">
                      {button.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 md:mt-0 md:ml-20">
            <img
              src="./src/assets/img/collection/Col.png"
              alt="Collection"
              className="w-full max-w-xs md:max-w-5xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
