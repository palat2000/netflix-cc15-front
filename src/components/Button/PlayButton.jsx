import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PlayButton({ customizeClass }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch/`)}
      className={`${customizeClass}  cursor-pointer text-black  py-2 px-8 m-1  rounded-sm text-lg  bg-white hover:bg-opacity-90`}
    >
      <FontAwesomeIcon icon={faPlay} className="mr-2" />
      Play
    </div>
  );
}
