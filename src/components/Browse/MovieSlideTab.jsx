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
        spaceBetween={1}
        // freeMode={false}
        speed={1000}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // effect="fade"
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper overflow-visible overflow-x-clip"
      >
        {movie &&
          movie?.map((m, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{ maxWidth: "1200px", margin: "0 auto" }}
              >
                <MovieCard movie={m} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
