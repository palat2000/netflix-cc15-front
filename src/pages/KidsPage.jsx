import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

import MainTrailer from "../components/Browse/MainTrailer";

import MovieSlideTab from "../components/Browse/MovieSlideTab";
import { useLocation } from "react-router-dom";
import { endWatchingAction } from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";

function KidsPage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);

  const [mainTrailerMovie, setMainTrailerMovie] = useState(null);
  console.log("movie =", movie);
  const recentWatch = useSelector((state) => state?.watchPage?.onWatchPage);
  const recentVideoData = useSelector((state) => state?.watchPage?.videoData);
  const haveRecentVideoData =
    recentVideoData?.videoId && recentVideoData?.recentWatching;

  const location = useLocation();

  const { error, loading, data } = useSelector((store) => store.allContent);

  const randomMovie = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setMainTrailerMovie(movie?.movies?.kids[randomNumber - 1]);
  }, [movie?.movies?.kids]);

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

        <MovieSlideTab title="Kids" movie={movie?.movies?.kids} />
      </div>
    </div>
  );
}

export default KidsPage;
