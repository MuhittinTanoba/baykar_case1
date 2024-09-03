import React from "react";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const testimonials = [
    {
      company: "kontrastr",
      companyLogo: "./src/assets/img/testimonials/Logo.png",
      text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      author: "Ralph Edwards",
      role: "Product Designer",
      image: "./src/assets/img/testimonials/User Thumb-4.png",
    },
    {
      company: "Zoomerr",
      companyLogo: "./src/assets/img/testimonials/Vector.png",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      author: "Hellen Jummy",
      role: "Team Lead",
      image: "./src/assets/img/testimonials/User Thumb.png",
    },
    {
      company: "SHELLS",
      companyLogo: "./src/assets/img/testimonials/Vector2.png",
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      author: "Hellena John",
      role: "Co-founder",
      image: "./src/assets/img/testimonials/User Thumb-1.png",
    },
    {
      company: "ArtVenue",
      companyLogo: "./src/assets/img/testimonials/Group 46.png",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      author: "David Oshodi",
      role: "Manager",
      image: "./src/assets/img/testimonials/User Thumb-2.png",
    },
    {
      company: "WAVES",
      companyLogo: "./src/assets/img/testimonials/Vector3.png",
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      author: "Charolette Hanlin",
      role: "CEO",
      image: "./src/assets/img/testimonials/User Thumb-5.png",
    }
  ];

  return (
    <section className="overflow-x-hidden">
      <div className="flex mb-10 mt-20 mx-20 justify-between">
        <h2 className="text-[28px] md:text-[56px] font-extrabold text-black-primary">
          Because they love us
        </h2>
        <div className="hidden md:flex justify-center items-center gap-6">
          <img
            src="./src/assets/img/testimonials/Button.png"
            alt="icon"
            className="w-14 h-14"
          />
          <img
            src="./src/assets/img/testimonials/Button2.png"
            alt="icon"
            className="w-14 h-14"
          />
        </div>
      </div>

      <div className="bg-[#FDE68A] relative">
        <div className="absolute bottom-0 w-full h-1/6 bg-white"></div>
        <div className="absolute start-0 h-full w-[40px] bg-white"></div>
        <div className="absolute end-0 h-full w-[40px] bg-white"></div>

        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={16}
          slidesPerView={1}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1, 
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="p-6 mt-10 py-4 shadow-xl bg-white border-[3px] rounded-[20px]">
                <div className="flex items-center mx-8 mt-8">
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="w-8 h-8 mr-2"></img>
                  <h3 className="text-2xl font-bold py-[3px] text-gray-primary">
                    {testimonial.company}
                  </h3>
                </div>
                <div className="h-40 mt-4 ml-8 mr-16">
                  <p className="text-black text-xl md:text-2xl">{testimonial.text}</p>
                </div>
                <div className="mx-8 mb-8 flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
