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
  console.log(movieDetails);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    // swiperElRef.current.addEventListener("swiperslidechange", (e) => {
    //   console.log("slide changed");
    // });
  }, []);

  // const showMovieDetails = (id) => {
  //   Navigate(/)
  // }

  // const swiper = new Swiper(".swiper", {
  //   autoplay: {
  //     delay: 9000,
  //   },

  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  //   pagination: {
  //     el: ".swiper-pagination",
  //     dynamicBullets: true,
  //   },
  // });
  console.log(movieDetails);

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

/* <div className="text-white mx-10">New releases</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.NewReleases.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Continue watching</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.continueWatching.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">My list</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.myList.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Action movies</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.action.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Romance movies</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.romantic.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Comedy movies</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.comedy.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Horror movies</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.horror.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">Drama movies</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.dramas.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <div className="text-white mx-10">kid movies</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.kids.map((m, i) => {
          return (
            <swiper-slide key={m?.id}>
              <HoverMovieCard movie={m} />
            </swiper-slide>
          );
        })}
      </swiper-container> */
