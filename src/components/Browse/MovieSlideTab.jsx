import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";

export default function MovieSlideTab({ movie, title }) {
  return (
    <>
      <div className="text-white">{title}</div>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        // freeMode={false}
        speed={2000}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // effect="fade"
        modules={[FreeMode, Navigation]}
        className="overflow-visible overflow-x-clip mr-10 my-10 bg-black"
      >
        {movie &&
          movie?.map((m, i) => {
            return (
              <SwiperSlide key={i} className="pt-10 pb-10 my-20">
                <MovieCard key={i} movie={m} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
