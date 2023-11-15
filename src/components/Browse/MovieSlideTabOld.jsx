import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

import Swiper from "swiper";
import { register } from "swiper/element";

function MovieSlideTabOld() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidePerView: 6,
      breakpoints: {
        768: {
          slidePerView: 4,
        },
      },
    };
    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();

    const swiper = document.querySelector("#movie-container");
    const shadowSwiper = swiper.shadowRoot.querySelector(".swiper");
    shadowSwiper.style.overflow = "visible";
    console.log(shadowSwiper);
  }, []);

  return (
    <swiper-container
      init="false"
      ref={swiperRef}
      className="flex text-white "
      id="movie-container"
      slidePerView={6}
      spaceBetween={50}
    >
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </swiper-container>
  );
}

export default MovieSlideTab;
