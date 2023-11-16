import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";

import MovieSlideTab from "../components/Browse/MovieSlideTab";
import { useLocation } from "react-router-dom";
import { endWatchingAction } from "../store/slice/watchPageSlice";
import LoadingPage from "./LoadingPage";

function MoviesPage() {
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

  const { error, loading, data } = useSelector((store) => store.allContent);

  const randomMovie = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setMainTrailerMovie(movie?.movies?.top10[randomNumber - 1]);
  }, [movie?.movies?.top10]);

  useEffect(() => {
    dispatch(fetchAllContent(0));
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
      <NavbarAdult setSearch={setSearch} />
      {/* <div className=" mx-10 z-50 fixed text-white ml-10 bottom-1/4 md:box-content  ">
          TESTESTEST
        </div> */}
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
    </div>
  );
}

export default MoviesPage;
