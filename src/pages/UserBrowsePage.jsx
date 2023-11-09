import ContentModal from "../feature/ContentModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import ButtonMainTrailerGroup from "../components/Browse/ButtonMainTrailerGroup";
import { editProfileAction } from "../store/slice/authSlice";

import MovieCard from "../components/Browse/MovieCard";

function UserBrowsePage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  console.log(movie);

  const { error, loading, data } = useSelector((store) => store.allContent);
  useEffect(() => {
    dispatch(fetchAllContent());
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="bg-black">
        <NavbarAdult />
        <div className=" mx-10 z-10 text-white ml-10 bottom-2/4 md:box-content  ">
          <MainTrailer />
          <ButtonMainTrailerGroup />
        </div>
        {/* <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides /> */}
      </div>
      {/* <ContentModal /> */}
    </div>
  );
}

export default UserBrowsePage;