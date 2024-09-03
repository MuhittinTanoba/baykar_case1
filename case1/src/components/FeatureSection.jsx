import React from "react";

const FeatureSection = () => {
  const features = [
    {
      title: "Nibh viverra",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "./src/assets/img/feature/Icon.png",
      icon2: "./src/assets/img/feature/Rectangle 25.png",
    },
    {
      title: "Cursus amet",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "./src/assets/img/feature/tunnel.png",
      icon2: "./src/assets/img/feature/Rectangle 26.png",
    },
    {
      title: "Ipsum fermentum",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "./src/assets/img/feature/Icon-1.png",
      icon2: "./src/assets/img/feature/Rectangle 27.png",

    },
  ];

  return (
    <section className="mt-12 md:mt-20 overflow-x-hidden">
      <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="relative">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto mb-4 md:ml-0"
                />
                <img
                  src={feature.icon2}
                  alt={feature.title}
                  className="absolute top-0 left-[50%] md:left-[6%]"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
