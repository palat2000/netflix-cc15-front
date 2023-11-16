import { useDispatch, useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import { setVideoId } from "../../store/slice/watchPageSlice";
import { useEffect } from "react";
import { fetchContentAction } from "../../store/slice/contentSlice";

export default function MainTrailer({ mainTrailerMovie }) {
  console.log('zzzzzz', mainTrailerMovie)

  const dispatch = useDispatch()
  // useSelector()

  useEffect(
    () => {
      dispatch(setVideoId(mainTrailerMovie?.id))
    }, []
  )

  return (
    <div>
      <div className="relative">
        <MovieDetails movie={mainTrailerMovie} />
        <video
          width="100%"
          className=""
          height="auto"
          loop
          muted
          autoPlay
          controls=""
          onLoadStart={() => dispatch(fetchContentAction(mainTrailerMovie?.id))}
        >
          {mainTrailerMovie && (
            <source src={mainTrailerMovie?.trailer} type="video/mp4" />
          )}
        </video>
      </div>
    </div>
  );
}
