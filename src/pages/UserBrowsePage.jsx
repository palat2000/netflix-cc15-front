import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";
import { useEffect } from "react";
import Swal from "sweetalert2";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import ButtonMainTrailerGroup from "../components/Browse/ButtonMainTrailerGroup";

function UserBrowsePage() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success") === "true") {
      Swal.fire({
        title: "Payment successful",
        text: "Subscription success",
        icon: "success",
        confirmButtonText: "close",
      });
    }
  }, []);

  return (
    <div>
      <ContentModalContextProvider movieId={1}>
        <div className="bg-black">
          <NavbarAdult />
          <div className=" mx-10 z-50 fixed text-white ml-10 bottom-1/4 md:box-content  ">
            <ButtonMainTrailerGroup />
          </div>
          <MainTrailer />
          <VDOSwiperSlides />
          <VDOSwiperSlides />
          <VDOSwiperSlides />
          <VDOSwiperSlides />
          <VDOSwiperSlides />
        </div>
        <ContentModal />
      </ContentModalContextProvider>
    </div>
  );
}

export default UserBrowsePage;
