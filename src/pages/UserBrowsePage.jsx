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
import { useLocation } from "react-router-dom";
import { endWatchingAction } from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";

function UserBrowsePage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  const recentWatch = useSelector((state) => state?.watchPage?.onWatchPage);
  const recentVideoData = useSelector((state) => state?.watchPage?.videoData);
  const haveRecentVideoData =
    recentVideoData?.videoId && recentVideoData?.recentWatching;
  console.log(movie);

  const location = useLocation();
  console.log(location.pathname);
  console.log(haveRecentVideoData);

  const { error, loading, data } = useSelector((store) => store.allContent);
  useEffect(() => {
    dispatch(fetchAllContent());
    console.log(location.pathname);
    console.log(recentWatch);
    if (location.pathname !== recentWatch && haveRecentVideoData) {
      console.log("enter Logic");
      dispatch(endWatchingAction(recentVideoData))
        .unwrap()
        .then((res) => console.log(res));
    }
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <div className="bg-black">
        <NavbarAdult />
        <div className="static">
          <MainTrailer />
        </div>
        <MovieSlideTab />
        {/* <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides />
        <VDOSwiperSlides /> */}
      </div>
      {/* <ContentModal movieId={2} /> */}
    </div>
  );
}

export default UserBrowsePage;
