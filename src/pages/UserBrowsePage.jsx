import MainTrailer from "../components/Browse/MainTrailer";

import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSlides from "../components/Browse/VDOSlides";

function UserBrowsePage() {
  return (
    <>
      <div className="bg-black">
        <NavbarAdult />

        <MainTrailer />
        <VDOSlides />
      </div>
    </>
  );
}

export default UserBrowsePage;
