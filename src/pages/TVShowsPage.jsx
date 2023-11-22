import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

import MainTrailer from "../components/Browse/MainTrailer";

import MovieSlideTab from "../components/Browse/MovieSlideTab";
import { useLocation } from "react-router-dom";
import { endWatchingAction } from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";

function TVShowsPage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  const [search, setSearch] = useState(null);
  const [mainTrailerMovie, setMainTrailerMovie] = useState(null);
  const recentWatch = useSelector((state) => state?.watchPage?.onWatchPage);
  const recentVideoData = useSelector((state) => state?.watchPage?.videoData);
  const haveRecentVideoData =
    recentVideoData?.videoId && recentVideoData?.recentWatching;

  const location = useLocation();

  const { error, loading, data } = useSelector((store) => store.allContent);

  const randomMovie = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setMainTrailerMovie(movie?.movies?.top10[randomNumber - 1]);
  }, [movie?.movies?.top10]);

  useEffect(() => {
    dispatch(fetchAllContent("isTVShow=1"));
    console.log(location.pathname);
    console.log(recentWatch);
    if (location.pathname !== recentWatch && haveRecentVideoData) {
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
        {movie?.movies?.continueWatching?.length > 0 && (
          <MovieSlideTab
            title="Continue Watching"
            movie={movie?.movies?.continueWatching}
          />
        )}
        {movie?.movies?.top10?.length > 0 && (
          <MovieSlideTab title="Top 10" movie={movie?.movies?.top10} />
        )}
        {movie?.movies?.newReleases?.length > 0 && (
          <MovieSlideTab
            title="New Releases"
            movie={movie?.movies?.newReleases}
          />
        )}
        {movie?.movies?.action?.length > 0 && (
          <MovieSlideTab title="Action" movie={movie?.movies?.action} />
        )}
        {movie?.movies?.sport?.length > 0 && (
          <MovieSlideTab title="Sport" movie={movie?.movies?.sport} />
        )}
        {movie?.movies?.comedy?.length > 0 && (
          <MovieSlideTab title="Comedy" movie={movie?.movies?.comedy} />
        )}
        {movie?.movies?.horror?.length > 0 && (
          <MovieSlideTab title="Horror" movie={movie?.movies?.horror} />
        )}
        {movie?.movies?.kids?.length > 0 && (
          <MovieSlideTab title="Kids" movie={movie?.movies?.kids} />
        )}
        {movie?.movies?.romantic?.length > 0 && (
          <MovieSlideTab title="Romantic" movie={movie?.movies?.romantic} />
        )}
      </div>
    </div>
  );
}

export default TVShowsPage;
