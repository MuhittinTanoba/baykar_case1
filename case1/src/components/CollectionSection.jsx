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
    <section>
      <div className="mx-20 mt-20">
        <h2 className="text-[56px] font-extrabold">Grow your collection</h2>
        <p className="mt-8 text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="bg-wave-pattern bg-no-repeat bg-cover ">
        <div className="flex mx-20 mt-20">
          <div className="flex flex-col">
            <div className="grid grid-rows-6">
              <div className="row-span-1">
                <div className="flex justify-start items-center py-4 px-4 mb-4">
                  <img
                    src="./src/assets/img/collection/search.png"
                    alt="Podcast"
                    className="w-6 h-6"
                  />
                  <p className="text-[20px] font-medium pl-4 pr-2">
                    Bibendum tellus
                  </p>
                  <img
                    src="./src/assets/img/collection/arrow-right.png"
                    alt="Podcast"
                    className="w-6 h-6"
                  />
                </div>
              </div>

              {buttons.map((button, index) => (
                <div key={index} className="row-span-1">
                  <div className="flex justify-start items-center py-4 px-4 mb-4">
                    <img
                      src={`./src/assets/img/collection/${button.icon}.png`}
                      alt={`${button.text}}`}
                      className="w-6 h-6"
                    />
                    <p className="text-[20px] font-medium pl-4 pr-2">
                      {button.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center ml-20">
            <img src="./src/assets/img/collection/Col.png" alt="Collection" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
