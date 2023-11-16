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
import {
  endWatchingAction,
  setRecentWatching,
  setVideoId,
} from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";
import ContentModalDetail from "../feature/ContentModalDetail";

function UserBrowsePage() {
  const dispatch = useDispatch();
  const userProfile = useSelector(store=>store.user.data.userProfile)
  const movie = useSelector((state) => state.allContent.data);
  const modalIsOpen = useSelector((state) => state.content.modalIsOpen);
  // const [search, setSearch] = useState(null);
  const [mainTrailerMovie, setMainTrailerMovie] = useState(null);
  const recentWatch = useSelector((state) => state?.watchPage?.onWatchPage);
  const recentVideoData = useSelector((state) => state?.watchPage?.videoData);
  const haveRecentVideoData =
    recentVideoData?.videoId &&
    recentVideoData?.recentWatching &&
    recentVideoData?.videoDuration;

  const location = useLocation();

  const { error, loading, data } = useSelector((store) => store.allContent);

  const randomMovie = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setMainTrailerMovie(movie?.movies?.top10[randomNumber - 1]);
  }, [movie?.movies?.top10]);

  useEffect(() => {
    console.log('fetch content')
    dispatch(fetchAllContent());
    dispatch(setVideoId(null))
    if (location.pathname !== recentWatch && haveRecentVideoData) {
      if (recentVideoData?.recentWatching === recentVideoData?.videoDuration) {
        dispatch(
          endWatchingAction({
            videoId: recentVideoData?.videoId,
            recentWatching: 0,
          })
        )
          .unwrap()
          .then((res) => console.log(res));
      } else {
        dispatch(endWatchingAction(recentVideoData))
          .unwrap()
          .then((res) => console.log(res));
      }
    }
  }, []);

  useEffect(() => {
    if (movie) {
      randomMovie();
    }
  }, [movie, randomMovie]);

  if (loading) return <LoadingPage />;

  return (
    <div className="bg-black">
      <MainTrailer mainTrailerMovie={mainTrailerMovie} />

      <div className="flex flex-col font-medium ml-10 ">
        <MovieSlideTab
          title="Continue Watching"
          movie={movie?.movies?.continueWatching}
        />
        <MovieSlideTab title="Top 10" movie={movie?.movies?.top10} />
        <MovieSlideTab
          title="New Releases"
          movie={movie?.movies?.newReleases}
        />
        <MovieSlideTab title="Action" movie={movie?.movies?.action} />
        <MovieSlideTab title="Sport" movie={movie?.movies?.sport} />
        <MovieSlideTab title="Comedy" movie={movie?.movies?.comedy} />
        <MovieSlideTab title="Horror" movie={movie?.movies?.horror} />
        <MovieSlideTab title="Kids" movie={movie?.movies?.kids} />
        <MovieSlideTab title="Romantic" movie={movie?.movies?.romantic} />
      </div>
      {modalIsOpen && <ContentModalDetail />}
    </div>
  );
}

export default UserBrowsePage;
