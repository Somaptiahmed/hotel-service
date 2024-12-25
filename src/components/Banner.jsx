

import React from "react";

import b11 from "../assets/b11.png";
import c11 from "../assets/c11.jpg";
import d11 from "../assets/d11.jpg";
import e11 from "../assets/e11.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="text-blue-950 text-center w-9/12 mx-auto relative">
      <h1 className="text-2xl font-bold p-4 my-5">
        <span className="text-3xl welcome-text animate-pulse">Get Hotel Online</span>
        <br />
        <span className="text-gray-500">
          Hotel booking allows users to reserve accommodations online, providing
          options for room types, pricing, dates, and payment methods.
        </span>
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img src={b11} alt="Luxury Rooms" className="w-full h-[600px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold transition duration-300 hover:text-purple-300">
              Experience Luxury Like Never Before
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img src={c11} alt="Comfortable Stays" className="w-full h-[600px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold transition duration-300 hover:text-purple-300">
              Your Comfort, Our Priority
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img src={d11} alt="Unforgettable Views" className="w-full h-[600px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold transition duration-300 hover:text-purple-300">
              Wake Up to Unforgettable Views
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img src={e11} alt="Relax & Recharge" className="w-full h-[600px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold transition duration-300 hover:text-purple-300">
              Relax & Recharge in Style
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

