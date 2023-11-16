// import { virtual } from "swiper/modules";
// import { Swiper } from "swiper/react";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

import "swiper/css";
import HoverMovieCard from "./HoverMovieCard";

register();

export default function VDOSwiperSlides({ movieDetails }) {
  const swiperElRef = useRef(null);
  // const [movie, setMovie] = useState(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <>
      <div className="text-white mx-10">Top 10</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails?.movies?.top10?.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div className="text-white mx-10">Top 10</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.top10.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Top 10</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.top10.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div className="text-white mx-10">Top 10</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.top10.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
}
