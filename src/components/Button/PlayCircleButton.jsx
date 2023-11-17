import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContentAction } from "../../store/slice/contentSlice";

export default function PlayCircleButton({ movieId, customizeClass }) {
  const navigate = useNavigate()
  const recentVideoId = useSelector(state => state?.content?.data?.movie?.recentWatchingEpisode?.videoId)
  const dispatch = useDispatch()

  // useEffect(
  //   () => {
  //     dispatch(fetchContentAction(movieId)).unwrap().then(res => console.log(res)).catch(err => console.log(err))
  //   }, []
  // )

  return (
    <div onClick={() => navigate(`/watch/${recentVideoId}`)}>
      <div className={`${customizeClass}  hover:bg-opacity-90 cursor-pointer`}>
        <FontAwesomeIcon
          icon={faCirclePlay}
          className=" text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-2    "
        />
      </div>
    </div>
  );
}
