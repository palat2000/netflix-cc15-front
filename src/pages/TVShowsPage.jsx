import ContentModal from "../feature/ContentModal";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import ButtonMainTrailerGroup from "../components/Browse/ButtonMainTrailerGroup";
import { editProfileAction } from "../store/slice/authSlice";

import MovieSlideTab from "../components/Browse/MovieSlideTab";
import { useLocation } from "react-router-dom";
import { endWatchingAction } from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";

function TVShowsPage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  const [search, setSearch] = useState(null);
  const [mainTrailerMovie, setMainTrailerMovie] = useState(null);
  console.log("movie =", movie);
  const recentWatch = useSelector((state) => state?.watchPage?.onWatchPage);
  const recentVideoData = useSelector((state) => state?.watchPage?.videoData);
  const haveRecentVideoData =
    recentVideoData?.videoId && recentVideoData?.recentWatching;
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
    console.log(location.pathname);
    console.log(recentWatch);
    if (location.pathname !== recentWatch && haveRecentVideoData) {
      console.log("enter Logic");
      dispatch(endWatchingAction(recentVideoData))
        .unwrap()
        .then((res) => console.log(res));
    }
  }, [dispatch]);

  useEffect(() => {
    if (movie) {
      randomMovie();
    }
  }, [movie, randomMovie]);

  if (loading) return <LoadingPage />;

  return;
}

export default TVShowsPage;
