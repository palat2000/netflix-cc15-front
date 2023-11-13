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

function UserBrowsePage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  const [search, setSearch] = useState(null);
  const [mainTrailerMovie, setMainTrailerMovie] = useState(null);
  console.log("movie =", movie);

  const { error, loading, data } = useSelector((store) => store.allContent);

  const randomMovie = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setMainTrailerMovie(movie?.movies?.top10[randomNumber - 1]);
  }, [movie?.movies?.top10]);

  useEffect(() => {
    dispatch(fetchAllContent());
  }, [dispatch]);

  useEffect(() => {
    if (movie) {
      randomMovie();
    }
  }, [movie, randomMovie]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="bg-black">
        <NavbarAdult setSearch={setSearch} />
        <div className=" mx-10 z-50 fixed text-white ml-10 bottom-1/4 md:box-content  "></div>
        <MainTrailer mainTrailerMovie={mainTrailerMovie} />

        <MovieSlideTab movie={movie?.movies?.top10} />
      </div>
    </div>
  );
}

export default UserBrowsePage;
