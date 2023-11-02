import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";
import { useEffect } from "react";
import Swal from "sweetalert2";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";

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


 

      <ContentModalContextProvider movieId={1} >
      <div className="bg-black">
        <NavbarAdult />
        <MainTrailer />
        <VDOSwiperSlides />
      </div>
        <ContentModal />
      </ContentModalContextProvider>

  );

}

export default UserBrowsePage;
