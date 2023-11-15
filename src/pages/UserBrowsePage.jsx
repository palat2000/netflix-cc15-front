import ContentModal from "../feature/ContentModal";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import ButtonMainTrailerGroup from "../components/Browse/ButtonMainTrailerGroup";
import { editProfileAction } from "../store/slice/authSlice";

import MovieCard from "../components/Browse/MovieCard";
import MovieSlideTab from "../components/Browse/MovieSlideTab";
import { useLocation } from "react-router-dom";
import { endWatchingAction, setRecentWatching } from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";
import ContentModalDetail from "../feature/ContentModalDetail";

function UserBrowsePage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  const modalIsOpen = useSelector((state) => state.content.modalIsopen);
  const [search, setSearch] = useState(null);
  const [mainTrailerMovie, setMainTrailerMovie] = useState(null);
  console.log("movie =", movie);
  const recentWatch = useSelector((state) => state?.watchPage?.onWatchPage);
  const recentVideoData = useSelector((state) => state?.watchPage?.videoData);
  const haveRecentVideoData = recentVideoData?.videoId && recentVideoData?.recentWatching && recentVideoData?.videoDuration
  console.log(movie);

  const location = useLocation();
  console.log(location.pathname);
  console.log(haveRecentVideoData);

  const { error, loading, data } = useSelector((store) => store.allContent);

  const randomMovie = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setMainTrailerMovie(movie?.movies?.top10[randomNumber - 1]);
  }, [movie?.movies?.top10]);

  useEffect(() => {
    dispatch(fetchAllContent());
    // console.log(location.pathname)
    // console.log(recentWatch)
    if (location.pathname !== recentWatch && haveRecentVideoData) {
      console.log(recentVideoData?.recentWatching === recentVideoData?.videoDuration)
      if (recentVideoData?.recentWatching === recentVideoData?.videoDuration) {
        dispatch(endWatchingAction({ videoId: recentVideoData?.videoId, recentWatching: 0 })).unwrap().then(res => console.log(res))
      } else {
        dispatch(endWatchingAction(recentVideoData)).unwrap().then(res => console.log(res))
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (movie) {
      randomMovie();
    }
  }, [movie, randomMovie]);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <div className="bg-black">
        <NavbarAdult setSearch={setSearch} />
        <div className=" mx-10 z-50 fixed text-white ml-10 bottom-1/4 md:box-content  "></div>
        <MainTrailer mainTrailerMovie={mainTrailerMovie} />

        <MovieSlideTab movie={movie?.movies?.top10} />
        {modalIsOpen && <ContentModalDetail movieId={1} />}
      </div>
    </div>
  );
}

export default UserBrowsePage;
