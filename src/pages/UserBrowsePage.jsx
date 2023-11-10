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
import MovieSlideTab from "../components/Browse/MovieSlider";

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
        <div className="static">
          <MainTrailer />
        </div>
        {/* <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides /> */}
      </div>
      <ContentModal movieId={2} />
    </div>
  );
}

export default UserBrowsePage;
