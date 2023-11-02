import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayButton({ customizeClass }) {
  return (
    <div
      className={`${customizeClass} text-black text-xs py-1.5 px-5 m-1 rounded-sm  bg-white hover:bg-opacity-90 `}
    >
      <FontAwesomeIcon icon={faPlay} className="mr-2" />
      Play
    </div>
  );
}
