// import { virtual } from "swiper/modules";
// import { Swiper } from "swiper/react";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

import "swiper/css";

register();

export default function VDOSwiperSlides() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
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
      <div className="text-white mx-10">Action Slides</div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="5"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide>
          <video width={200} height="auto" loop muted autoPlay controls="">
            <source
              src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
              type="video/mp4"
            />
          </video>
        </swiper-slide>
      </swiper-container>

      {/* <div className="swiper text-white text-xs ml-10">
        <div className="flex swiper-wrapper relative z-10">
          <div className=" swiper-slide">
            Action Slides
            <div className="flex">
              <video width={200} height="auto" loop muted autoPlay controls="">
                <source
                  src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
                  type="video/mp4"
                />
              </video>
              <video width={200} height="auto" loop muted autoPlay controls="">
                <source
                  src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
                  type="video/mp4"
                />
              </video>
              <video width={200} height="auto" loop muted autoPlay controls="">
                <source
                  src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
                  type="video/mp4"
                />
              </video>
              <video width={200} height="auto" loop muted autoPlay controls="">
                <source
                  src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
                  type="video/mp4"
                />
              </video>
              <video width={200} height="auto" loop muted autoPlay controls="">
                <source
                  src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
                  type="video/mp4"
                />
              </video>
              <video width={200} height="auto" loop muted autoPlay controls="">
                <source
                  src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="text-white swiper-pargination">PARGINATION</div>
              <div className="swiper-button-prev">BUTTON PREV</div>
              <div className="swiper-button-next">BUTTON-NEXT</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="text-red"> Comedy Slides </div>
      <div className="text-red"> Romantic Slides </div>
      <div className="text-red"> Sport Slides </div> */}
    </>
  );
}