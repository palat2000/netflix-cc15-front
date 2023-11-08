// import { virtual } from "swiper/modules";
// import { Swiper } from "swiper/react";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

import "swiper/css";

register();

export default function VDOSwiperSlides({ movieDetails }) {
  const swiperElRef = useRef(null);
  // const [movie, setMovie] = useState(null);

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
  return (
    <>
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
              <video width={200} height="auto" loop autoPlay muted controls="">
                <source src={m?.trailer} type="video/mp4" />
              </video>
            </swiper-slide>
          );
        })}
      </swiper-container>

      {/* <div className="text-white mx-10">Fevorait</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        {movieDetails.movies?.fevGenre.map((m, i) => {
          return (
            <swiper-slide key={m.id}>
              <video width={200} height="auto" loop muted controls="">
                <source src={m.trailer} type="video/mp4" />
              </video>
            </swiper-slide>
          );
        })}
      </swiper-container> */}
    </>
  );
}
