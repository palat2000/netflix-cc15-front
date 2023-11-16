import { useDispatch } from "react-redux";
import MovieDetails from "./MovieDetails";
import { setVideoId } from "../../store/slice/watchPageSlice";
import { useEffect } from "react";

export default function MainTrailer({ mainTrailerMovie }) {
  console.log('zzzzzz', mainTrailerMovie)

  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(setVideoId(mainTrailerMovie.id))
    }, []
  )
  return (
    <div>
      <div className="relative h-screen bg-black">
        <MovieDetails movie={mainTrailerMovie} />
        <video
          width="auto"
          className=""
          height="auto"
          loop
          muted
          autoPlay
          controls=""
        >
          {mainTrailerMovie && (
            <source src={mainTrailerMovie?.trailer} type="video/mp4" />
          )}
        </video>
      </div>
    </div>
  );
}
