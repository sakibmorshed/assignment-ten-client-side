import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Core + modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // optional but good to include

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./styles.css"; // keep your custom styles if any

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <img
          src="/slider7.webp"
          alt="Habit tracking motivation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/slider2.jpg"
          alt="Daily habits"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/slider5.jpg"
          alt="Goal achievement"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  );
}
