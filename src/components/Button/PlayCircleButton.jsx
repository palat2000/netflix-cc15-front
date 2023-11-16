import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PlayCircleButton({ customizeClass }) {
  const navigate = useNavigate()
  const recentVideoId = useSelector(state => state?.content?.data?.movie?.recentWatchingEpisode?.videoId)

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
