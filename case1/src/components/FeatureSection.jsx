import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Nibh viverra",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "./src/assets/img/feature/Icon-1.png",
    },
    {
      title: "Cursus amet",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "./src/assets/img/feature/Icon-1.png",
    },
    {
      title: "Ipsum fermentum",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: "./src/assets/img/feature/Icon-1.png",
    },
  ];

  return (
    <section className="mt-20">
      <div className="container mx-auto py-20 px-20">
        <div className="flex justify-between">
          {features.map((feature, index) => (
            <div key={index} className="max-w-xs text-left">
              <img src={feature.icon} alt={feature.title} className="ml-0 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
