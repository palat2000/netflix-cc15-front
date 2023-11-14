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
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";

export default function MovieSlideTab({ movie }) {
  return (
    <>
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
        modules={[FreeMode, Pagination, Navigation]}
        className="overflow-visible overflow-x-clip mr-10 bg-black"
      >
        {movie &&
          movie?.map((m, i) => {
            console.log(movie);
            return (
              <SwiperSlide key={i}>
                <MovieCard movie={m} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
