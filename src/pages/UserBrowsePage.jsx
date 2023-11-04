import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "../config/axios";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import ButtonMainTrailerGroup from "../components/Browse/ButtonMainTrailerGroup";

function UserBrowsePage() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");
    const subscription = async (sessionId) => {
      try {
        await axios.post(`/payment/success-subscription/${sessionId}`);
        Swal.fire({
          title: "Payment successful",
          text: "Subscription success",
          icon: "success",
          confirmButtonText: "close",
        });
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    };
    if (query.get("success") === "true") {
      subscription(sessionId);
    }
  }, []);

  return (
    <div>
      <ContentModalContextProvider movieId={1}>
        <div className="bg-black">
          <NavbarAdult />
          <div className=" mx-10 z-10 text-white ml-10 bottom-2/4 md:box-content  ">
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
