import { useDispatch, useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import { setVideoId } from "../../store/slice/watchPageSlice";
import { useEffect, useRef } from "react";
import { fetchContentAction } from "../../store/slice/contentSlice";

export default function MainTrailer({ mainTrailerMovie }) {
  const dispatch = useDispatch()
  const mainTrailerIsMute = useSelector(store => store?.mainTrailer?.mainTrailerIsMute)

  useEffect(
    () => {
      dispatch(setVideoId(mainTrailerMovie?.id))
    }, []
  )

  const videoMain = useRef(null)

  return (
    <div>
      <div className="relative">
        <MovieDetails videoMain={videoMain} movie={mainTrailerMovie} />
        <video
          width="100%"
          className=""
          height="auto"
          loop
          autoPlay
          controls=""
          onLoadStart={() => dispatch(fetchContentAction(mainTrailerMovie?.id))}
          muted={mainTrailerIsMute}
        >
          {mainTrailerMovie && (
            <source src={mainTrailerMovie?.trailer} type="video/mp4" />
          )}
        </video>
      </div>
    </div>
  );
}
