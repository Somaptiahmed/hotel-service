import React from "react";

import b11 from "../assets/b11.png"
import c11 from "../assets/c11.jpg"
import d11 from "../assets/d11.jpg"
import e11 from "../assets/e11.webp"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="text-purple-900 text-center w-9/12 mx-auto ">
      <h1 className="text-2xl font-bold p-4 my-5"><span className="text-3xl welcome-text animate-pulse">
  Get Hotel Online
</span>

<span className="text-gray-500"><br />Hotel booking allows users to reserve accommodations online, providing options for room types, pricing, dates, and payment methods.</span></h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {/* Add 4 slides with images */}
        <SwiperSlide>
          <img
            src={b11}
            alt="Slide 1"
            className="w-full h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={c11}
            alt="Slide 2"
            className="w-full h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={d11}
            className="w-full h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={e11}
            alt="Slide 4"
            className="w-full h-[600px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;