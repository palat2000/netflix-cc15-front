import MainTrailer from "../components/Browse/MainTrailer";

import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";

function UserBrowsePage() {
  return (
    <>
      <div className="bg-black">
        <NavbarAdult />
        <MainTrailer />
        <VDOSwiperSlides />
      </div>
    </>
  );
}

export default UserBrowsePage;
