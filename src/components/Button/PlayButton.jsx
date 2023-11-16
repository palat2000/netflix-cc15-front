import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PlayButton({ customizeClass }) {
  const navigate = useNavigate()
  const recentVideoId = useSelector(state => state?.content?.data?.movie?.recentWatchingEpisode?.videoId)

  return (
    <div onClick={() => navigate(`/watch/${recentVideoId}`)}
      className={`${customizeClass}  cursor-pointer text-black text-xs py-1.5 px-5 m-1 rounded-sm  bg-white hover:bg-opacity-90`}
    >
      <FontAwesomeIcon icon={faPlay} className="mr-2" />
      Play
    </div>
  );
}
